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
        setupBackToTop();
        setupCartCount();
        setupScrollHeader();
        handleExternalLinks();

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
     * Setup back to top button
     */
    function setupBackToTop() {
        const backToTop = utils.qs('#back-to-top');
        if (!backToTop) return;

        const scrollThreshold = CONFIG.animation.scrollThreshold;

        // Show/hide button based on scroll position
        const handleScroll = utils.throttle(() => {
            const shouldShow = window.pageYOffset > scrollThreshold;
            utils.toggleClass(backToTop, 'visible', shouldShow);

            if (shouldShow) {
                utils.show(backToTop);
            } else {
                utils.hide(backToTop);
            }
        }, 100);

        utils.on(window, 'scroll', handleScroll);

        // Scroll to top on click
        utils.on(backToTop, 'click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            utils.announce('Scrolled to top of page');
        });
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
     * Add shadow to header on scroll
     */
    function setupScrollHeader() {
        const header = utils.qs('.header');
        if (!header) return;

        const handleScroll = utils.throttle(() => {
            const shouldAddShadow = window.pageYOffset > 10;
            if (shouldAddShadow) {
                header.style.boxShadow = 'var(--shadow-md)';
            } else {
                header.style.boxShadow = 'var(--shadow-sm)';
            }
        }, 100);

        utils.on(window, 'scroll', handleScroll);
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
     * Cart toggle functionality
     */
    const cartToggle = utils.qs('[data-cart-toggle]');
    if (cartToggle) {
        utils.on(cartToggle, 'click', () => {
            if (window.Cart) {
                Cart.open();
            }
        });
    }

    /**
     * Handle keyboard navigation
     */
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

    /**
     * Log site info to console (for development)
     */
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('%c' + CONFIG.siteName, 'font-size: 24px; font-weight: bold; color: #008b8b;');
        console.log('%c' + CONFIG.siteTagline, 'font-size: 14px; color: #666;');
        console.log('%cDeveloped by digiSpace', 'font-size: 12px; font-style: italic; color: #999;');
        console.log('');
        console.log('Available global objects:');
        console.log('- CONFIG: Site configuration');
        console.log('- utils: Utility functions');
        console.log('- API: Mock API for data');
    }

})();
