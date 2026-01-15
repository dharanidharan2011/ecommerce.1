from app.models import Product, db
import random

def seed_products():
    products = [
        {
            'name': 'Wireless Bluetooth Headphones',
            'description': 'Premium wireless headphones with noise cancellation, 20-hour battery life, and crystal clear audio quality.',
            'price': 79.99,
            'image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            'stock': 50,
            'category': 'Electronics'
        },
        {
            'name': 'Smart Watch Pro',
            'description': 'Advanced smartwatch with fitness tracking, heart rate monitor, GPS, and 7-day battery life.',
            'price': 199.99,
            'image': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
            'stock': 30,
            'category': 'Electronics'
        },
        {
            'name': 'Laptop Stand Aluminum',
            'description': 'Ergonomic aluminum laptop stand, adjustable height, improves posture and cooling.',
            'price': 45.99,
            'image': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
            'stock': 100,
            'category': 'Accessories'
        },
        {
            'name': 'USB-C Hub Multiport',
            'description': '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
            'price': 34.99,
            'image': 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400',
            'stock': 75,
            'category': 'Accessories'
        },
        {
            'name': 'Mechanical Keyboard RGB',
            'description': 'Gaming mechanical keyboard with RGB lighting, Cherry MX switches, and programmable keys.',
            'price': 89.99,
            'image': 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400',
            'stock': 40,
            'category': 'Electronics'
        },
        {
            'name': 'Wireless Mouse Ergonomic',
            'description': 'Ergonomic wireless mouse with precision tracking, 6 programmable buttons, and rechargeable battery.',
            'price': 29.99,
            'image': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
            'stock': 120,
            'category': 'Accessories'
        },
        {
            'name': '4K Webcam HD',
            'description': 'Ultra HD 4K webcam with auto focus, built-in microphone, and low-light correction.',
            'price': 59.99,
            'image': 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
            'stock': 60,
            'category': 'Electronics'
        },
        {
            'name': 'Portable SSD 1TB',
            'description': 'Ultra-fast portable SSD with 1TB storage, USB 3.2 Gen 2, and shock-resistant design.',
            'price': 129.99,
            'image': 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400',
            'stock': 45,
            'category': 'Storage'
        },
        {
            'name': 'Wireless Charger Pad',
            'description': 'Fast wireless charging pad compatible with all Qi-enabled devices, 15W output.',
            'price': 24.99,
            'image': 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400',
            'stock': 200,
            'category': 'Accessories'
        },
        {
            'name': 'Smart LED Desk Lamp',
            'description': 'LED desk lamp with adjustable brightness, color temperature, and USB charging port.',
            'price': 39.99,
            'image': 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
            'stock': 80,
            'category': 'Home'
        },
        {
            'name': 'Bluetooth Speaker Waterproof',
            'description': 'Portable waterproof Bluetooth speaker with 12-hour battery and powerful bass.',
            'price': 49.99,
            'image': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
            'stock': 65,
            'category': 'Electronics'
        },
        {
            'name': 'Laptop Backpack Anti-Theft',
            'description': 'Water-resistant anti-theft backpack with USB charging port and laptop compartment.',
            'price': 54.99,
            'image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'stock': 90,
            'category': 'Accessories'
        },
        {
            'name': 'Phone Stand Universal',
            'description': 'Adjustable aluminum phone stand, compatible with all smartphones and tablets.',
            'price': 19.99,
            'image': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
            'stock': 150,
            'category': 'Accessories'
        },
        {
            'name': 'Gaming Mouse Pad XL',
            'description': 'Extra large gaming mouse pad with non-slip rubber base and smooth surface.',
            'price': 17.99,
            'image': 'https://images.unsplash.com/photo-1563299796-b729c6d07b71?w=400',
            'stock': 110,
            'category': 'Accessories'
        },
        {
            'name': 'Webcam Ring Light',
            'description': 'LED ring light with tripod mount, adjustable brightness and color temperature.',
            'price': 32.99,
            'image': 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400',
            'stock': 70,
            'category': 'Electronics'
        },
        {
            'name': 'USB Data Cable 3-Pack',
            'description': 'Premium USB charging cables, 6ft length, compatible with most devices.',
            'price': 14.99,
            'image': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            'stock': 250,
            'category': 'Accessories'
        },
        {
            'name': 'Tablet Stand Foldable',
            'description': 'Portable foldable tablet stand, adjustable angles, compact design.',
            'price': 22.99,
            'image': 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
            'stock': 130,
            'category': 'Accessories'
        },
        {
            'name': 'Power Bank 20000mAh',
            'description': 'High-capacity power bank with fast charging, dual USB ports, and LED indicator.',
            'price': 44.99,
            'image': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400',
            'stock': 85,
            'category': 'Electronics'
        },
        {
            'name': 'Wireless Earbuds Pro',
            'description': 'True wireless earbuds with active noise cancellation, touch controls, and 24-hour battery.',
            'price': 69.99,
            'image': 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
            'stock': 95,
            'category': 'Electronics'
        },
        {
            'name': 'Car Phone Mount',
            'description': 'Universal car phone mount with 360-degree rotation and strong suction cup.',
            'price': 16.99,
            'image': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            'stock': 180,
            'category': 'Accessories'
        },
        {
            'name': 'Smart Home Hub',
            'description': 'Central smart home hub compatible with Alexa, Google Home, and smart devices.',
            'price': 89.99,
            'image': 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400',
            'stock': 35,
            'category': 'Home'
        },
        {
            'name': 'LED Strip Lights RGB',
            'description': 'RGB LED strip lights with remote control, 16 million colors, music sync mode.',
            'price': 27.99,
            'image': 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400',
            'stock': 140,
            'category': 'Home'
        },
        {
            'name': 'Digital Notepad Tablet',
            'description': 'Electronic notepad with pressure sensitivity, rechargeable battery, and cloud sync.',
            'price': 79.99,
            'image': 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
            'stock': 55,
            'category': 'Electronics'
        },
        {
            'name': 'Wireless Gaming Controller',
            'description': 'Universal gaming controller with vibration feedback, programmable buttons, and 40-hour battery.',
            'price': 49.99,
            'image': 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400',
            'stock': 70,
            'category': 'Electronics'
        }
    ]
    
    for product_data in products:
        product = Product(**product_data)
        db.session.add(product)
    
    db.session.commit()
    print(f'Successfully seeded {len(products)} products!')