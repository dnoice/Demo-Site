/* Carousel Component - Testimonials Slider */

(function() {
    'use strict';

    let currentSlide = 0;
    let testimonials = [];
    let autoPlayInterval = null;

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    async function init() {
        const carousel = utils.qs('[data-testimonials-carousel]');
        if (!carousel) return;

        const prevButton = utils.qs('[data-carousel-prev]');
        const nextButton = utils.qs('[data-carousel-next]');
        const dotsContainer = utils.qs('[data-carousel-dots]');

        try {
            // Load testimonials
            testimonials = await API.getTestimonials();

            if (testimonials.length === 0) {
                carousel.innerHTML = '<p class="text-center">No testimonials available.</p>';
                return;
            }

            // Render testimonials
            renderTestimonials(carousel);

            // Render dots
            if (dotsContainer) {
                renderDots(dotsContainer);
            }

            // Show first slide
            showSlide(0);

            // Setup navigation
            if (prevButton) {
                utils.on(prevButton, 'click', () => {
                    stopAutoPlay();
                    navigateSlide(-1);
                    startAutoPlay();
                });
            }

            if (nextButton) {
                utils.on(nextButton, 'click', () => {
                    stopAutoPlay();
                    navigateSlide(1);
                    startAutoPlay();
                });
            }

            // Keyboard navigation
            utils.on(document, 'keydown', (e) => {
                const carouselInView = isElementInViewport(carousel);
                if (!carouselInView) return;

                if (e.key === 'ArrowLeft') {
                    stopAutoPlay();
                    navigateSlide(-1);
                    startAutoPlay();
                } else if (e.key === 'ArrowRight') {
                    stopAutoPlay();
                    navigateSlide(1);
                    startAutoPlay();
                }
            });

            // Start autoplay if enabled
            if (CONFIG.testimonials.autoPlay) {
                startAutoPlay();
            }

            // Pause autoplay on hover (unless user prefers reduced motion)
            if (!utils.prefersReducedMotion()) {
                utils.on(carousel, 'mouseenter', stopAutoPlay);
                utils.on(carousel, 'mouseleave', startAutoPlay);
            }

        } catch (error) {
            console.error('Error loading testimonials:', error);
            carousel.innerHTML = '<p class="text-center">Error loading testimonials.</p>';
        }
    }

    /**
     * Render testimonials
     */
    function renderTestimonials(carousel) {
        carousel.innerHTML = testimonials.map((testimonial, index) =>
            `<div class="testimonial-card ${index === 0 ? 'active' : ''}" data-slide="${index}">
                <div class="testimonial-card__stars">
                    ${renderStars(testimonial.rating)}
                </div>
                <p class="testimonial-card__text">"${utils.sanitizeHTML(testimonial.text)}"</p>
                <p class="testimonial-card__author">${utils.sanitizeHTML(testimonial.author)}</p>
                <p class="testimonial-card__location">${utils.sanitizeHTML(testimonial.location)}</p>
            </div>`
        ).join('');
    }

    /**
     * Render star rating
     */
    function renderStars(rating) {
        return Array.from({ length: 5 }, (_, i) =>
            `<svg class="testimonial-card__star" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <use href="./assets/icons/sprite.svg#star"></use>
            </svg>`
        ).join('');
    }

    /**
     * Render navigation dots
     */
    function renderDots(container) {
        container.innerHTML = testimonials.map((_, index) =>
            `<button class="carousel-dot ${index === 0 ? 'active' : ''}"
                    data-slide="${index}"
                    aria-label="Go to testimonial ${index + 1}">
            </button>`
        ).join('');

        // Add click handlers to dots
        const dots = utils.qsAll('.carousel-dot');
        dots.forEach((dot, index) => {
            utils.on(dot, 'click', () => {
                stopAutoPlay();
                showSlide(index);
                startAutoPlay();
            });
        });
    }

    /**
     * Show specific slide
     */
    function showSlide(index) {
        currentSlide = index;

        // Update slides
        const slides = utils.qsAll('.testimonial-card');
        slides.forEach((slide, i) => {
            utils.toggleClass(slide, 'active', i === index);
        });

        // Update dots
        const dots = utils.qsAll('.carousel-dot');
        dots.forEach((dot, i) => {
            utils.toggleClass(dot, 'active', i === index);
        });

        utils.announce(`Testimonial ${index + 1} of ${testimonials.length}`);
    }

    /**
     * Navigate to previous/next slide
     */
    function navigateSlide(direction) {
        let newIndex = currentSlide + direction;

        // Wrap around
        if (newIndex < 0) {
            newIndex = testimonials.length - 1;
        } else if (newIndex >= testimonials.length) {
            newIndex = 0;
        }

        showSlide(newIndex);
    }

    /**
     * Start autoplay
     */
    function startAutoPlay() {
        if (utils.prefersReducedMotion()) return;

        stopAutoPlay(); // Clear any existing interval

        autoPlayInterval = setInterval(() => {
            navigateSlide(1);
        }, CONFIG.testimonials.autoPlayInterval);
    }

    /**
     * Stop autoplay
     */
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    /**
     * Check if element is in viewport
     */
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Stop autoplay when page is hidden
    utils.on(document, 'visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else if (CONFIG.testimonials.autoPlay) {
            startAutoPlay();
        }
    });

})();
