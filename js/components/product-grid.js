/* Product Grid Component - Display and Filter Products */

(function() {
    'use strict';

    let allProducts = [];
    let displayedProducts = [];
    let currentFilter = 'all';
    let displayCount = CONFIG.products.initialLoadCount;

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    async function init() {
        const productGrid = utils.qs('[data-product-grid]');
        if (!productGrid) return;

        try {
            // Load all products
            allProducts = await API.getProducts();

            if (allProducts.length === 0) {
                productGrid.innerHTML = '<p class="text-center">No products available.</p>';
                return;
            }

            // Setup filter buttons
            setupFilters();

            // Initial render
            filterProducts('all');

            // Setup load more button
            setupLoadMore();

        } catch (error) {
            console.error('Error loading products:', error);
            productGrid.innerHTML = '<p class="text-center">Error loading products.</p>';
        }
    }

    /**
     * Setup filter buttons
     */
    function setupFilters() {
        const filterButtons = utils.qsAll('.filter-button');

        filterButtons.forEach(button => {
            utils.on(button, 'click', () => {
                const filter = utils.getData(button, 'filter');

                // Update active state
                filterButtons.forEach(btn => utils.removeClass(btn, 'filter-button--active'));
                utils.addClass(button, 'filter-button--active');

                // Filter and display products
                filterProducts(filter);

                utils.announce(`Showing ${filter === 'all' ? 'all' : filter} products`);
            });
        });
    }

    /**
     * Filter products by category
     */
    function filterProducts(category) {
        currentFilter = category;
        displayCount = CONFIG.products.initialLoadCount;

        if (category === 'all') {
            displayedProducts = [...allProducts];
        } else {
            displayedProducts = allProducts.filter(product => product.category === category);
        }

        renderProducts();
        updateLoadMoreButton();
    }

    /**
     * Render products to grid
     */
    function renderProducts() {
        const productGrid = utils.qs('[data-product-grid]');
        if (!productGrid) return;

        const productsToShow = displayedProducts.slice(0, displayCount);

        if (productsToShow.length === 0) {
            productGrid.innerHTML = '<p class="text-center">No products found in this category.</p>';
            return;
        }

        productGrid.innerHTML = productsToShow.map(product => `
            <div class="product-card">
                <div class="product-card__image-wrapper">
                    <img src="${product.image}"
                         alt="${utils.sanitizeHTML(product.title)}"
                         class="product-card__image"
                         loading="lazy">
                    ${product.featured ? '<span class="product-card__badge">Featured</span>' : ''}
                </div>
                <div class="product-card__content">
                    <span class="product-card__category">${utils.sanitizeHTML(product.category)}</span>
                    <h3 class="product-card__title">${utils.sanitizeHTML(product.title)}</h3>
                    <p class="product-card__description">${utils.sanitizeHTML(product.description)}</p>
                    <div class="product-card__footer">
                        <span class="product-card__price">${utils.formatPrice(product.price)}</span>
                        <button class="product-card__add-btn"
                                data-add-to-cart="${product.id}"
                                aria-label="Add ${utils.sanitizeHTML(product.title)} to cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Setup add to cart buttons
        setupAddToCart();
    }

    /**
     * Setup add to cart button handlers
     */
    function setupAddToCart() {
        const addButtons = utils.qsAll('[data-add-to-cart]');

        addButtons.forEach(button => {
            utils.on(button, 'click', async () => {
                const productId = parseInt(utils.getData(button, 'addToCart'));

                // Disable button during request
                button.disabled = true;
                const originalText = button.textContent;
                button.textContent = 'Adding...';

                try {
                    const result = await API.addToCart(productId);

                    if (result.success) {
                        // Show success feedback
                        button.textContent = 'Added!';
                        utils.addClass(button, 'btn--success');

                        // Dispatch cart updated event
                        window.dispatchEvent(new CustomEvent('cartUpdated'));

                        // Show notification
                        utils.announce('Item added to cart');

                        // Reset button after delay
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.disabled = false;
                            utils.removeClass(button, 'btn--success');
                        }, 2000);

                    } else {
                        button.textContent = 'Error';
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.disabled = false;
                        }, 2000);
                    }

                } catch (error) {
                    console.error('Error adding to cart:', error);
                    button.textContent = 'Error';
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                    }, 2000);
                }
            });
        });
    }

    /**
     * Setup load more button
     */
    function setupLoadMore() {
        const loadMoreButton = utils.qs('[data-load-more]');
        if (!loadMoreButton) return;

        utils.on(loadMoreButton, 'click', () => {
            displayCount += CONFIG.products.loadMoreCount;
            renderProducts();
            updateLoadMoreButton();

            utils.announce(`Loaded more products. Now showing ${Math.min(displayCount, displayedProducts.length)} of ${displayedProducts.length}`);
        });
    }

    /**
     * Update load more button visibility
     */
    function updateLoadMoreButton() {
        const loadMoreButton = utils.qs('[data-load-more]');
        if (!loadMoreButton) return;

        if (displayCount >= displayedProducts.length) {
            utils.hide(loadMoreButton);
        } else {
            utils.show(loadMoreButton);
            const remaining = displayedProducts.length - displayCount;
            loadMoreButton.textContent = `Load More Products (${remaining} remaining)`;
        }
    }

})();
