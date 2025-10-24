/* Utility Functions */

const utils = {
    /**
     * Safely query a single DOM element
     * @param {string} selector - CSS selector
     * @param {Element} parent - Parent element to search within
     * @returns {Element|null}
     */
    qs(selector, parent = document) {
        return parent.querySelector(selector);
    },

    /**
     * Safely query multiple DOM elements
     * @param {string} selector - CSS selector
     * @param {Element} parent - Parent element to search within
     * @returns {Array<Element>}
     */
    qsAll(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector));
    },

    /**
     * Add event listener to element(s)
     * @param {Element|Array<Element>} elements - Element or array of elements
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    on(elements, event, handler) {
        const els = Array.isArray(elements) ? elements : [elements];
        els.forEach(el => {
            if (el) el.addEventListener(event, handler);
        });
    },

    /**
     * Remove event listener from element(s)
     * @param {Element|Array<Element>} elements - Element or array of elements
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    off(elements, event, handler) {
        const els = Array.isArray(elements) ? elements : [elements];
        els.forEach(el => {
            if (el) el.removeEventListener(event, handler);
        });
    },

    /**
     * Format price to USD currency
     * @param {number} price - Price value
     * @returns {string} Formatted price
     */
    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    },

    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function calls
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {Function} Throttled function
     */
    throttle(func, limit = 300) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Smooth scroll to element
     * @param {string|Element} target - Target element or selector
     * @param {number} offset - Offset from top in pixels
     */
    smoothScrollTo(target, offset = 0) {
        const element = typeof target === 'string' ? this.qs(target) : target;
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    },

    /**
     * Get data attribute value
     * @param {Element} element - Target element
     * @param {string} attr - Data attribute name (without 'data-' prefix)
     * @returns {string|null}
     */
    getData(element, attr) {
        return element ? element.dataset[attr] : null;
    },

    /**
     * Set data attribute value
     * @param {Element} element - Target element
     * @param {string} attr - Data attribute name (without 'data-' prefix)
     * @param {string} value - Value to set
     */
    setData(element, attr, value) {
        if (element) element.dataset[attr] = value;
    },

    /**
     * Toggle class on element
     * @param {Element} element - Target element
     * @param {string} className - Class name to toggle
     * @param {boolean} force - Force add or remove
     */
    toggleClass(element, className, force) {
        if (!element) return;
        element.classList.toggle(className, force);
    },

    /**
     * Add class to element
     * @param {Element} element - Target element
     * @param {string} className - Class name to add
     */
    addClass(element, className) {
        if (element) element.classList.add(className);
    },

    /**
     * Remove class from element
     * @param {Element} element - Target element
     * @param {string} className - Class name to remove
     */
    removeClass(element, className) {
        if (element) element.classList.remove(className);
    },

    /**
     * Check if element has class
     * @param {Element} element - Target element
     * @param {string} className - Class name to check
     * @returns {boolean}
     */
    hasClass(element, className) {
        return element ? element.classList.contains(className) : false;
    },

    /**
     * Create element with attributes and content
     * @param {string} tag - HTML tag name
     * @param {Object} attrs - Attributes object
     * @param {string|Element} content - Content to append
     * @returns {Element}
     */
    createElement(tag, attrs = {}, content = '') {
        const el = document.createElement(tag);

        Object.keys(attrs).forEach(key => {
            if (key === 'className') {
                el.className = attrs[key];
            } else if (key === 'dataset') {
                Object.keys(attrs[key]).forEach(dataKey => {
                    el.dataset[dataKey] = attrs[key][dataKey];
                });
            } else {
                el.setAttribute(key, attrs[key]);
            }
        });

        if (typeof content === 'string') {
            el.textContent = content;
        } else if (content instanceof Element) {
            el.appendChild(content);
        }

        return el;
    },

    /**
     * Show element
     * @param {Element} element - Element to show
     */
    show(element) {
        if (element) element.removeAttribute('hidden');
    },

    /**
     * Hide element
     * @param {Element} element - Element to hide
     */
    hide(element) {
        if (element) element.setAttribute('hidden', '');
    },

    /**
     * Check if element is visible
     * @param {Element} element - Element to check
     * @returns {boolean}
     */
    isVisible(element) {
        return element ? !element.hasAttribute('hidden') : false;
    },

    /**
     * Local storage helpers
     */
    storage: {
        get(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (error) {
                console.error('Error reading from localStorage:', error);
                return null;
            }
        },

        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error('Error writing to localStorage:', error);
                return false;
            }
        },

        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error('Error removing from localStorage:', error);
                return false;
            }
        },

        clear() {
            try {
                localStorage.clear();
                return true;
            } catch (error) {
                console.error('Error clearing localStorage:', error);
                return false;
            }
        }
    },

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean}
     */
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    /**
     * Sanitize HTML string
     * @param {string} str - String to sanitize
     * @returns {string}
     */
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },

    /**
     * Generate unique ID
     * @returns {string}
     */
    generateId() {
        return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Check if user prefers reduced motion
     * @returns {boolean}
     */
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    /**
     * Announce to screen readers
     * @param {string} message - Message to announce
     * @param {string} priority - 'polite' or 'assertive'
     */
    announce(message, priority = 'polite') {
        const announcer = document.createElement('div');
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', priority);
        announcer.className = 'sr-only';
        announcer.textContent = message;
        document.body.appendChild(announcer);

        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    }
};

// Make utils globally available
window.utils = utils;
