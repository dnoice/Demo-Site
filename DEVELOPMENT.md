# Development Guide
**Danny's Dodgers Crafts Demo Website**

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Development Environment](#development-environment)
4. [Architecture Overview](#architecture-overview)
5. [File Structure](#file-structure)
6. [Development Workflow](#development-workflow)
7. [Code Organization](#code-organization)
8. [Component System](#component-system)
9. [Styling Guidelines](#styling-guidelines)
10. [JavaScript Patterns](#javascript-patterns)
11. [Testing](#testing)
12. [Performance](#performance)
13. [Accessibility](#accessibility)
14. [Deployment](#deployment)
15. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required

- **Web Browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **Text Editor/IDE**: VS Code, Sublime Text, WebStorm, or similar
- **Git**: For version control
- **Basic Knowledge**: HTML5, CSS3, JavaScript (ES6+)

### Optional but Recommended

- **Local Web Server**: Python, Node.js, or PHP for local development
- **Browser Extensions**:
  - Web Developer Tools
  - Accessibility Insights
  - Lighthouse (built into Chrome DevTools)
- **Git GUI**: GitHub Desktop, GitKraken, or SourceTree (if preferred)

---

## Project Setup

### 1. Clone Repository

```bash
# Clone the repository
git clone https://github.com/dnoice/Demo-Site.git

# Navigate to project directory
cd Demo-Site
```

### 2. Verify File Structure

```bash
# List all files
ls -la

# Expected output should include:
# index.html
# css/
# js/
# assets/
# data/
```

### 3. No Build Process Required

This project uses **vanilla JavaScript** with no framework or build tools:
- ✅ No npm install needed
- ✅ No webpack configuration
- ✅ No compilation step
- ✅ Just open and code!

---

## Development Environment

### Option 1: Direct File Opening (Quick Start)

Simply open `index.html` in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

**Limitations:**
- Some features may not work due to CORS restrictions
- File protocol (`file://`) has security limitations

### Option 2: Local Web Server (Recommended)

#### Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

#### Using Node.js

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000

# Or use npx (no install needed)
npx http-server -p 8000

# Then open: http://localhost:8000
```

#### Using PHP

```bash
# Start PHP built-in server
php -S localhost:8000

# Then open: http://localhost:8000
```

#### Using VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Automatic browser refresh on file changes!

---

## Architecture Overview

### Technology Stack

```
┌─────────────────────────────────────┐
│         Frontend Only               │
├─────────────────────────────────────┤
│  HTML5   │  CSS3    │  JavaScript   │
│ Semantic │ Custom   │   Vanilla     │
│  Markup  │Properties│   ES6+        │
└─────────────────────────────────────┘
```

**No Dependencies:**
- No React, Vue, or Angular
- No jQuery or Lodash
- No CSS frameworks (Bootstrap, Tailwind, etc.)
- No build tools (Webpack, Vite, etc.)

**Why Vanilla?**
- Faster load times
- Easier handoff to client
- No breaking changes from dependencies
- Simpler debugging
- Client can easily modify without learning frameworks

### Design Patterns

- **Component-Based Architecture**: Modular JavaScript components
- **BEM CSS Methodology**: Block-Element-Modifier naming
- **Progressive Enhancement**: Core functionality without JavaScript
- **Mobile-First**: Base styles for mobile, enhanced for larger screens

---

## File Structure

```
Demo-Site/
│
├── index.html                      # Main HTML file (single-page app)
│
├── css/                            # Stylesheets (loaded in order)
│   ├── reset.css                   # Browser normalization
│   ├── variables.css               # CSS custom properties (design tokens)
│   ├── styles.css                  # Core layout and global styles
│   ├── components.css              # Component-specific styles
│   └── responsive.css              # Media queries and breakpoints
│
├── js/                             # JavaScript files
│   ├── config.js                   # Configuration constants
│   ├── utils.js                    # Helper utilities
│   ├── api.js                      # Mock data layer
│   ├── main.js                     # Site initialization
│   │
│   └── components/                 # UI Components
│       ├── navigation.js           # Header navigation
│       ├── modal.js                # Image lightbox
│       ├── carousel.js             # Testimonials slider
│       ├── gallery.js              # Photo gallery
│       ├── product-grid.js         # Product display/filtering
│       ├── contact-form.js         # Contact form
│       ├── notifications.js        # Toast notifications
│       └── cart.js                 # Shopping cart modal
│
├── assets/                         # Static assets
│   ├── icons/                      # SVG icons and sprite
│   │   ├── sprite.svg
│   │   └── favicon.svg
│   └── images/                     # Images
│       ├── products/               # Product photos
│       ├── gallery/                # Gallery images
│       └── og-image.png            # Social sharing image
│
├── data/                           # Mock data (JSON)
│   ├── products.json               # Product catalog
│   └── gallery.json                # Gallery metadata
│
├── docs/                           # Documentation
│   ├── README.md                   # Project overview
│   ├── DEVELOPMENT.md              # This file
│   ├── CONTRIBUTING.md             # Contribution guidelines
│   ├── CHANGELOG.md                # Version history
│   ├── PROJECT-STATUS.md           # Client-facing status
│   ├── CLIENT-DELIVERABLES.md      # Deliverables list
│   ├── CONTRACT-SCOPE.md           # Agreement details
│   ├── UPDATES.md                  # Client updates
│   └── DEMO-BLUEPRINT.md           # Original blueprint
│
├── .gitignore                      # Git exclusions
└── LICENSE                         # MIT License
```

### CSS Loading Order

CSS files are loaded in a specific order for proper cascade:

1. **reset.css** - Normalize browser defaults
2. **variables.css** - Define design tokens
3. **styles.css** - Core styles using variables
4. **components.css** - Component styles
5. **responsive.css** - Media queries last

### JavaScript Loading Order

Scripts are loaded at the end of `<body>` in this order:

1. **config.js** - Configuration first
2. **utils.js** - Utilities used by other files
3. **api.js** - Data layer
4. **components/*.js** - UI components (order doesn't matter)
5. **main.js** - Initialization last

---

## Development Workflow

### 1. Create Feature Branch

```bash
# Start from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Changes

Edit files in your preferred editor. The project auto-reloads if using a development server with live reload.

### 3. Test Changes

- Open in browser and verify functionality
- Test responsive design (resize browser)
- Check browser console for errors
- Test keyboard navigation
- Verify accessibility

### 4. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature description"
```

### 5. Push and Create PR

```bash
# Push to remote
git push -u origin feature/your-feature-name

# Create pull request on GitHub
```

---

## Code Organization

### CSS Organization

**Variables (variables.css):**
```css
:root {
  /* Colors */
  --color-primary-500: #008b8b;
  --color-secondary-500: #ffc107;

  /* Spacing */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-4: 1rem;     /* 16px */

  /* Typography */
  --font-heading: Georgia, 'Times New Roman', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Component Styles (components.css):**
```css
/* Use BEM naming */
.product-card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Use variables */
  padding: var(--space-4);
  background: var(--color-white);
}

.product-card__title {
  font-family: var(--font-heading);
  color: var(--color-gray-900);
}

.product-card--featured {
  border: 2px solid var(--color-primary-500);
}
```

### JavaScript Organization

**Component Pattern:**
```javascript
/**
 * Component Name
 * Description of what this component does
 */

// Private state and helpers
let privateState = [];

function _privateHelper() {
  // Internal use only
}

// Public API
function publicMethod() {
  // Exposed functionality
}

// Export public interface
const ComponentName = {
  publicMethod,
  init: () => { /* initialization */ }
};

// Make available globally if needed
window.ComponentName = ComponentName;
```

---

## Component System

### Creating a New Component

#### 1. JavaScript Component (js/components/example.js)

```javascript
/**
 * Example Component
 * Demonstrates component structure and patterns
 *
 * @requires utils.js
 */

(function() {
  'use strict';

  // Private state
  let isInitialized = false;

  // Private methods
  function _privateMethod() {
    console.log('Private helper method');
  }

  // Public methods
  function init() {
    if (isInitialized) return;

    console.log('Initializing Example component');
    setupEventListeners();

    isInitialized = true;
  }

  function setupEventListeners() {
    const element = utils.qs('[data-example]');
    if (!element) return;

    utils.on(element, 'click', handleClick);
  }

  function handleClick(event) {
    event.preventDefault();
    _privateMethod();
  }

  // Public API
  const Example = {
    init
  };

  // Expose globally
  window.Example = Example;

})();
```

#### 2. CSS Component (css/components.css)

```css
/* ================================
   Example Component
   ================================ */

.example {
  /* Layout */
  display: block;

  /* Spacing */
  padding: var(--space-4);
  margin-bottom: var(--space-4);

  /* Visual */
  background: var(--color-white);
  border-radius: var(--radius-md);

  /* Animation */
  transition: all var(--transition-base);
}

.example__title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-gray-900);
}

.example--featured {
  border: 2px solid var(--color-primary-500);
}
```

#### 3. HTML Usage (index.html)

```html
<!-- Include in HTML -->
<div class="example" data-example>
  <h3 class="example__title">Example Component</h3>
  <p class="example__description">Component description</p>
</div>

<!-- Include scripts -->
<script src="./js/components/example.js"></script>
```

#### 4. Initialize (js/main.js)

```javascript
// In main.js initialization
Example.init();
```

---

## Styling Guidelines

### Using CSS Custom Properties

```css
/* Define in variables.css */
:root {
  --button-bg: var(--color-primary-500);
  --button-hover: var(--color-primary-600);
}

/* Use in components.css */
.btn {
  background-color: var(--button-bg);
  transition: background-color var(--transition-base);
}

.btn:hover {
  background-color: var(--button-hover);
}
```

### Responsive Design

```css
/* Mobile-first approach */
.product-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: var(--space-4);
}

/* Tablet */
@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
  }
}
```

---

## JavaScript Patterns

### Event Handling

```javascript
// Use utility functions for consistency
const button = utils.qs('.btn');
utils.on(button, 'click', handleClick);

function handleClick(event) {
  event.preventDefault();
  // Handle click
}
```

### DOM Manipulation

```javascript
// Query elements
const element = utils.qs('.element'); // Single element
const elements = utils.qsa('.elements'); // Multiple elements

// Class manipulation
utils.addClass(element, 'active');
utils.removeClass(element, 'inactive');
utils.toggleClass(element, 'visible');

// Show/hide
utils.show(element);
utils.hide(element);
```

### Error Handling

```javascript
async function fetchData() {
  try {
    const data = await API.getProducts();
    renderProducts(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    Toast.error('Failed to load products');
  }
}
```

---

## Testing

### Manual Testing Checklist

**Functionality:**
- [ ] All links work
- [ ] Forms validate correctly
- [ ] Products filter properly
- [ ] Cart adds/removes items
- [ ] Modals open and close
- [ ] Gallery navigation works
- [ ] Contact form submits

**Responsive:**
- [ ] Test at 375px (iPhone)
- [ ] Test at 768px (iPad)
- [ ] Test at 1024px (laptop)
- [ ] Test at 1920px (desktop)

**Browser Testing:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

**Accessibility:**
- [ ] Tab through all interactive elements
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify ARIA labels

### Browser DevTools

**Console:**
- Check for JavaScript errors
- Monitor network requests
- View console.log output

**Elements:**
- Inspect HTML structure
- View applied CSS
- Test pseudo-states (:hover, :active)

**Lighthouse:**
- Run Lighthouse audit
- Target: 90+ on all metrics
- Address any issues found

---

## Performance

### Optimization Checklist

**Images:**
- [ ] Compress images (TinyPNG, ImageOptim)
- [ ] Use appropriate formats (JPEG for photos, SVG for icons)
- [ ] Lazy load images below the fold
- [ ] Include width/height to prevent layout shift

**CSS:**
- [ ] Remove unused styles
- [ ] Combine similar selectors
- [ ] Minimize specificity
- [ ] Use CSS custom properties for repeated values

**JavaScript:**
- [ ] Minimize DOM queries
- [ ] Debounce/throttle event listeners
- [ ] Use event delegation
- [ ] Load scripts at end of body

---

## Accessibility

### WCAG 2.1 Level AA Compliance

**Keyboard Navigation:**
```javascript
// Ensure all interactive elements are keyboard accessible
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
});
```

**ARIA Attributes:**
```html
<button
  aria-label="Add to cart"
  aria-pressed="false"
  aria-describedby="cart-help">
  Add to Cart
</button>
```

**Color Contrast:**
- Minimum ratio 4.5:1 for normal text
- Minimum ratio 3:1 for large text
- Use browser DevTools to check

---

## Deployment

### Static Hosting Options

#### Netlify
```bash
# Drag and drop folder to Netlify
# Or connect GitHub repo for auto-deploy
```

#### Vercel
```bash
npx vercel
# Follow prompts
```

#### GitHub Pages
```bash
# Settings → Pages → Select branch
# Site will be at: https://username.github.io/Demo-Site
```

### Traditional Web Hosting

1. **FTP Upload:**
   - Use FileZilla or similar
   - Upload all files to public_html or www folder
   - Set file permissions (644 for files, 755 for directories)

2. **cPanel:**
   - Zip project files
   - Upload via cPanel File Manager
   - Extract in public_html

---

## Troubleshooting

### Common Issues

**Issue: JavaScript not working**
- ✅ Check browser console for errors
- ✅ Verify script loading order
- ✅ Ensure scripts load after DOM elements

**Issue: Styles not applying**
- ✅ Check CSS loading order
- ✅ Verify CSS file paths
- ✅ Check for typos in class names
- ✅ Clear browser cache

**Issue: Images not loading**
- ✅ Verify image paths are correct
- ✅ Check file names match (case-sensitive)
- ✅ Ensure images exist in assets/images/

**Issue: CORS errors**
- ✅ Use local web server, not file://
- ✅ Check browser console for specific error
- ✅ Ensure server serves correct MIME types

---

## Additional Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## Questions?

If you encounter issues or have questions:
1. Check this documentation
2. Review CONTRIBUTING.md
3. Open an issue on GitHub
4. Contact the development team

---

*Happy coding! This development guide is maintained by digiSpace and updated as the project evolves.*
