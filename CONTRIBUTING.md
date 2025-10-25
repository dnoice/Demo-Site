# Contributing to Danny's Dodgers Crafts Demo Site

Thank you for your interest in contributing to this project! This document provides guidelines and standards for contributing to the codebase.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing](#testing)
8. [Documentation](#documentation)

---

## Code of Conduct

### Our Standards

- **Respectful Communication**: Be professional and courteous
- **Constructive Feedback**: Provide helpful, actionable feedback
- **Collaboration**: Work together toward common goals
- **Quality Focus**: Prioritize code quality and user experience
- **Veteran Values**: Honor the veteran-owned nature of this project

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor or IDE (VS Code, Sublime, WebStorm, etc.)
- Git for version control
- Basic knowledge of HTML, CSS, and JavaScript

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dnoice/Demo-Site.git
   cd Demo-Site
   ```

2. **Open the Project**
   - Simply open `index.html` in your browser
   - Or use a local development server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```

3. **Access the Site**
   - Navigate to `http://localhost:8000` in your browser
   - Or open `index.html` directly

### Project Structure

```
Demo-Site/
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── reset.css          # Browser normalization
│   ├── variables.css      # Design tokens
│   ├── styles.css         # Core styles
│   ├── components.css     # Component styles
│   └── responsive.css     # Media queries
├── js/                    # JavaScript
│   ├── config.js          # Configuration
│   ├── utils.js           # Utilities
│   ├── api.js            # Data layer
│   ├── main.js           # Main initialization
│   └── components/       # UI components
└── assets/               # Images and icons
```

---

## Development Workflow

### Branching Strategy

We use a feature branch workflow:

- **`main`** - Production-ready code, stable releases
- **`claude/*`** - Development branches (e.g., `claude/v2-enhancements-011CUSuFEDVQ3ee7VeXG3F3j`)
- **`feature/*`** - New features (e.g., `feature/product-search`)
- **`fix/*`** - Bug fixes (e.g., `fix/cart-count-bug`)
- **`refactor/*`** - Code refactoring (e.g., `refactor/css-architecture`)

### Creating a Branch

```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-bug-fix
```

### Making Changes

1. **Create a feature branch** from `main`
2. **Make your changes** following coding standards
3. **Test thoroughly** in all target browsers
4. **Commit your changes** with clear messages
5. **Push to remote** and create pull request
6. **Respond to feedback** from code review

---

## Coding Standards

### HTML

**Semantic Markup**
```html
<!-- Good: Semantic and accessible -->
<article class="product-card">
  <h3 class="product-card__title">Product Name</h3>
  <p class="product-card__description">Description here</p>
</article>

<!-- Avoid: Non-semantic divs -->
<div class="product-card">
  <div class="title">Product Name</div>
  <div class="description">Description here</div>
</div>
```

**Standards:**
- Use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, etc.)
- Include proper ARIA attributes for accessibility
- Use lowercase for tags and attributes
- Double quotes for attribute values
- Self-closing tags for void elements (`<img />`, `<br />`)
- Indent with 2 spaces

### CSS

**BEM Naming Convention**
```css
/* Block */
.product-card { }

/* Element */
.product-card__title { }
.product-card__image { }

/* Modifier */
.product-card--featured { }
.product-card--sold-out { }
```

**Standards:**
- Use CSS custom properties for design tokens
- Mobile-first media queries
- BEM naming convention for classes
- Avoid `!important` unless absolutely necessary
- Group related properties together
- Comment complex selectors
- Indent with 2 spaces

**Example:**
```css
.product-card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Spacing */
  padding: var(--space-4);
  margin-bottom: var(--space-4);

  /* Visual */
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);

  /* Animation */
  transition: transform var(--transition-base);
}
```

### JavaScript

**Naming Conventions**
```javascript
// Variables and functions: camelCase
const productGrid = document.querySelector('.product-grid');
function handleClick(event) { }

// Constants: UPPER_SNAKE_CASE
const MAX_PRODUCTS = 12;
const API_ENDPOINT = '/api/products';

// Classes/Components: PascalCase
const ProductGrid = { };
class ShoppingCart { }

// Private/internal: Prefix with underscore
function _privateHelper() { }
```

**Standards:**
- Use ES6+ features (const/let, arrow functions, template literals)
- Avoid `var`, use `const` by default, `let` when reassignment needed
- Use descriptive variable names
- Comment complex logic
- Handle errors gracefully
- Keep functions small and focused
- Indent with 2 spaces

**Example:**
```javascript
/**
 * Filters products by category
 * @param {string} category - The category to filter by
 * @returns {Array} Filtered product array
 */
function filterProductsByCategory(category) {
  if (!category || category === 'all') {
    return products;
  }

  return products.filter(product =>
    product.category.toLowerCase() === category.toLowerCase()
  );
}
```

### File Naming

- **kebab-case** for all files: `product-grid.js`, `contact-form.css`
- **Descriptive names**: `shopping-cart.js` not `sc.js`
- **Extensions**: `.html`, `.css`, `.js`, `.json`, `.md`

---

## Commit Guidelines

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

**Good commit messages:**
```
feat(cart): add persistent cart storage using localStorage

Implemented localStorage to persist cart items between sessions.
Cart now saves automatically on every update and restores on page load.

Closes #42
```

```
fix(navigation): resolve mobile menu z-index issue

Mobile menu was appearing behind modal overlay. Increased z-index
from 100 to 1100 to ensure proper layering.

Fixes #38
```

```
refactor(css): reorganize component styles by feature

Grouped related component styles together for better maintainability.
No visual or functional changes.
```

**Avoid:**
```
fixed stuff
update
changes
wip
```

### Commit Best Practices

- **One logical change per commit**: Don't mix unrelated changes
- **Write clear subjects**: 50 characters or less
- **Use imperative mood**: "Add feature" not "Added feature"
- **Explain why, not what**: The diff shows what changed, explain why
- **Reference issues**: Include issue numbers when applicable

---

## Pull Request Process

### Before Submitting

1. **Test your changes** in all target browsers
2. **Run through accessibility checklist**
3. **Update documentation** if needed
4. **Update CHANGELOG.md** with your changes
5. **Ensure no console errors**
6. **Check responsive design** on mobile/tablet/desktop

### Creating a Pull Request

1. **Push your branch** to remote repository
   ```bash
   git push -u origin feature/your-feature-name
   ```

2. **Open PR** on GitHub with:
   - Clear, descriptive title
   - Detailed description of changes
   - Screenshots/GIFs for visual changes
   - Link to related issues
   - Checklist of testing completed

3. **PR Template:**
   ```markdown
   ## Description
   Brief description of what this PR does

   ## Changes
   - Added X feature
   - Fixed Y bug
   - Refactored Z component

   ## Testing
   - [ ] Tested in Chrome
   - [ ] Tested in Firefox
   - [ ] Tested in Safari
   - [ ] Tested on mobile devices
   - [ ] Accessibility checked
   - [ ] No console errors

   ## Screenshots
   (If applicable)

   ## Related Issues
   Closes #XX
   ```

### Review Process

- PRs require at least one approval before merging
- Address all review comments
- Keep PRs focused and reasonably sized
- Respond to feedback promptly
- Update PR based on feedback

### Merging

- Use **squash and merge** for feature branches
- Use **merge commit** for release branches
- Delete branch after merging

---

## Testing

### Browser Testing

Test in all supported browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Device Testing

Test responsive design on:
- Mobile (320px - 639px)
- Tablet (640px - 1023px)
- Desktop (1024px - 1279px)
- Large Desktop (1280px+)

### Accessibility Testing

- **Keyboard Navigation**: Tab through all interactive elements
- **Screen Reader**: Test with VoiceOver (Mac) or NVDA (Windows)
- **Color Contrast**: Use browser DevTools to check contrast ratios
- **Focus Indicators**: Ensure visible focus states
- **ARIA Attributes**: Validate proper usage

### Manual Testing Checklist

- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Images load and have alt text
- [ ] No JavaScript errors in console
- [ ] Layout doesn't break at any viewport size
- [ ] Animations are smooth (60fps)
- [ ] Touch targets are 44x44px minimum on mobile
- [ ] Content is readable on all screen sizes

---

## Documentation

### Code Comments

**When to Comment:**
- Complex algorithms or logic
- Non-obvious decisions
- Workarounds or hacks
- Public API functions

**When NOT to Comment:**
- Obvious code (let code be self-documenting)
- Redundant information

**Examples:**

```javascript
// Good: Explains WHY
// Use setTimeout to allow DOM to update before measuring
setTimeout(() => measureHeight(), 0);

// Bad: Explains WHAT (obvious from code)
// Set the background color to red
element.style.backgroundColor = 'red';
```

### File Headers

Include file purpose at the top of JavaScript files:

```javascript
/**
 * Product Grid Component
 *
 * Handles product display, filtering, and interactions.
 * Integrates with Cart and Toast components for user feedback.
 *
 * @requires utils.js
 * @requires api.js
 * @requires cart.js
 * @requires notifications.js
 */
```

### Updating Documentation

When making changes that affect:
- **User-facing features**: Update README.md and CLIENT-DELIVERABLES.md
- **API changes**: Update inline JSDoc comments
- **Architecture**: Update DEVELOPMENT.md
- **Version releases**: Update CHANGELOG.md

---

## Questions or Issues?

If you have questions or run into issues:

1. **Check existing documentation** (README, DEVELOPMENT, etc.)
2. **Search existing issues** on GitHub
3. **Open a new issue** with detailed information
4. **Contact the development team** if urgent

---

## Recognition

Contributors will be recognized in:
- Project documentation
- Commit history
- Release notes (for significant contributions)

---

## Thank You!

Your contributions help make this project better. We appreciate your time and effort!

---

*This contributing guide is maintained by the digiSpace development team and may be updated as the project evolves.*
