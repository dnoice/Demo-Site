# Danny's Dodgers Crafts - Demo Website

A professional, responsive demonstration website for Danny's Dodgers Crafts, a veteran-owned small business specializing in handcrafted Dodgers-themed merchandise.

## Project Overview

**Client:** Danny Barcelo
**Developer:** Dennis Smaltz (digiSpace)
**Location:** Los Angeles, California
**Type:** Front-end Demo / E-commerce Prototype
**Status:** Demo Version

### Purpose

This website serves as a demonstration of design capabilities and layout structure for a developing small business. It showcases handcrafted, Dodgers-themed custom merchandise including lamps, keychains, novelty items, and other artisan goods.

## Features

### Core Functionality
- ✅ Responsive design (mobile-first approach)
- ✅ Semantic HTML5 structure
- ✅ Accessible (WCAG 2.1 Level AA compliant)
- ✅ Single-page application structure
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Product filtering by category
- ✅ Image gallery with lightbox
- ✅ Testimonials carousel
- ✅ Contact form with validation
- ✅ Shopping cart demo (localStorage)
- ✅ Back to top button
- ✅ No external dependencies

### Sections
1. **Header/Navigation** - Sticky header with mobile menu
2. **Hero** - Main headline with stats cards
3. **Featured Banner** - Scrolling announcements
4. **Products** - Filterable product grid (12 items)
5. **About** - Business story and features
6. **Gallery** - 8 images with lightbox
7. **Testimonials** - Auto-playing carousel
8. **Contact** - Form with validation
9. **Footer** - Links and information

## Technology Stack

### Front-End Only
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript** - ES6+, no frameworks

### Why No Framework?
- Faster load times
- Easier to maintain and understand
- No build process required
- Simple to hand off to client
- Easy migration to framework later if needed

## File Structure

```
danny-dodgers-crafts/
├── index.html                 # Main HTML file
├── css/
│   ├── reset.css             # CSS reset and normalize
│   ├── variables.css         # Design tokens
│   ├── styles.css            # Core styles
│   ├── components.css        # Component styles
│   └── responsive.css        # Media queries
├── js/
│   ├── config.js             # Configuration
│   ├── utils.js              # Utility functions
│   ├── api.js                # Mock API
│   ├── main.js               # Main functionality
│   └── components/
│       ├── navigation.js     # Mobile menu
│       ├── modal.js          # Lightbox
│       ├── carousel.js       # Testimonials slider
│       ├── gallery.js        # Gallery functionality
│       ├── product-grid.js   # Product filtering
│       └── contact-form.js   # Form validation
├── assets/
│   ├── icons/
│   │   ├── sprite.svg        # SVG icon sprite
│   │   └── favicon.svg       # Favicon
│   └── images/
│       ├── products/         # Product images
│       ├── gallery/          # Gallery images
│       └── about/            # About section images
├── data/
│   ├── products.json         # Product data
│   ├── gallery.json          # Gallery data
│   └── testimonials.json     # Testimonial data
└── docs/
    ├── README.md             # This file
    └── DEPLOYMENT.md         # Deployment guide
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (optional, for customization)
- Local web server (optional, for testing)

### Installation

1. **Download or Clone the Repository**
   ```bash
   git clone <repository-url>
   cd danny-dodgers-crafts
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: http://localhost:8000

   **Using Node.js:**
   ```bash
   npx http-server
   ```

   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

### Adding Product Images

The demo currently uses placeholder image paths. To add actual images:

1. Add product photos to `assets/images/products/`
2. Add gallery photos to `assets/images/gallery/`
3. Add workshop photo to `assets/images/about/`
4. Update image paths in `js/api.js` if needed

**Image Requirements:**
- Format: JPG or PNG
- Product images: 800x600px minimum
- Gallery images: 1200x1200px minimum
- Optimized for web (<200KB per image)

## Customization

### Colors
Edit `css/variables.css` to change the color scheme:
```css
--color-primary-500: #008b8b;  /* Deep Teal */
--color-secondary-500: #ffc107; /* Warm Amber */
```

### Content
Edit `js/api.js` to modify:
- Product listings
- Gallery items
- Testimonials

Or create actual JSON files and load them dynamically.

### Contact Information
Update `js/config.js`:
```javascript
contact: {
    email: 'your-email@example.com',
    location: 'Your Location',
    responseTime: 'Your response time'
}
```

## Browser Support

### Tested and Working
- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

### Progressive Enhancement
- Core functionality works without JavaScript
- Graceful degradation for older browsers
- Respects user preferences (reduced motion, dark mode)

## Performance

### Optimization Features
- Lazy loading for images
- SVG icons (no icon fonts)
- Minimal JavaScript bundle
- No external dependencies
- Optimized CSS cascade
- Efficient event handling

### Target Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+ (all categories)

## Accessibility

### WCAG 2.1 Level AA Compliance
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Skip links
- ✅ Alt text for all images
- ✅ Color contrast compliance
- ✅ Screen reader announcements
- ✅ Reduced motion support

### Testing Tools
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit

## Demo Limitations

### What This Demo Includes
- ✅ Complete front-end design
- ✅ Interactive UI components
- ✅ Form validation
- ✅ Mock product data
- ✅ Cart simulation (localStorage)

### What This Demo Does NOT Include
- ❌ Real backend/database
- ❌ Actual payment processing
- ❌ Email functionality
- ❌ User authentication
- ❌ Order management
- ❌ Inventory tracking

## Future Enhancements

### Phase 2 - Full E-commerce
- Backend with database
- Payment gateway integration (Stripe/PayPal)
- Order management system
- User accounts
- Email notifications
- Admin dashboard

### Recommended Platforms
- **CMS Option:** WordPress + WooCommerce
- **E-commerce Platform:** Shopify
- **Custom Build:** Node.js + MongoDB + Stripe

See `DEPLOYMENT.md` for hosting recommendations.

## Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in `js/api.js`
- Ensure images exist in `assets/images/`
- Check browser console for errors

**JavaScript not working:**
- Check browser console for errors
- Ensure files are loaded in correct order
- Clear browser cache

**Styles not applying:**
- Check CSS file paths in `index.html`
- Ensure CSS files exist
- Check for CSS syntax errors

**Mobile menu not working:**
- Check `js/components/navigation.js` is loaded
- Check browser console for errors
- Test on actual mobile device

## Support

For questions or issues:
- Review this README
- Check browser console for errors
- Review the DEMO-BLUEPRINT.md for detailed specifications
- Contact the developer (digiSpace)

## License

This demo website is the property of the developer (Dennis Smaltz / digiSpace) until full payment is received. Upon completion of payment, the client (Danny Barcelo) receives a perpetual license to use and modify the Demo Site.

## Credits

**Developed by:** Dennis Smaltz (digiSpace)
**For:** Danny Barcelo (Danny's Dodgers Crafts)
**Date:** October 2025
**Location:** Los Angeles, California

---

*Building presence, precision, and possibility — one pixel at a time.*

**digiSpace** - Web Development Maestro
