/* Shopping Cart Modal Component - Version 2.0 */

(function() {
    'use strict';

    let cartModal = null;
    let cartOverlay = null;
    let cartItems = [];

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        createCartModal();
        loadCart();
        setupEventListeners();
        setupEventDelegation();
    }

    function createCartModal() {
        cartOverlay = document.createElement('div');
        cartOverlay.className = 'cart-modal__overlay';
        cartOverlay.addEventListener('click', closeCart);
        document.body.appendChild(cartOverlay);

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

        cartModal.querySelector('.cart-modal__close').addEventListener('click', closeCart);
        cartModal.querySelector('.cart-modal__checkout').addEventListener('click', handleCheckout);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && utils.hasClass(cartModal, 'active')) {
                closeCart();
            }
        });
    }

    function loadCart() {
        try {
            cartItems = API.getCart();
            renderCart();
        } catch (error) {
            console.error('Error loading cart:', error);
            cartItems = [];
            renderCart();
        }
    }

    function setupEventListeners() {
        window.addEventListener('cartUpdated', () => loadCart());
    }

    function openCart() {
        utils.addClass(cartModal, 'active');
        utils.addClass(cartOverlay, 'active');
        document.body.style.overflow = 'hidden';
        utils.announce('Shopping cart opened');
    }

    function closeCart() {
        utils.removeClass(cartModal, 'active');
        utils.removeClass(cartOverlay, 'active');
        document.body.style.overflow = '';
        utils.announce('Shopping cart closed');
    }

    function renderCart() {
        const itemsContainer = cartModal.querySelector('[data-cart-items]');
        const emptyState = cartModal.querySelector('[data-cart-empty]');
        const footer = cartModal.querySelector('[data-cart-footer]');
        const totalElement = cartModal.querySelector('[data-cart-total]');

        if (cartItems.length === 0) {
            utils.hide(footer);
            utils.show(emptyState);
            itemsContainer.innerHTML = '';
            return;
        }

        utils.hide(emptyState);
        utils.show(footer);

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

        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalElement.textContent = utils.formatPrice(total);
    }

    /**
     * Setup event delegation for quantity buttons to avoid memory leaks
     * Instead of adding listeners to each button on every render,
     * we use a single listener on the parent container
     */
    function setupEventDelegation() {
        const itemsContainer = cartModal.querySelector('[data-cart-items]');
        if (!itemsContainer) return;

        itemsContainer.addEventListener('click', (e) => {
            const increaseBtn = e.target.closest('[data-increase]');
            const decreaseBtn = e.target.closest('[data-decrease]');

            if (increaseBtn) {
                const productId = parseInt(increaseBtn.dataset.increase);
                updateQuantity(productId, 1);
            } else if (decreaseBtn) {
                const productId = parseInt(decreaseBtn.dataset.decrease);
                updateQuantity(productId, -1);
            }
        });
    }

    function updateQuantity(productId, change) {
        const item = cartItems.find(i => i.id === productId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            cartItems = cartItems.filter(i => i.id !== productId);
            if (window.Toast) Toast.info('Item removed from cart');
        }

        try {
            utils.storage.set(CONFIG.storage.cart, cartItems);
        } catch (error) {
            console.error('Error saving cart:', error);
            if (window.Toast) Toast.error('Could not save cart. Storage may be disabled.');
        }
        renderCart();
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }

    function handleCheckout() {
        if (cartItems.length === 0) return;
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (window.Toast) {
            Toast.info('This is a demo - no actual checkout available');
            setTimeout(() => {
                Toast.warning(`Demo checkout: ${cartItems.length} items, Total: ${utils.formatPrice(total)}`);
            }, 500);
        }
    }

    function addToCart(product) {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }

        try {
            utils.storage.set(CONFIG.storage.cart, cartItems);
        } catch (error) {
            console.error('Error saving cart:', error);
            if (window.Toast) Toast.error('Could not save cart. Storage may be disabled.');
        }
        renderCart();

        if (window.Toast) Toast.success('Added to cart!');
        window.dispatchEvent(new CustomEvent('cartUpdated'));

        return {
            success: true,
            cart: cartItems,
            cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    }

    function clearCart() {
        cartItems = [];
        try {
            utils.storage.set(CONFIG.storage.cart, cartItems);
        } catch (error) {
            console.error('Error clearing cart:', error);
            if (window.Toast) Toast.error('Could not clear cart. Storage may be disabled.');
        }
        renderCart();
        window.dispatchEvent(new CustomEvent('cartUpdated'));
        if (window.Toast) Toast.info('Cart cleared');
    }

    window.Cart = {
        open: openCart,
        close: closeCart,
        add: addToCart,
        clear: clearCart,
        getItems: () => cartItems,
        getCount: () => cartItems.reduce((sum, item) => sum + item.quantity, 0)
    };

})();
