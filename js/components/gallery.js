/* Gallery Component */

(function() {
    'use strict';

    let galleryItems = [];

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    async function init() {
        const gallery = utils.qs('[data-gallery-grid]');
        if (!gallery) return;

        try {
            // Load gallery items
            galleryItems = await API.getGallery();

            if (galleryItems.length === 0) {
                gallery.innerHTML = '<p class="text-center">No gallery items available.</p>';
                return;
            }

            // Render gallery
            renderGallery(gallery);

            // Setup click handlers
            setupGalleryHandlers();

        } catch (error) {
            console.error('Error loading gallery:', error);
            gallery.innerHTML = '<p class="text-center">Error loading gallery.</p>';
        }
    }

    /**
     * Render gallery grid
     */
    function renderGallery(gallery) {
        gallery.innerHTML = galleryItems.map((item, index) =>
            `<div class="gallery__item" data-gallery-item data-index="${index}">
                <img src="${item.image}"
                     alt="${utils.sanitizeHTML(item.alt)}"
                     class="gallery__image"
                     loading="lazy">
                <div class="gallery__overlay">
                    <span class="gallery__caption">${utils.sanitizeHTML(item.caption)}</span>
                </div>
            </div>`
        ).join('');
    }

    /**
     * Setup click handlers for gallery items
     */
    function setupGalleryHandlers() {
        const items = utils.qsAll('[data-gallery-item]');

        items.forEach((item, index) => {
            // Make gallery items keyboard accessible
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', `View ${galleryItems[index].caption}`);

            // Click handler
            utils.on(item, 'click', () => {
                openGalleryLightbox(index);
            });

            // Keyboard handler
            utils.on(item, 'keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openGalleryLightbox(index);
                }
            });
        });
    }

    /**
     * Open lightbox with gallery images
     */
    function openGalleryLightbox(index) {
        const item = galleryItems[index];

        // Prepare images list for modal navigation
        const imagesList = galleryItems.map(img => ({
            src: img.image,
            alt: img.alt
        }));

        // Open modal (defined in modal.js)
        if (window.Modal) {
            window.Modal.open(item.image, item.alt, imagesList);
        }
    }

})();
