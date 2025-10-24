/* Site Configuration */

const CONFIG = {
    // Site Information
    siteName: "Danny's Dodgers Crafts",
    siteTagline: "Handcrafted Merchandise with Heart",
    siteUrl: window.location.origin,

    // Contact Information
    contact: {
        email: 'danny@dannyscrafts.com',
        location: 'Los Angeles, California',
        responseTime: 'Within 24-48 hours'
    },

    // Social Media Links
    social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
    },

    // Product Settings
    products: {
        initialLoadCount: 8,
        loadMoreCount: 4,
        categories: ['all', 'lamps', 'keychains', 'novelty', 'other']
    },

    // Gallery Settings
    gallery: {
        itemsPerPage: 8
    },

    // Testimonials Settings
    testimonials: {
        autoPlayInterval: 5000, // 5 seconds
        autoPlay: true
    },

    // Form Settings
    form: {
        successMessageDuration: 5000 // 5 seconds
    },

    // Animation Settings
    animation: {
        scrollThreshold: 200, // pixels from top before showing back-to-top button
        smoothScrollDuration: 800 // milliseconds
    },

    // Local Storage Keys
    storage: {
        cart: 'dannys-crafts-cart'
    }
};

// Make CONFIG globally available
window.CONFIG = CONFIG;
