/* Mock API and Data */

const API = {
    // Mock Products Data
    products: [
        {
            id: 1,
            title: 'Classic Dodgers Table Lamp',
            category: 'lamps',
            price: 65,
            description: 'Handcrafted table lamp featuring authentic Dodgers design elements. Perfect for the home or office.',
            image: './assets/images/products/lamp-01.jpg',
            featured: true
        },
        {
            id: 2,
            title: 'Stadium Miniature Keychain',
            category: 'keychains',
            price: 12,
            description: 'Detailed miniature stadium keychain made from premium materials. A perfect gift for any fan.',
            image: './assets/images/products/keychain-01.jpg',
            featured: false
        },
        {
            id: 3,
            title: 'Vintage Baseball Desk Lamp',
            category: 'lamps',
            price: 48,
            description: 'Unique desk lamp with vintage baseball design. Adds character to any workspace.',
            image: './assets/images/products/lamp-02.jpg',
            featured: false
        },
        {
            id: 4,
            title: 'Team Cap Keychain',
            category: 'keychains',
            price: 8,
            description: 'Miniature team cap keychain, meticulously crafted with attention to detail.',
            image: './assets/images/products/keychain-02.jpg',
            featured: false
        },
        {
            id: 5,
            title: 'Dodgers Coaster Set',
            category: 'novelty',
            price: 24,
            description: 'Set of 4 handcrafted coasters featuring team colors and logo. Protects surfaces in style.',
            image: './assets/images/products/novelty-01.jpg',
            featured: true
        },
        {
            id: 6,
            title: 'Baseball Bat Bottle Opener',
            category: 'novelty',
            price: 18,
            description: 'Functional bottle opener shaped like a miniature baseball bat. Great conversation starter.',
            image: './assets/images/products/novelty-02.jpg',
            featured: false
        },
        {
            id: 7,
            title: 'Night Light with Team Logo',
            category: 'lamps',
            price: 32,
            description: 'Soft LED night light featuring team logo. Perfect for bedrooms or hallways.',
            image: './assets/images/products/lamp-03.jpg',
            featured: false
        },
        {
            id: 8,
            title: 'Pennant Keychain',
            category: 'keychains',
            price: 10,
            description: 'Classic pennant design miniaturized into a quality keychain accessory.',
            image: './assets/images/products/keychain-03.jpg',
            featured: false
        },
        {
            id: 9,
            title: 'Vintage Stadium Clock',
            category: 'novelty',
            price: 48,
            description: 'Wall clock featuring vintage stadium imagery. Functional art for true fans.',
            image: './assets/images/products/novelty-03.jpg',
            featured: false
        },
        {
            id: 10,
            title: 'Baseball Bat Keychain',
            category: 'keychains',
            price: 15,
            description: 'Detailed miniature baseball bat keychain with authentic wood finish.',
            image: './assets/images/products/keychain-04.jpg',
            featured: false
        },
        {
            id: 11,
            title: 'Custom Card Holder',
            category: 'other',
            price: 42,
            description: 'Handcrafted card holder with team design. Keeps cards organized in style.',
            image: './assets/images/products/other-01.jpg',
            featured: false
        },
        {
            id: 12,
            title: 'Stadium Blueprint Art',
            category: 'other',
            price: 55,
            description: 'Framed blueprint-style art of the stadium. Unique wall decor for fans.',
            image: './assets/images/products/other-02.jpg',
            featured: true
        }
    ],

    // Mock Gallery Data
    gallery: [
        {
            id: 1,
            image: './assets/images/gallery/item-01.jpg',
            caption: 'Custom Dodgers lamp in progress',
            alt: 'Handcrafted Dodgers lamp being assembled in workshop'
        },
        {
            id: 2,
            image: './assets/images/gallery/item-02.jpg',
            caption: 'Keychain collection',
            alt: 'Various handcrafted Dodgers keychains on display'
        },
        {
            id: 3,
            image: './assets/images/gallery/item-03.jpg',
            caption: 'Workshop detail',
            alt: 'Close-up of crafting tools and materials'
        },
        {
            id: 4,
            image: './assets/images/gallery/item-04.jpg',
            caption: 'Finished lamp display',
            alt: 'Completed Dodgers lamp on display'
        },
        {
            id: 5,
            image: './assets/images/gallery/item-05.jpg',
            caption: 'Novelty items collection',
            alt: 'Assortment of novelty Dodgers items'
        },
        {
            id: 6,
            image: './assets/images/gallery/item-06.jpg',
            caption: 'Custom order in progress',
            alt: 'Custom Dodgers merchandise being crafted'
        },
        {
            id: 7,
            image: './assets/images/gallery/item-07.jpg',
            caption: 'Paint and finish details',
            alt: 'Detailed painting work on merchandise'
        },
        {
            id: 8,
            image: './assets/images/gallery/item-08.jpg',
            caption: 'Final product showcase',
            alt: 'Showcase of finished handcrafted products'
        }
    ],

    // Mock Testimonials Data
    testimonials: [
        {
            id: 1,
            text: 'Absolutely love the custom lamp I ordered! The craftsmanship is exceptional and it looks amazing in my office. Danny was professional and delivered exactly what I wanted.',
            author: 'Michael Rodriguez',
            location: 'Los Angeles, CA',
            rating: 5
        },
        {
            id: 2,
            text: 'The keychain I bought as a gift was a huge hit! Great quality and attention to detail. Will definitely be ordering more for other friends and family.',
            author: 'Sarah Chen',
            location: 'Pasadena, CA',
            rating: 5
        },
        {
            id: 3,
            text: 'Supporting a veteran-owned business while getting amazing handcrafted items is a win-win. The coaster set is beautiful and functional. Highly recommend!',
            author: 'James Thompson',
            location: 'Santa Monica, CA',
            rating: 5
        },
        {
            id: 4,
            text: "As a lifelong Dodgers fan, I appreciate the care that goes into each piece. Danny's work captures the spirit of the team perfectly. The lamp I ordered is a conversation starter!",
            author: 'Maria Gonzales',
            location: 'Long Beach, CA',
            rating: 5
        },
        {
            id: 5,
            text: 'Exceptional quality and reasonable prices. The custom order process was smooth and Danny kept me updated throughout. Could not be happier with my purchase!',
            author: 'David Park',
            location: 'Glendale, CA',
            rating: 5
        }
    ],

    /**
     * Get all products or filter by category
     * @param {string} category - Category to filter by
     * @returns {Promise<Array>}
     */
    async getProducts(category = 'all') {
        // Simulate API delay
        await this._delay(300);

        if (category === 'all') {
            return [...this.products];
        }

        return this.products.filter(product => product.category === category);
    },

    /**
     * Get product by ID
     * @param {number} id - Product ID
     * @returns {Promise<Object|null>}
     */
    async getProductById(id) {
        await this._delay(200);
        return this.products.find(product => product.id === id) || null;
    },

    /**
     * Get featured products
     * @returns {Promise<Array>}
     */
    async getFeaturedProducts() {
        await this._delay(300);
        return this.products.filter(product => product.featured);
    },

    /**
     * Get all gallery items
     * @returns {Promise<Array>}
     */
    async getGallery() {
        await this._delay(200);
        return [...this.gallery];
    },

    /**
     * Get all testimonials
     * @returns {Promise<Array>}
     */
    async getTestimonials() {
        await this._delay(200);
        return [...this.testimonials];
    },

    /**
     * Submit contact form (mock)
     * @param {Object} formData - Form data
     * @returns {Promise<Object>}
     */
    async submitContactForm(formData) {
        await this._delay(1000);

        // Log form submission (in production, this would send to server)
        console.log('Contact form submitted:', formData);

        return {
            success: true,
            message: 'Thank you for your message! We will get back to you within 24-48 hours.'
        };
    },

    /**
     * Add item to cart (mock)
     * @param {number} productId - Product ID
     * @returns {Promise<Object>}
     */
    async addToCart(productId) {
        await this._delay(300);

        const product = await this.getProductById(productId);
        if (!product) {
            return {
                success: false,
                message: 'Product not found'
            };
        }

        // Get current cart
        const cart = utils.storage.get(CONFIG.storage.cart) || [];

        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        // Save cart
        utils.storage.set(CONFIG.storage.cart, cart);

        return {
            success: true,
            message: 'Item added to cart',
            cart: cart,
            cartCount: this._getCartCount(cart)
        };
    },

    /**
     * Get cart items
     * @returns {Array}
     */
    getCart() {
        return utils.storage.get(CONFIG.storage.cart) || [];
    },

    /**
     * Get cart count
     * @returns {number}
     */
    getCartCount() {
        const cart = this.getCart();
        return this._getCartCount(cart);
    },

    /**
     * Private method to calculate cart count
     * @param {Array} cart - Cart items
     * @returns {number}
     */
    _getCartCount(cart) {
        return cart.reduce((total, item) => total + item.quantity, 0);
    },

    /**
     * Clear cart
     * @returns {boolean}
     */
    clearCart() {
        return utils.storage.remove(CONFIG.storage.cart);
    },

    /**
     * Simulate API delay
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise}
     */
    _delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// Make API globally available
window.API = API;
