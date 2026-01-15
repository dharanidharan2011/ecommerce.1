from flask import render_template, redirect, url_for, flash, request
from app.admin import bp
from app.models import Product, Order, OrderItem, User
from app.admin.forms import ProductForm, OrderStatusForm
from flask_login import login_required, current_user
from app import db
from functools import wraps

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated or not current_user.is_admin:
            flash('Admin access required.', 'danger')
            return redirect(url_for('main.index'))
        return f(*args, **kwargs)
    return decorated_function

@bp.route('/dashboard')
@login_required
@admin_required
def dashboard():
    total_orders = Order.query.count()
    total_revenue = db.session.query(db.func.sum(Order.total_amount)).scalar() or 0
    total_products = Product.query.count()
    total_users = User.query.count()
    
    recent_orders = Order.query.order_by(Order.created_at.desc()).limit(10).all()
    low_stock_products = Product.query.filter(Product.stock < 10).all()
    
    return render_template('admin/dashboard.html',
                         total_orders=total_orders,
                         total_revenue=total_revenue,
                         total_products=total_products,
                         total_users=total_users,
                         recent_orders=recent_orders,
                         low_stock_products=low_stock_products,
                         current_user=current_user)

@bp.route('/products')
@login_required
@admin_required
def products():
    page = request.args.get('page', 1, type=int)
    products = Product.query.paginate(
        page=page, per_page=20, error_out=False
    )
    return render_template('admin/products.html', products=products, current_user=current_user)

@bp.route('/product/add', methods=['GET', 'POST'])
@login_required
@admin_required
def add_product():
    form = ProductForm()
    if form.validate_on_submit():
        product = Product(
            name=form.name.data,
            description=form.description.data,
            price=form.price.data,
            image=form.image.data,
            stock=form.stock.data,
            category=form.category.data
        )
        db.session.add(product)
        db.session.commit()
        flash('Product added successfully!', 'success')
        return redirect(url_for('admin.products'))
    
    return render_template('admin/product_form.html', form=form, title='Add Product', current_user=current_user)

@bp.route('/product/<int:id>/edit', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_product(id):
    product = Product.query.get_or_404(id)
    form = ProductForm(obj=product)
    
    if form.validate_on_submit():
        product.name = form.name.data
        product.description = form.description.data
        product.price = form.price.data
        product.image = form.image.data
        product.stock = form.stock.data
        product.category = form.category.data
        db.session.commit()
        flash('Product updated successfully!', 'success')
        return redirect(url_for('admin.products'))
    
    return render_template('admin/product_form.html', form=form, product=product, title='Edit Product', current_user=current_user)

@bp.route('/product/<int:id>/delete', methods=['POST'])
@login_required
@admin_required
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    flash('Product deleted successfully!', 'success')
    return redirect(url_for('admin.products'))

@bp.route('/orders')
@login_required
@admin_required
def orders():
    page = request.args.get('page', 1, type=int)
    orders = Order.query.order_by(Order.created_at.desc()).paginate(
        page=page, per_page=20, error_out=False
    )
    return render_template('admin/orders.html', orders=orders, current_user=current_user)

@bp.route('/order/<int:id>')
@login_required
@admin_required
def order_details(id):
    order = Order.query.get_or_404(id)
    return render_template('admin/order_details.html', order=order, current_user=current_user)

@bp.route('/order/<int:id>/status', methods=['POST'])
@login_required
@admin_required
def update_order_status(id):
    order = Order.query.get_or_404(id)
    form = OrderStatusForm()
    
    if form.validate_on_submit():
        order.status = form.status.data
        db.session.commit()
        flash('Order status updated!', 'success')
    
    return redirect(url_for('admin.order_details', id=id))

@bp.route('/users')
@login_required
@admin_required
def users():
    page = request.args.get('page', 1, type=int)
    users = User.query.paginate(
        page=page, per_page=20, error_out=False
    )
    return render_template('admin/users.html', users=users, current_user=current_user)

@bp.route('/user/<int:id>/toggle-admin', methods=['POST'])
@login_required
@admin_required
def toggle_admin(id):
    user = User.query.get_or_404(id)
    if user.id == current_user.id:
        flash('You cannot modify your own admin status.', 'warning')
    else:
        user.is_admin = not user.is_admin
        db.session.commit()
        flash(f'Admin status updated for {user.username}.', 'success')
    
    return redirect(url_for('admin.users'))