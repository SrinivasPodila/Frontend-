// Default products (used if products.json is unavailable)
let productsData = [
    {
        "Product Name": "Best Truewireless Headphones",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=90",
        "Product Price (INR)": "500",
        "Product Category": "Electronics",
        "Product Offer/Discount": "Grab Now"
    },
    {
        "Product Name": "Monitors",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/b/x/x/-original-imah7rn68zxjzbqx.jpeg?q=90",
        "Product Price (INR)": "9999",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹9999"
    },
    {
        "Product Name": "Printers",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kwl0akw0/printer/x/q/3/-original-imag989ygsdy6v6x.jpeg?q=90",
        "Product Price (INR)": "10999",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹10999"
    },
    {
        "Product Name": "Monitor",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/w/i/f/-original-imahagy2cefszqgy.jpeg?q=90",
        "Product Price (INR)": "8279",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹8279"
    },
    {
        "Product Name": "Best Selling Mobile Speakers",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=90",
        "Product Price (INR)": "499",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹499*"
    },
    {
        "Product Name": "Fastrack Smartwatches",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=90",
        "Product Price (INR)": "1399",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹1,399"
    },
    {
        "Product Name": "Printers",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/xif0q/printer/5/n/5/deskjet-2723-hp-original-imah4sqjpqwyqzzs.jpeg?q=90",
        "Product Price (INR)": "3999",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹3999"
    },
    {
        "Product Name": "Projector",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=90",
        "Product Price (INR)": "6990",
        "Product Category": "Electronics",
        "Product Offer/Discount": "From ₹6990"
    },
    {
        "Product Name": "Geared Cycles",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        "Product Price (INR)": "600",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Up to 70% Off"
    },
    {
        "Product Name": "Coffee Powder",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        "Product Price (INR)": "3456",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Upto 80% Off"
    },
    {
        "Product Name": "Top Selling Stationery",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        "Product Price (INR)": "49",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "From ₹49"
    },
    {
        "Product Name": "Best of Action Toys",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        "Product Price (INR)": "234",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Up to 70% Off"
    },
    {
        "Product Name": "Remote Control Toys",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=90",
        "Product Price (INR)": "890",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Up to 80% Off"
    },
    {
        "Product Name": "Soft Toys",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        "Product Price (INR)": "865",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Upto 70% Off"
    },
    {
        "Product Name": "Dry Fruits",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=90",
        "Product Price (INR)": "987",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Upto 75% Off"
    },
    {
        "Product Name": "Food Spreads",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=90",
        "Product Price (INR)": "6789",
        "Product Category": "Beauty, Food, Toys & more",
        "Product Offer/Discount": "Upto 75% Off"
    },
    {
        "Product Name": "Puzzles & Cubes",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=90",
        "Product Price (INR)": "79",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "From ₹ 79"
    },
    {
        "Product Name": "Musical Toys",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=90",
        "Product Price (INR)": "199",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "Under 199"
    },
    {
        "Product Name": "Breakfast Cereal",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=90",
        "Product Price (INR)": "9000",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "Upto 75% Off"
    },
    {
        "Product Name": "Tea Powder",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=90",
        "Product Price (INR)": "3456",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "Upto 75% Off"
    },
    {
        "Product Name": "Learning & Educational Games",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=90",
        "Product Price (INR)": "4568",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "Up to 80% Off"
    },
    {
        "Product Name": "Honey",
        "Product Image": "https://rukminim2.flixcart.com/image/120/120/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=90",
        "Product Price (INR)": "5000",
        "Product Category": "Sports, Healthcare & more",
        "Product Offer/Discount": "Upto 75% Off"
    }
];

// Cart functionality
let cart = [];
let cartCount = 0;

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartCountElement = document.querySelector('.cart-count');
const cartLink = document.querySelector('.cart-btn');
const searchInput = document.querySelector('.search-bar input');
const categoryCards = document.querySelectorAll('.category-card');

function isFashionPage() {
    return /fashion\.html$/i.test(window.location.pathname);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    if (productGrid) {
        if (isFashionPage()) {
            // On fashion page, load fashion dataset directly (prefer pasted JSON if any)
            loadFashionData();
        } else {
            // Try to load from products.json first; fall back to inline data
            fetch('products.json')
                .then(r => (r.ok ? r.json() : Promise.reject()))
                .then(data => {
                    if (Array.isArray(data) && data.length > 0) {
                        productsData = data;
                    }
                })
                .catch(() => {})
                .finally(() => {
                    displayProducts(productsData);
                });
        }
    }
    setupEventListeners();
    // Add More items button on fashion page
    const addMoreBtn = document.getElementById('addMoreFashionBtn');
    if (addMoreBtn) {
        addMoreBtn.addEventListener('click', function(){
            promptLocalFashionJson(true); // append mode
        });
    }

    // Brand click interaction: toggle active for color shift and glyph morph
    const brand = document.getElementById('brandLink');
    if (brand) {
        brand.addEventListener('click', function(e){
            e.preventDefault();
            this.classList.add('active');
            // Briefly show annotation when A animates
            const annotation = document.getElementById('brandAnnotation');
            if (annotation) {
                annotation.style.opacity = '1';
                annotation.style.transform = 'translateY(-2px) scale(1)';
                setTimeout(() => {
                    annotation.style.opacity = '';
                    annotation.style.transform = '';
                }, 1200);
            }
            setTimeout(() => this.classList.remove('active'), 1000);
        });
    }

    // Login dropdown accessibility: toggle aria-expanded
    const loginMenu = document.querySelector('.login-menu');
    const loginButton = document.getElementById('loginMenuButton');
    if (loginMenu && loginButton) {
        const open = () => loginButton.setAttribute('aria-expanded', 'true');
        const close = () => loginButton.setAttribute('aria-expanded', 'false');
        loginMenu.addEventListener('mouseenter', open);
        loginMenu.addEventListener('mouseleave', close);
        loginMenu.addEventListener('focusin', open);
        loginMenu.addEventListener('focusout', function(e){
            // Close only when focus leaves the whole menu
            if (!loginMenu.contains(e.relatedTarget)) close();
        });

        // Click toggle for touch devices
        loginButton.addEventListener('click', function(e){
            e.preventDefault();
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            loginMenu.classList.toggle('open', !expanded);
        });

        // Close when clicking outside
        document.addEventListener('click', function(e){
            if (!loginMenu.contains(e.target)) {
                loginMenu.classList.remove('open');
                close();
            }
        });
    }

    // Sign Up modal wiring
    const signupLink = document.querySelector('.signup-link');
    const signupModal = document.getElementById('signupModal');
    const signupCloseBtn = document.getElementById('signupCloseBtn');
    const signupForm = document.getElementById('signupForm');
    const firstInput = document.getElementById('suName');

    function openSignup() {
        if (!signupModal) return;
        signupModal.classList.add('open');
        signupModal.setAttribute('aria-hidden', 'false');
        setTimeout(() => firstInput && firstInput.focus(), 0);
    }
    function closeSignup() {
        if (!signupModal) return;
        signupModal.classList.remove('open');
        signupModal.setAttribute('aria-hidden', 'true');
    }

    if (signupLink && signupModal) {
        signupLink.addEventListener('click', function(e){ e.preventDefault(); openSignup(); });
        signupCloseBtn && signupCloseBtn.addEventListener('click', closeSignup);
        signupModal.addEventListener('click', function(e){ if (e.target === signupModal) closeSignup(); });
        document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeSignup(); });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e){
            e.preventDefault();
            const formData = new FormData(signupForm);
            const payload = {
                name: formData.get('name')?.toString().trim(),
                email: formData.get('email')?.toString().trim(),
                phone: formData.get('phone')?.toString().trim(),
                password: formData.get('password')?.toString()
            };
            if (!payload.name || !payload.email || !payload.phone || !payload.password) {
                showNotification('Please fill all required fields');
                return;
            }
            closeSignup();
            showNotification('Account created successfully!');
            signupForm.reset();
        });
    }

    // Login modal wiring (My Profile -> Login OTP)
    const myProfileLink = document.querySelector('.my-profile-link');
    const loginModal = document.getElementById('loginModal');
    const loginCloseBtn = document.getElementById('loginCloseBtn');
    const loginForm = document.getElementById('loginForm');
    const identifierInput = document.getElementById('leIdentifier');
    const openSignupFromLogin = document.getElementById('openSignupFromLogin');

    function openLogin() {
        if (!loginModal) return;
        loginModal.classList.add('open');
        loginModal.setAttribute('aria-hidden', 'false');
        setTimeout(() => identifierInput && identifierInput.focus(), 0);
    }
    function closeLogin() {
        if (!loginModal) return;
        loginModal.classList.remove('open');
        loginModal.setAttribute('aria-hidden', 'true');
    }

    if (myProfileLink && loginModal) {
        myProfileLink.addEventListener('click', function(e){ e.preventDefault(); openLogin(); });
        loginCloseBtn && loginCloseBtn.addEventListener('click', closeLogin);
        loginModal.addEventListener('click', function(e){ if (e.target === loginModal) closeLogin(); });
        document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeLogin(); });
    }

    if (openSignupFromLogin) {
        openSignupFromLogin.addEventListener('click', function(e){
            e.preventDefault();
            closeLogin();
            openSignup();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e){
            e.preventDefault();
            const value = identifierInput?.value.trim();
            if (!value) {
                showNotification('Please enter your email or mobile number');
                return;
            }
            // Mock OTP request
            closeLogin();
            showNotification('OTP sent successfully');
        });
    }
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    // Intercept search submit: if pasted JSON present, render Fashion with it instead of reloading
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e){
            const raw = searchInput?.value?.trim();
            if (raw && looksLikeJsonArray(raw)) {
                e.preventDefault();
                // If navigating to fashion page via navbar, also persist
                tryStorePastedJson(raw);
                loadFashionData();
            }
        });
    }
    
    // Category filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => filterByCategory(card.dataset.category, e));
    });

    // Fashion nav/button handlers to load external dataset (only on index page)
    const fashionNav = document.querySelector('a[href="#fashion"]');
    const fashionCard = document.querySelector('.category-card[data-category="fashion"]');
    [fashionNav, fashionCard].forEach(el => {
        if (el && !isFashionPage()) el.addEventListener('click', (e) => {
            e.preventDefault?.();
            loadFashionData();
        });
    });

    // When clicking top nav "Fashion" (link to fashion.html), persist pasted JSON so fashion page can render it
    const fashionTopNavLink = document.querySelector('nav .nav-menu a[href="fashion.html"]');
    if (fashionTopNavLink) {
        fashionTopNavLink.addEventListener('click', function(){
            const raw = searchInput?.value?.trim();
            if (raw && looksLikeJsonArray(raw)) {
                tryStorePastedJson(raw);
            }
        });
    }

    // Search dropdown disabled: keep the quick options hidden
    const searchDropdown = document.getElementById('searchDropdown');
    const searchInputEl = document.getElementById('site-search');
    if (searchDropdown && searchInputEl) {
        const searchForm = document.querySelector('.search-bar');
        // Ensure closed on load
        searchForm && searchForm.classList.remove('open');
        // Prevent opening on focus/click
        searchInputEl.addEventListener('focus', () => searchForm && searchForm.classList.remove('open'));
        searchInputEl.addEventListener('click', (e) => {
            if (searchForm) searchForm.classList.remove('open');
        });
        // Also ensure the search button doesn't toggle suggestions
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                // allow form submit; do not toggle dropdown
                searchForm && searchForm.classList.remove('open');
            });
        }
        // Defensive: clicking anywhere will keep it closed
        document.addEventListener('click', function(e){
            const form = document.querySelector('.search-bar');
            if (form) form.classList.remove('open');
        });
    }
}

// Display products
function displayProducts(products) {
    if (!productGrid) return;
    productGrid.setAttribute('aria-busy', 'true');
    if (products.length === 0) {
        productGrid.innerHTML = '<div class="loading">No products found</div>';
        productGrid.setAttribute('aria-busy', 'false');
        return;
    }

    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    productGrid.setAttribute('aria-busy', 'false');
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach((button, index) => {
        button.addEventListener('click', () => addToCart(products[index]));
    });
}

// Load fashion dataset from local JSON file
async function loadFashionData() {
    try {
        // 0) Prefer pasted JSON from search bar or from persisted storage
        const pasted = getPastedFashionData();
        if (Array.isArray(pasted) && pasted.length > 0) {
            renderExternalProducts('Fashion', pasted);
            return;
        }

        const response = await fetch(`./fashion.json?ts=${Date.now()}`);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            renderExternalProducts('Fashion', data);
            return;
        }
        throw new Error('Empty dataset');
    } catch (err) {
        // Fallback 1: embedded JSON on the page (works on file://)
        try {
            const embedded = document.getElementById('fashionData');
            if (embedded && embedded.textContent) {
                const parsed = JSON.parse(embedded.textContent);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    renderExternalProducts('Fashion', parsed);
                    return;
                }
            }
        } catch (_) {}
        // Fallback 2: prompt user to pick a local JSON file
        promptLocalFashionJson();
    }
}

function renderExternalProducts(titleLabel, dataArray) {
    const title = document.getElementById('products-title');
    if (title) title.textContent = titleLabel;
    productsData = dataArray.map(item => ({
        'Product Name': item['Product Name'],
        'Product Image': item['Product Image'],
        'Product Price (INR)': item['Selling Price (INR)'] || item['Product Price (INR)'] || item['Price (INR)'] || '',
        'Original Price (INR)': item['Original Price (INR)'] || item['Original Price'] || '',
        'Product URL': item['Product URL'] || '',
        'Rating (Max 5)': item['Customer Rating (Max 5)'] || item['Rating (Max 5)'] || ''
    }));
    displayProducts(productsData);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function promptLocalFashionJson() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.style.display = 'none';
    input.addEventListener('change', () => {
        const file = input.files && input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const parsed = JSON.parse(String(reader.result));
                if (Array.isArray(parsed) && parsed.length > 0) {
                    renderExternalProducts('Fashion', parsed);
                } else {
                    showNotification('Invalid JSON: expected an array of products');
                }
            } catch (e) {
                showNotification('Invalid JSON file');
            }
        };
        reader.readAsText(file);
    });
    document.body.appendChild(input);
    input.click();
    // Clean up after opening dialog
    setTimeout(() => input.parentNode && input.parentNode.removeChild(input), 0);
}

// Create product card HTML
function createProductCard(product) {
    const resolvedPrice = product['Price (INR)'] || product['Product Price (INR)'] || product['Selling Price (INR)'] || '';
    const resolvedOriginal = product['Original Price (INR)'] || product['MRP (INR)'] || product['Original Price'] || '';
    const quantity = product['Quantity'] || '';
    const ratingValue = product['Rating (Max 5)'] || product['Customer Rating (Max 5)'] || '';
    const reviews = product['Number of Reviews'] ? `(${product['Number of Reviews']})` : '';
    const productUrl = product['Product URL'] || '';
    
    const safeId = (product['Product Name'] || 'item').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `
        <article class="product-card" role="listitem" aria-labelledby="${safeId}-title" aria-describedby="${safeId}-price ${safeId}-qty ${safeId}-rating">
            <a ${productUrl ? `href="${productUrl}" target="_blank" rel="noopener"` : ''} aria-label="Open ${product['Product Name']} details">
                <img src="${product['Product Image']}" alt="${product['Product Name']}" class="product-image" 
                     onerror="this.src='https://via.placeholder.com/320x200?text=Image'" loading="lazy">
            </a>
            <div class="product-info">
                <h3 class="product-name" id="${safeId}-title">${product['Product Name']}</h3>
                <div class="product-price-row" id="${safeId}-price">
                    ${resolvedPrice ? `<span class="product-price" aria-label="Price">₹${resolvedPrice}</span>` : ''}
                    ${resolvedOriginal ? `<span class="product-original-price" aria-label="Original price">₹${resolvedOriginal}</span>` : ''}
                </div>
                ${quantity ? `<div class="product-quantity" id="${safeId}-qty" aria-label="Quantity">${quantity}</div>` : ''}
                ${ratingValue ? `<div class="product-rating" id="${safeId}-rating" aria-label="Rating"><i class=\"fas fa-star\"></i><span>${ratingValue}</span> ${reviews}</div>` : ''}
                <button class="add-to-cart" aria-label="Add ${product['Product Name']} to cart">Add to Cart</button>
            </div>
        </article>
    `;
}

// Search functionality
function handleSearch() {
    if (!productGrid) return;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(productsData);
        return;
    }
    
    const filteredProducts = productsData.filter(product => 
        (product['Product Name'] || '').toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Filter by category
function filterByCategory(category, e) {
    let filteredProducts;
    
    switch(category) {
        case 'electronics':
            filteredProducts = productsData.filter(product => 
                product['Product Category'] === 'Electronics'
            );
            break;
        case 'beauty':
            filteredProducts = productsData.filter(product => 
                product['Product Category'] === 'Beauty, Food, Toys & more'
            );
            break;
        case 'sports':
            filteredProducts = productsData.filter(product => 
                product['Product Category'] === 'Sports, Healthcare & more'
            );
            break;
        default:
            filteredProducts = productsData;
    }
    
    displayProducts(filteredProducts);
    
    // Update active category
    categoryCards.forEach(card => card.classList.remove('active'));
    if (e && e.currentTarget) {
        e.currentTarget.classList.add('active');
    }
}

// Add to cart functionality
function addToCart(product) {
    const existingItem = cart.find(item => item.name === product['Product Name']);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: product['Product Name'],
            price: product['Product Price (INR)'],
            image: product['Product Image'],
            quantity: 1
        });
    }
    
    cartCount += 1;
    updateCartCount();
    
    // Show success message
    showNotification(`${product['Product Name']} added to cart!`);
}

// Update cart count display
function updateCartCount() {
    cartCountElement.textContent = cartCount;
    if (cartLink) {
        const itemsLabel = cartCount === 1 ? '1 item' : `${cartCount} items`;
        cartLink.setAttribute('aria-label', `Cart, ${itemsLabel}`);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/200x200?text=Product+Image';
        });
    });
});

// Add hover effects for category cards
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Removed header blur effect on scroll to avoid blurriness

// ===== Utility: pasted JSON from search bar or storage =====
function looksLikeJsonArray(text) {
    if (typeof text !== 'string') return false;
    const trimmed = text.trim();
    return trimmed.startsWith('[') && trimmed.endsWith(']');
}

function tryStorePastedJson(rawText) {
    try {
        const parsed = JSON.parse(rawText);
        if (Array.isArray(parsed) && parsed.length > 0) {
            localStorage.setItem('fashionPastedJson', rawText);
        }
    } catch (_) {}
}

function getPastedFashionData() {
    // 1) From search input (current page)
    const raw = searchInput?.value?.trim();
    if (raw && looksLikeJsonArray(raw)) {
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (_) {}
    }
    // 2) From localStorage (cross-page navigation)
    try {
        const stored = localStorage.getItem('fashionPastedJson');
        if (stored && looksLikeJsonArray(stored)) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                // One-time use
                localStorage.removeItem('fashionPastedJson');
                return parsed;
            }
        }
    } catch (_) {}
    return null;
}