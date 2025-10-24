/* Modal Component - Lightbox for Images */

(function() {
    'use strict';

    let currentIndex = 0;
    let images = [];

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const modal = utils.qs('[data-modal]');
        if (!modal) return;

        const modalImage = utils.qs('[data-modal-image]');
        const closeButtons = utils.qsAll('[data-modal-close]');
        const prevButton = utils.qs('[data-modal-prev]');
        const nextButton = utils.qs('[data-modal-next]');

        // Setup close buttons
        closeButtons.forEach(button => {
            utils.on(button, 'click', () => closeModal(modal));
        });

        // Setup navigation buttons
        if (prevButton) {
            utils.on(prevButton, 'click', () => navigateImage(-1, modalImage));
        }

        if (nextButton) {
            utils.on(nextButton, 'click', () => navigateImage(1, modalImage));
        }

        // Close on overlay click
        const overlay = utils.qs('.modal__overlay');
        if (overlay) {
            utils.on(overlay, 'click', () => closeModal(modal));
        }

        // Keyboard navigation
        utils.on(document, 'keydown', (e) => {
            if (!utils.isVisible(modal)) return;

            switch(e.key) {
                case 'Escape':
                    closeModal(modal);
                    break;
                case 'ArrowLeft':
                    navigateImage(-1, modalImage);
                    break;
                case 'ArrowRight':
                    navigateImage(1, modalImage);
                    break;
            }
        });

        // Make modal functions globally available
        window.Modal = {
            open: (imageSrc, imageAlt, imagesList = []) => openModal(modal, modalImage, imageSrc, imageAlt, imagesList),
            close: () => closeModal(modal)
        };
    }

    /**
     * Open modal with image
     */
    function openModal(modal, modalImage, imageSrc, imageAlt, imagesList = []) {
        images = imagesList;
        currentIndex = images.findIndex(img => img.src === imageSrc);
        if (currentIndex === -1) currentIndex = 0;

        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;

        utils.show(modal);
        document.body.style.overflow = 'hidden';

        // Focus trap
        modal.focus();

        utils.announce(`Viewing image: ${imageAlt}`);
    }

    /**
     * Close modal
     */
    function closeModal(modal) {
        utils.hide(modal);
        document.body.style.overflow = '';

        utils.announce('Image viewer closed');
    }

    /**
     * Navigate to previous/next image
     */
    function navigateImage(direction, modalImage) {
        if (images.length === 0) return;

        currentIndex += direction;

        // Wrap around
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        const image = images[currentIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;

        utils.announce(`Image ${currentIndex + 1} of ${images.length}: ${image.alt}`);
    }

})();
