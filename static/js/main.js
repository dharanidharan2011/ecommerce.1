// E-Commerce Website JavaScript

// Sample product data
const products = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium wireless headphones with noise cancellation, 20-hour battery life, and crystal clear audio quality.',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        stock: 50,
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smart Watch Pro',
        description: 'Advanced smartwatch with fitness tracking, heart rate monitor, GPS, and 7-day battery life.',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        stock: 30,
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Laptop Stand Aluminum',
        description: 'Ergonomic aluminum laptop stand, adjustable height, improves posture and cooling.',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
        stock: 100,
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'USB-C Hub Multiport',
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400',
        stock: 75,
        category: 'Accessories'
    },
    {
        id: 5,
        name: 'Mechanical Keyboard RGB',
        description: 'Gaming mechanical keyboard with RGB lighting, Cherry MX switches, and programmable keys.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400',
        stock: 40,
        category: 'Electronics'
    },
    {
        id: 6,
        name: 'Wireless Mouse Ergonomic',
        description: 'Ergonomic wireless mouse with precision tracking, 6 programmable buttons, and rechargeable battery.',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
        stock: 120,
        category: 'Accessories'
    },
    {
        id: 7,
        name: '4K Webcam HD',
        description: 'Ultra HD 4K webcam with auto focus, built-in microphone, and low-light correction.',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
        stock: 60,
        category: 'Electronics'
    },
    {
        id: 8,
        name: 'Portable SSD 1TB',
        description: 'Ultra-fast portable SSD with 1TB storage, USB 3.2 Gen 2, and shock-resistant design.',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400',
        stock: 45,
        category: 'Storage'
    },
    {
        id: 9,
        name: 'Wireless Charger Pad',
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices, 15W output.',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400',
        stock: 200,
        category: 'Accessories'
    },
    {
        id: 10,
        name: 'Smart LED Desk Lamp',
        description: 'LED desk lamp with adjustable brightness, color temperature, and USB charging port.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
        stock: 80,
        category: 'Home'
    },
    {
        id: 11,
        name: 'Bluetooth Speaker Waterproof',
        description: 'Portable waterproof Bluetooth speaker with 12-hour battery and powerful bass.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
        stock: 65,
        category: 'Electronics'
    },
    {
        id: 12,
        name: 'Laptop Backpack Anti-Theft',
        description: 'Water-resistant anti-theft backpack with USB charging port and laptop compartment.',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        stock: 90,
        category: 'Accessories'
    },
    {
        id: 13,
        name: 'Phone Stand Universal',
        description: 'Adjustable aluminum phone stand, compatible with all smartphones and tablets.',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
        stock: 150,
        category: 'Accessories'
    },
    {
        id: 14,
        name: 'Gaming Mouse Pad XL',
        description: 'Extra large gaming mouse pad with non-slip rubber base and smooth surface.',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1563299796-b729c6d07b71?w=400',
        stock: 110,
        category: 'Accessories'
    },
    {
        id: 15,
        name: 'Webcam Ring Light',
        description: 'LED ring light with tripod mount, adjustable brightness and color temperature.',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400',
        stock: 70,
        category: 'Electronics'
    },
    {
        id: 16,
        name: 'USB Data Cable 3-Pack',
        description: 'Premium USB charging cables, 6ft length, compatible with most devices.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        stock: 250,
        category: 'Accessories'
    },
    {
        id: 17,
        name: 'Tablet Stand Foldable',
        description: 'Portable foldable tablet stand, adjustable angles, compact design.',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
        stock: 130,
        category: 'Accessories'
    },
    {
        id: 18,
        name: 'Power Bank 20000mAh',
        description: 'High-capacity power bank with fast charging, dual USB ports, and LED indicator.',
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400',
        stock: 85,
        category: 'Electronics'
    },
    {
        id: 19,
        name: 'Wireless Earbuds Pro',
        description: 'True wireless earbuds with active noise cancellation, touch controls, and 24-hour battery.',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
        stock: 95,
        category: 'Electronics'
    },
    {
        id: 20,
        name: 'Car Phone Mount',
        description: 'Universal car phone mount with 360-degree rotation and strong suction cup.',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        stock: 180,
        category: 'Accessories'
    },
    {
        id: 21,
        name: 'Smart Home Hub',
        description: 'Central smart home hub compatible with Alexa, Google Home, and smart devices.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400',
        stock: 35,
        category: 'Home'
    },
    {
        id: 22,
        name: 'LED Strip Lights RGB',
        description: 'RGB LED strip lights with remote control, 16 million colors, music sync mode.',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400',
        stock: 140,
        category: 'Home'
    },
    {
        id: 23,
        name: 'Digital Notepad Tablet',
        description: 'Electronic notepad with pressure sensitivity, rechargeable battery, and cloud sync.',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
        stock: 55,
        category: 'Electronics'
    },
    {
        id: 24,
        name: 'Wireless Gaming Controller',
        description: 'Universal gaming controller with vibration feedback, programmable buttons, and 40-hour battery.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400',
        stock: 70,
        category: 'Electronics'
    },
    {
        id: 25,
        name: 'Monitor Stand Dual',
        description: 'Dual monitor stand with adjustable height, tilt, and swivel for ergonomic workspace setup.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
        stock: 45,
        category: 'Accessories'
    }
];

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    // Check if we're on the home page
    if (document.getElementById('products-container')) {
        displayProducts(products);
    }
    
    // Check if we're on the cart page
    if (document.getElementById('cart-items')) {
        displayCart();
    }
    
    // Search functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    // Category filters
    const categoryLinks = document.querySelectorAll('.category-filter');
    categoryLinks.forEach(link => {
        link.addEventListener('click', handleCategoryFilter);
    });
});

// Display products
function displayProducts(productsToShow, containerId = 'products-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
            <div class="card-body d-flex flex-column">
                <span class="badge category-badge mb-2 align-self-start">${product.category}</span>
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted small">${product.description.substring(0, 100)}...</p>
                <div class="mt-auto">
                    <p class="product-price mb-2">$${product.price.toFixed(2)}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-outline-primary flex-grow-1" onclick="viewProduct(${product.id})">
                            <i class="bi bi-eye"></i> View
                        </button>
                        <button class="btn btn-primary flex-grow-1" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
                            <i class="bi bi-cart-plus"></i> 
                            ${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    displayCart();
    showNotification('Item removed from cart', 'info');
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }
    }
}

// Update cart badge
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (badge) {
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Display cart
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x display-4 text-muted"></i>
                <h4 class="mt-3">Your cart is empty</h4>
                <p class="text-muted">Add some products to get started!</p>
                <a href="index.html" class="btn btn-primary">
                    <i class="bi bi-shop"></i> Start Shopping
                </a>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const subtotal = product.price * item.quantity;
            total += subtotal;
            
            cartHTML += `
                <div class="row align-items-center mb-4 pb-4 border-bottom cart-item">
                    <div class="col-md-3">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-4">
                        <h5>${product.name}</h5>
                        <p class="text-muted small mb-0">${product.category}</p>
                        <p class="text-muted small">Stock: ${product.stock}</p>
                    </div>
                    <div class="col-md-2">
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control" value="${item.quantity}" 
                                   min="1" max="${product.stock}" 
                                   onchange="updateCartQuantity(${product.id}, this.value)">
                        </div>
                        <small class="text-muted">Available: ${product.stock}</small>
                    </div>
                    <div class="col-md-2 text-center">
                        <p class="mb-0 fw-bold">$${subtotal.toFixed(2)}</p>
                        <small class="text-muted">$${product.price.toFixed(2)} each</small>
                    </div>
                    <div class="col-md-1 text-end">
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${product.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    
    if (cartSummary) {
        const tax = total * 0.08;
        const finalTotal = total + tax;
        
        cartSummary.innerHTML = `
            <div class="d-flex justify-content-between mb-2">
                <span>Subtotal (${cart.length} items)</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-3">
                <span class="fw-bold">Total</span>
                <span class="fw-bold text-primary">$${finalTotal.toFixed(2)}</span>
            </div>
            <div class="d-grid">
                <button class="btn btn-primary btn-lg" onclick="proceedToCheckout()">
                    <i class="bi bi-credit-card"></i> Proceed to Checkout
                </button>
                <a href="index.html" class="btn btn-outline-secondary mt-2">
                    <i class="bi bi-arrow-left"></i> Continue Shopping
                </a>
            </div>
        `;
        cartSummary.style.display = 'block';
    }
}

// Search functionality
function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    
    // Redirect to search page with results
    localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
    localStorage.setItem('searchQuery', query);
    window.location.href = 'search.html';
}

// Category filter
function handleCategoryFilter(event) {
    event.preventDefault();
    const category = event.target.dataset.category;
    
    if (category === 'all') {
        localStorage.setItem('searchResults', JSON.stringify(products));
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
    }
    
    localStorage.setItem('searchQuery', category === 'all' ? '' : category);
    window.location.href = 'search.html';
}

// View product details
function viewProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    // For demo purposes, show a success message
    showNotification('Checkout functionality would be implemented with payment processing!', 'info');
    
    // In a real application, this would redirect to checkout page
    // window.location.href = 'checkout.html';
}

// Show notification
function showNotification(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 3000);
}

// Admin functionality (demo)
function toggleAdmin() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    localStorage.setItem('isAdmin', !isAdmin);
    updateAdminUI();
    showNotification(`Admin mode ${!isAdmin ? 'enabled' : 'disabled'}`, 'info');
}

function updateAdminUI() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const adminLinks = document.querySelectorAll('.admin-only');
    
    adminLinks.forEach(link => {
        link.style.display = isAdmin ? 'block' : 'none';
    });
}

// Initialize admin UI on page load
document.addEventListener('DOMContentLoaded', function() {
    updateAdminUI();
});

// Demo login functionality
function demoLogin() {
    showNotification('Demo login successful! You can now access all features.', 'success');
    localStorage.setItem('isLoggedIn', 'true');
    updateLoginUI();
}

function demoLogout() {
    showNotification('Logged out successfully!', 'info');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isAdmin', 'false');
    updateLoginUI();
    updateAdminUI();
}

function updateLoginUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLinks = document.querySelectorAll('.login-required');
    const logoutLinks = document.querySelectorAll('.logout-required');
    
    loginLinks.forEach(link => {
        link.style.display = isLoggedIn ? 'none' : 'block';
    });
    
    logoutLinks.forEach(link => {
        link.style.display = isLoggedIn ? 'block' : 'none';
    });
}

// Load search results on search page
if (window.location.pathname.includes('search.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const searchResults = JSON.parse(localStorage.getItem('searchResults') || '[]');
        const searchQuery = localStorage.getItem('searchQuery') || '';
        
        const resultsContainer = document.getElementById('search-results');
        const queryDisplay = document.getElementById('search-query');
        const resultsCount = document.getElementById('results-count');
        
        if (queryDisplay) queryDisplay.textContent = searchQuery;
        if (resultsCount) resultsCount.textContent = searchResults.length;
        
        if (resultsContainer) {
            displayProducts(searchResults, 'search-results');
        }
    });
}

// Load product details on product page
if (window.location.pathname.includes('product.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const productId = parseInt(localStorage.getItem('selectedProduct'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
            displayProductDetails(product);
        } else {
            // Redirect to home if no product found
            window.location.href = 'index.html';
        }
    });
}

function displayProductDetails(product) {
    const container = document.getElementById('product-details');
    if (!container) return;
    
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    
    container.innerHTML = `
        <div class="row">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#" onclick="filterByCategory('${product.category}')">${product.category}</a></li>
                        <li class="breadcrumb-item active">${product.name}</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 400px; object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-6">
                <span class="badge category-badge mb-2">${product.category}</span>
                <h1 class="mb-3">${product.name}</h1>
                <p class="product-price mb-4">$${product.price.toFixed(2)}</p>
                
                <div class="mb-4">
                    <h5>Description</h5>
                    <p class="text-muted">${product.description}</p>
                </div>
                
                <div class="mb-4">
                    <div class="row">
                        <div class="col-6">
                            <p><strong>Availability:</strong> 
                                ${product.stock > 0 ? 
                                    `<span class="text-success">In Stock (${product.stock} available)</span>` :
                                    `<span class="text-danger">Out of Stock</span>`
                                }
                            </p>
                        </div>
                        <div class="col-6">
                            <p><strong>Category:</strong> ${product.category}</p>
                        </div>
                    </div>
                </div>
                
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" value="1" min="1" max="${product.stock}" 
                           ${product.stock <= 0 ? 'disabled' : ''}>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary btn-lg" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                    <a href="index.html" class="btn btn-outline-secondary">
                        <i class="bi bi-arrow-left"></i> Continue Shopping
                    </a>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12">
                <h3>Related Products</h3>
                <hr>
            </div>
        </div>

        <div class="row" id="related-products">
        </div>
    `;
    
    // Display related products
    displayProducts(relatedProducts, 'related-products');
}

function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
    localStorage.setItem('searchQuery', category);
    window.location.href = 'search.html';
}