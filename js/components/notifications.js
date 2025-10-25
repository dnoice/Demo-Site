/* Toast Notification System - Version 2.0 */

(function() {
    'use strict';

    const TOAST_DURATION = 3000; // 3 seconds
    let toastContainer = null;

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        createToastContainer();
    }

    /**
     * Create toast container
     */
    function createToastContainer() {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        toastContainer.setAttribute('aria-live', 'polite');
        toastContainer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(toastContainer);
    }

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {string} type - Type of toast (success, error, info, warning)
     * @param {number} duration - Duration in ms
     */
    function showToast(message, type = 'info', duration = TOAST_DURATION) {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;

        // Get icon based on type
        const icon = getIconForType(type);

        toast.innerHTML = `
            <div class="toast__icon">
                ${icon}
            </div>
            <div class="toast__message">${utils.sanitizeHTML(message)}</div>
            <button class="toast__close" aria-label="Close notification">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="./assets/icons/sprite.svg#close"></use>
                </svg>
            </button>
        `;

        // Add to container
        toastContainer.appendChild(toast);

        // Trigger animation
        setTimeout(() => {
            toast.classList.add('toast--show');
        }, 10);

        // Setup close button
        const closeButton = toast.querySelector('.toast__close');
        closeButton.addEventListener('click', () => {
            closeToast(toast);
        });

        // Auto close
        const autoCloseTimer = setTimeout(() => {
            closeToast(toast);
        }, duration);

        // Pause timer on hover
        toast.addEventListener('mouseenter', () => {
            clearTimeout(autoCloseTimer);
        });

        // Resume timer on leave
        toast.addEventListener('mouseleave', () => {
            setTimeout(() => {
                closeToast(toast);
            }, 1000);
        });

        return toast;
    }

    /**
     * Close toast
     */
    function closeToast(toast) {
        toast.classList.remove('toast--show');
        toast.classList.add('toast--hide');

        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    /**
     * Get icon SVG for toast type
     */
    function getIconForType(type) {
        const icons = {
            success: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            error: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
            warning: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
            info: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
        };

        return icons[type] || icons.info;
    }

    /**
     * Convenience methods
     */
    const Toast = {
        success: (message, duration) => showToast(message, 'success', duration),
        error: (message, duration) => showToast(message, 'error', duration),
        warning: (message, duration) => showToast(message, 'warning', duration),
        info: (message, duration) => showToast(message, 'info', duration),
        show: showToast
    };

    // Make Toast globally available
    window.Toast = Toast;

})();
