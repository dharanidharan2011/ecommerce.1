from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FloatField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class ProductForm(FlaskForm):
    name = StringField('Product Name', validators=[DataRequired(), Length(min=2, max=100)])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=10, max=1000)])
    price = FloatField('Price', validators=[DataRequired(), NumberRange(min=0.01)])
    image = StringField('Image URL', validators=[DataRequired(), Length(min=5, max=200)])
    stock = IntegerField('Stock', validators=[DataRequired(), NumberRange(min=0)])
    category = SelectField('Category', choices=[
        ('Electronics', 'Electronics'),
        ('Accessories', 'Accessories'),
        ('Home', 'Home'),
        ('Storage', 'Storage')
    ], validators=[DataRequired()])
    submit = SubmitField('Save Product')

class OrderStatusForm(FlaskForm):
    status = SelectField('Status', choices=[
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled')
    ], validators=[DataRequired()])
    submit = SubmitField('Update Status')