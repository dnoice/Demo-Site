/* Navigation Component - Mobile Menu */

(function() {
    'use strict';

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const toggle = utils.qs('[data-nav-toggle]');
        const menu = utils.qs('[data-nav-menu]');
        const links = utils.qsAll('[data-nav-menu] .nav__link');

        if (!toggle || !menu) return;

        // Toggle mobile menu
        utils.on(toggle, 'click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            toggle.setAttribute('aria-expanded', newState);
            utils.toggleClass(menu, 'active', newState);

            // Prevent body scroll when menu is open
            if (newState) {
                document.body.style.overflow = 'hidden';
                utils.announce('Navigation menu opened');
            } else {
                document.body.style.overflow = '';
                utils.announce('Navigation menu closed');
            }
        });

        // Close menu when clicking a link
        links.forEach(link => {
            utils.on(link, 'click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                utils.removeClass(menu, 'active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        utils.on(document, 'click', (e) => {
            const isToggle = toggle.contains(e.target);
            const isMenu = menu.contains(e.target);
            const isOpen = utils.hasClass(menu, 'active');

            if (!isToggle && !isMenu && isOpen) {
                toggle.setAttribute('aria-expanded', 'false');
                utils.removeClass(menu, 'active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on ESC key
        utils.on(document, 'keydown', (e) => {
            if (e.key === 'Escape' && utils.hasClass(menu, 'active')) {
                toggle.setAttribute('aria-expanded', 'false');
                utils.removeClass(menu, 'active');
                document.body.style.overflow = '';
                toggle.focus(); // Return focus to toggle button
            }
        });

        // Handle window resize - close menu if resized to desktop
        let resizeTimeout;
        utils.on(window, 'resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth >= 768 && utils.hasClass(menu, 'active')) {
                    toggle.setAttribute('aria-expanded', 'false');
                    utils.removeClass(menu, 'active');
                    document.body.style.overflow = '';
                }
            }, 250);
        });
    }

})();
