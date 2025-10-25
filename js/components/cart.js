/* Shopping Cart Modal Component - Version 2.0 */

(function() {
    'use strict';

    let cartModal = null;
    let cartOverlay = null;
    let cartItems = [];

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        createCartModal();
        loadCart();
        setupEventListeners();
    }

    /**
     * Create cart modal HTML
     */
    function createCartModal() {
        // Create overlay
        cartOverlay = document.createElement('div');
        cartOverlay.className = 'cart-modal__overlay';
        cartOverlay.addEventListener('click', closeCart);
        document.body.appendChild(cartOverlay);

        // Create modal
        cartModal = document.createElement('div');
        cartModal.className = 'cart-modal';
        cartModal.innerHTML = `
            <div class="cart-modal__header">
                <h2 class="cart-modal__title">Shopping Cart</h2>
                <button class="cart-modal__close" aria-label="Close cart">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <use href="./assets/icons/sprite.svg#close"></use>
                    </svg>
                </button>
            </div>
            <div class="cart-modal__body">
                <div class="cart-modal__items" data-cart-items></div>
                <div class="cart-modal__empty" data-cart-empty hidden>
                    <svg class="cart-modal__empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <h3>Your cart is empty</h3>
                    <p>Add some items to get started!</p>
                </div>
            </div>
            <div class="cart-modal__footer" data-cart-footer hidden>
                <div class="cart-modal__total">
                    <span>Total:</span>
                    <span data-cart-total>$0.00</span>
                </div>
                <button class="btn btn--primary btn--large cart-modal__checkout">
                    Checkout (Demo)
                </button>
            </div>
        `;
        document.body.appendChild(cartModal);

        // Setup close button
        const closeButton = cartModal.querySelector('.cart-modal__close');
        closeButton.addEventListener('click', closeCart);

        // Setup checkout button
        const checkoutButton = cartModal.querySelector('.cart-modal__checkout');
        checkoutButton.addEventListener('click', handleCheckout);

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && utils.hasClass(cartModal, 'active')) {
                closeCart();
            }
        });
    }

    /**
     * Load cart from API/localStorage
     */
    function loadCart() {
        cartItems = API.getCart();
        renderCart();
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        // Listen for cart updates
        window.addEventListener('cartUpdated', () => {
            loadCart();
        });
    }

    /**
     * Open cart modal
     */
    function openCart() {
        utils.addClass(cartModal, 'active');
        utils.addClass(cartOverlay, 'active');
        document.body.style.overflow = 'hidden';
        utils.announce('Shopping cart opened');
    }

    /**
     * Close cart modal
     */
    function closeCart() {
        utils.removeClass(cartModal, 'active');
        utils.removeClass(cartOverlay, 'active');
        document.body.style.overflow = '';
        utils.announce('Shopping cart closed');
    }

    /**
     * Render cart items
     */
    function renderCart() {
        const itemsContainer = cartModal.querySelector('[data-cart-items]');
        const emptyState = cartModal.querySelector('[data-cart-empty]');
        const footer = cartModal.querySelector('[data-cart-footer]');
        const totalElement = cartModal.querySelector('[data-cart-total]');

        if (cartItems.length === 0) {
            // Show empty state
            utils.hide(footer);
            utils.show(emptyState);
            itemsContainer.innerHTML = '';
            return;
        }

        // Hide empty state
        utils.hide(emptyState);
        utils.show(footer);

        // Render items
        itemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item" data-item-id="${item.id}">
                <img src="${item.image}" alt="${utils.sanitizeHTML(item.title)}" class="cart-item__image">
                <div class="cart-item__info">
                    <div class="cart-item__title">${utils.sanitizeHTML(item.title)}</div>
                    <div class="cart-item__price">${utils.formatPrice(item.price)}</div>
                    <div class="cart-item__quantity">
                        <button class="cart-item__qty-btn" data-decrease="${item.id}" aria-label="Decrease quantity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="cart-item__qty-value">${item.quantity}</span>
                        <button class="cart-item__qty-btn" data-increase="${item.id}" aria-label="Increase quantity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Calculate total
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalElement.textContent = utils.formatPrice(total);

        // Setup quantity buttons
        setupQuantityButtons();
    }

    /**
     * Setup quantity change buttons
     */
    function setupQuantityButtons() {
        const increaseButtons = cartModal.querySelectorAll('[data-increase]');
        const decreaseButtons = cartModal.querySelectorAll('[data-decrease]');

        increaseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.increase);
                updateQuantity(productId, 1);
            });
        });

        decreaseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.decrease);
                updateQuantity(productId, -1);
            });
        });
    }

    /**
     * Update item quantity
     */
    function updateQuantity(productId, change) {
        const item = cartItems.find(i => i.id === productId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            // Remove item
            cartItems = cartItems.filter(i => i.id !== productId);
            Toast.info('Item removed from cart');
        }

        // Save cart
        utils.storage.set(CONFIG.storage.cart, cartItems);

        // Update display
        renderCart();

        // Dispatch event
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }

    /**
     * Handle checkout
     */
    function handleCheckout() {
        if (cartItems.length === 0) return;

        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        Toast.info('This is a demo - no actual checkout available');

        setTimeout(() => {
            Toast.warning(`Demo checkout: ${cartItems.length} items, Total: ${utils.formatPrice(total)}`);
        }, 500);
    }

    /**
     * Add item to cart
     */
    function addToCart(product) {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                ...product,
                quantity: 1
            });
        }

        // Save cart
        utils.storage.set(CONFIG.storage.cart, cartItems);

        // Update display
        renderCart();

        // Show success message
        Toast.success('Added to cart!');

        // Dispatch event
        window.dispatchEvent(new CustomEvent('cartUpdated'));

        return {
            success: true,
            cart: cartItems,
            cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    }

    /**
     * Clear cart
     */
    function clearCart() {
        cartItems = [];
        utils.storage.set(CONFIG.storage.cart, cartItems);
        renderCart();
        window.dispatchEvent(new CustomEvent('cartUpdated'));
        Toast.info('Cart cleared');
    }

    // Make Cart API globally available
    window.Cart = {
        open: openCart,
        close: closeCart,
        add: addToCart,
        clear: clearCart,
        getItems: () => cartItems,
        getCount: () => cartItems.reduce((sum, item) => sum + item.quantity, 0)
    };

})();
