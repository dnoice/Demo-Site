/* Main JavaScript - General Site Functionality */

(function() {
    'use strict';

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        setupSmoothScrolling();
        setupScrollEffects(); // Consolidated scroll handlers
        setupCartCount();
        handleExternalLinks();
        setupCartToggle();
        setupKeyboardHandlers();
        logDevInfo();

        // Announce page loaded for screen readers
        utils.announce('Page loaded successfully');
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    function setupSmoothScrolling() {
        const links = utils.qsAll('a[href^="#"]');

        links.forEach(link => {
            utils.on(link, 'click', (e) => {
                const href = link.getAttribute('href');

                // Ignore empty or just # links
                if (!href || href === '#') return;

                const target = utils.qs(href);
                if (target) {
                    e.preventDefault();

                    // Close mobile menu if open
                    const navMenu = utils.qs('[data-nav-menu]');
                    if (navMenu) {
                        utils.removeClass(navMenu, 'active');
                        const toggle = utils.qs('[data-nav-toggle]');
                        if (toggle) {
                            toggle.setAttribute('aria-expanded', 'false');
                        }
                    }

                    // Smooth scroll to target
                    const headerHeight = utils.qs('.header')?.offsetHeight || 72;
                    utils.smoothScrollTo(target, headerHeight + 20);
                }
            });
        });
    }

    /**
     * Setup scroll-based effects (consolidated for performance)
     * Handles back-to-top button and header shadow in one scroll listener
     */
    function setupScrollEffects() {
        const backToTop = utils.qs('#back-to-top');
        const header = utils.qs('.header');
        const scrollThreshold = CONFIG.animation.scrollThreshold;

        // Consolidated scroll handler for better performance
        const handleScroll = utils.throttle(() => {
            const scrollY = window.pageYOffset;

            // Back to top button visibility
            if (backToTop) {
                const shouldShow = scrollY > scrollThreshold;
                utils.toggleClass(backToTop, 'visible', shouldShow);

                if (shouldShow) {
                    utils.show(backToTop);
                } else {
                    utils.hide(backToTop);
                }
            }

            // Header shadow effect
            if (header) {
                const shouldAddShadow = scrollY > 10;
                header.style.boxShadow = shouldAddShadow ? 'var(--shadow-md)' : 'var(--shadow-sm)';
            }
        }, 100);

        utils.on(window, 'scroll', handleScroll);

        // Back to top click handler
        if (backToTop) {
            utils.on(backToTop, 'click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                utils.announce('Scrolled to top of page');
            });
        }
    }

    /**
     * Setup and update cart count display
     */
    function setupCartCount() {
        updateCartCount();

        // Listen for cart updates
        window.addEventListener('cartUpdated', updateCartCount);
    }

    /**
     * Update cart count in header
     */
    function updateCartCount() {
        const cartCountElement = utils.qs('[data-cart-count]');
        if (!cartCountElement) return;

        const count = window.Cart ? Cart.getCount() : API.getCartCount();
        const oldCount = parseInt(cartCountElement.textContent) || 0;

        cartCountElement.textContent = count;

        // Hide count badge if cart is empty
        if (count === 0) {
            cartCountElement.style.display = 'none';
        } else {
            cartCountElement.style.display = 'flex';

            // Add pulse animation if count increased
            if (count > oldCount) {
                utils.addClass(cartCountElement, 'updated');
                setTimeout(() => {
                    utils.removeClass(cartCountElement, 'updated');
                }, 500);
            }
        }
    }

    /**
     * Handle external links - open in new tab
     */
    function handleExternalLinks() {
        const links = utils.qsAll('a[href^="http"]');

        links.forEach(link => {
            const href = link.getAttribute('href');
            const isExternal = !href.includes(window.location.hostname);

            if (isExternal) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    /**
     * Setup cart toggle functionality
     */
    function setupCartToggle() {
        const cartToggle = utils.qs('[data-cart-toggle]');
        if (cartToggle) {
            utils.on(cartToggle, 'click', () => {
                if (window.Cart) {
                    Cart.open();
                }
            });
        }
    }

    /**
     * Setup keyboard navigation handlers
     */
    function setupKeyboardHandlers() {
        document.addEventListener('keydown', (e) => {
            // ESC key closes modals
            if (e.key === 'Escape') {
                const modal = utils.qs('.modal:not([hidden])');
                if (modal) {
                    const closeButton = modal.querySelector('[data-modal-close]');
                    if (closeButton) closeButton.click();
                }

                // Close mobile menu
                const navMenu = utils.qs('[data-nav-menu]');
                if (navMenu && utils.hasClass(navMenu, 'active')) {
                    const toggle = utils.qs('[data-nav-toggle]');
                    if (toggle) toggle.click();
                }
            }
        });
    }

    /**
     * Log site info to console (for development)
     */
    function logDevInfo() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('%c' + CONFIG.siteName, 'font-size: 24px; font-weight: bold; color: #008b8b;');
            console.log('%c' + CONFIG.siteTagline, 'font-size: 14px; color: #666;');
            console.log('%cDeveloped by digiSpace', 'font-size: 12px; font-style: italic; color: #999;');
            console.log('');
            console.log('Available global objects:');
            console.log('- CONFIG: Site configuration');
            console.log('- utils: Utility functions');
            console.log('- API: Mock API for data');
            console.log('- Cart: Shopping cart (V2)');
            console.log('- Toast: Notifications (V2)');
        }
    }

})();
