# E-Commerce Website - Full Stack Application

A complete e-commerce website built with Python Flask, MySQL, and Stripe payment integration. Features include user authentication, product management, shopping cart, checkout, and an admin panel.

## Features

### User Features
- **User Authentication**: Registration and login with secure password hashing
- **Product Browsing**: View 25+ products with categories and search functionality
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Secure payment processing via Stripe
- **Order Management**: View order history and confirmation
- **Search & Filter**: Search products by name/description, filter by category

### Admin Features
- **Dashboard**: Overview of orders, revenue, products, and users
- **Product Management**: Add, edit, delete products with images
- **Order Management**: View orders, update order status
- **User Management**: View users, toggle admin privileges
- **Low Stock Alerts**: Dashboard warning for products with low stock

### Technical Features
- **Responsive Design**: Mobile-friendly Bootstrap 5 interface
- **Secure Authentication**: Flask-Login with password hashing
- **Payment Integration**: Stripe for secure credit card processing
- **Database**: MySQL with SQLAlchemy ORM
- **REST API**: JSON endpoints for product and category data
- **Session Management**: Cart items stored in sessions

## Installation

### Prerequisites
- Python 3.11+
- MySQL 8.0+
- pip (Python package manager)
- Stripe account (for payments)

### Step 1: Clone and Setup

```bash
# Navigate to project directory
cd ecommerce-website
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Database Setup

1. **Create MySQL Database**:

```sql
CREATE DATABASE ecommerce_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. **Update Database Configuration**:

Edit `.env` file with your MySQL credentials:

```env
DATABASE_URL=mysql+pymysql://your_username:your_password@localhost/ecommerce_db
```

### Step 4: Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Update `.env` file:

```env
STRIPE_PUBLIC_KEY=pk_test_your_public_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
```

### Step 5: Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update the following variables:
- `SECRET_KEY`: Generate a secure random key
- `DATABASE_URL`: Your MySQL connection string
- `STRIPE_PUBLIC_KEY`: Your Stripe public key
- `STRIPE_SECRET_KEY`: Your Stripe secret key

### Step 6: Initialize Database

```bash
# Run the application (it will create tables automatically)
python run.py
```

The application will automatically:
- Create all database tables
- Seed 25 sample products

## Running the Application

### Development Server

```bash
python run.py
```

The application will be available at `http://localhost:5000`

### Production Deployment

For production, use a WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 run:app
```

## Default Admin Account

The first user registered will not have admin privileges. To create an admin user:

1. Register a new account
2. Access the database and set `is_admin = 1` for that user:

```sql
UPDATE user SET is_admin = 1 WHERE username = 'your_username';
```

Or use the Flask shell:

```bash
python run.py shell
>>> from app.models import User
>>> user = User.query.filter_by(username='your_username').first()
>>> user.is_admin = True
>>> from app import db
>>> db.session.commit()
```

## Project Structure

```
ecommerce-website/
├── app/
│   ├── __init__.py              # Flask application factory
│   ├── models.py                # Database models
│   ├── seeds.py                 # Product seed data
│   ├── config.py                # Configuration management
│   ├── auth/                    # Authentication module
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   ├── main/                    # Main application module
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── cart/                    # Shopping cart module
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   ├── admin/                   # Admin panel module
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   ├── api/                     # REST API module
│   │   ├── __init__.py
│   │   └── routes.py
│   └── templates/               # HTML templates
│       ├── base.html
│       ├── index.html
│       ├── product.html
│       ├── search.html
│       ├── cart.html
│       ├── checkout.html
│       ├── order_confirmation.html
│       ├── auth/
│       │   ├── login.html
│       │   └── register.html
│       └── admin/
│           ├── dashboard.html
│           ├── products.html
│           ├── product_form.html
│           ├── orders.html
│           ├── order_details.html
│           └── users.html
├── config.py                    # Configuration classes
├── requirements.txt             # Python dependencies
├── run.py                       # Application entry point
├── .env.example                # Environment variables template
└── README.md                    # This file
```

## Database Schema

### Users Table
- id (Primary Key)
- username (Unique)
- email (Unique)
- password_hash
- is_admin (Boolean)
- created_at (Timestamp)

### Products Table
- id (Primary Key)
- name
- description
- price
- image (URL)
- stock
- category
- created_at (Timestamp)

### Orders Table
- id (Primary Key)
- user_id (Foreign Key)
- total_amount
- status (pending, processing, shipped, delivered, cancelled)
- stripe_payment_intent_id
- shipping_address
- created_at (Timestamp)

### OrderItems Table
- id (Primary Key)
- order_id (Foreign Key)
- product_id (Foreign Key)
- quantity
- price

## API Endpoints

### Products
- `GET /api/products` - List all products with pagination
- `GET /api/products/<id>` - Get single product details

### Categories
- `GET /api/categories` - List all product categories

### Search
- `GET /api/products?search=query` - Search products
- `GET /api/products?category=name` - Filter by category

## Features Breakdown

### 1. User Authentication
- Secure password hashing with Werkzeug
- Session-based authentication with Flask-Login
- Protected routes for checkout and admin panel
- User registration with validation

### 2. Shopping Cart
- Session-based cart storage
- Add/remove items
- Update quantities
- Stock validation
- Real-time cart updates

### 3. Checkout Process
- Secure payment processing with Stripe
- Address collection
- Tax calculation (8%)
- Order creation and confirmation
- Payment intent management

### 4. Product Management
- 25 pre-seeded products
- Categories: Electronics, Accessories, Home, Storage
- Product images from Unsplash
- Stock tracking
- Search and filter functionality

### 5. Admin Panel
- Dashboard with statistics
- Product CRUD operations
- Order management and status updates
- User management
- Low stock alerts

## Security Features

- Password hashing with bcrypt
- CSRF protection with Flask-WTF
- SQL injection prevention with SQLAlchemy
- Secure session management
- Admin-only routes protection
- Input validation and sanitization

## Customization

### Adding Products

Products can be added through:
1. Admin panel: `/admin/product/add`
2. Database: Direct SQL insertion
3. Seed data: Edit `app/seeds.py`

### Styling

The application uses Bootstrap 5. Custom styles are in `base.html`:
- Product cards with hover effects
- Responsive navigation
- Modern card designs
- Color-coded status badges

### Payment Integration

To use live payments:
1. Update Stripe keys in `.env` with live keys
2. Set up webhooks in Stripe Dashboard
3. Update `STRIPE_WEBHOOK_SECRET` in `.env`

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database exists

### Stripe Payment Errors
- Verify API keys are correct
- Check Stripe account status
- Ensure webhook endpoints are accessible

### Session Issues
- Clear browser cookies
- Check `SECRET_KEY` in `.env`
- Ensure session storage is writable

## Dependencies

- Flask 3.0.0 - Web framework
- Flask-SQLAlchemy 3.1.1 - ORM
- Flask-Login 0.6.3 - Authentication
- Flask-Migrate 4.0.5 - Database migrations
- Stripe 7.8.0 - Payment processing
- PyMySQL 1.1.0 - MySQL driver
- python-dotenv 1.0.0 - Environment variables
- email-validator 2.1.0 - Email validation

## License

This project is provided as-is for educational and commercial use.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the database schema
3. Verify environment variables
4. Check Flask logs for errors

## Future Enhancements

- Email notifications for orders
- Product reviews and ratings
- Wish list functionality
- Order tracking
- Multiple payment methods
- Coupon/discount codes
- Advanced search filters
- Product recommendations
- Customer support chat
- Multi-language support