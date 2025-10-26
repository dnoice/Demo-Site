# Danny's Dodgers Crafts - Demo Website Project Blueprint

**Project Date:** October 23, 2025  
**Developer:** Dennis Smaltz (digiSpace)  
**Client:** Danny Barcelo  
**Location:** Los Angeles, California  
**Project Type:** Web Development Demo / E-commerce Prototype  
**Status:** In Development

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Agreement Details](#agreement-details)
3. [Branding & Identity](#branding--identity)
4. [Directory Structure](#directory-structure)
5. [Naming Conventions](#naming-conventions)
6. [Technical Architecture](#technical-architecture)
7. [Content Strategy](#content-strategy)
8. [Development Phases](#development-phases)
9. [Deliverables Checklist](#deliverables-checklist)
10. [Next Steps & Future Enhancements](#next-steps--future-enhancements)

---

## Project Overview

### Purpose
Create a demonstration website that showcases the design and layout for Danny Barcelo's developing small business. The business focuses on handcrafted, Dodgers-themed custom merchandise including lamps, keychains, novelty items, and other artisan goods.

### Core Objectives
- **Visual Prototype:** Demonstrate professional design capabilities and layout structure
- **Product Showcase:** Display custom merchandise in an appealing, organized manner
- **Brand Establishment:** Create cohesive visual identity for veteran-owned small business
- **User Experience:** Provide intuitive navigation and product browsing
- **Mobile-First:** Ensure excellent experience across all devices
- **Accessibility:** Meet WCAG standards for inclusive design

### Scope Limitations
- **Front-End Only:** HTML, CSS, and JavaScript demonstration
- **No Backend:** No database, server-side processing, or actual e-commerce functionality
- **No Payment Integration:** Demonstration only - not production-ready for transactions
- **Mock Data:** All products, testimonials, and gallery items are sample/placeholder content
- **Consultation Included:** Guidance on hosting, domains, and next steps provided

### Target Audience
- Sports fans (specifically Dodgers enthusiasts)
- Gift shoppers looking for unique, handmade items
- Supporters of veteran-owned businesses
- Local Los Angeles community
- Online shoppers seeking artisan products

---

## Agreement Details

### Contract Summary
**Document:** Good Faith Web Development Agreement  
**Type:** Demonstration Project  
**Governed By:** California State Law

### Timeline
- **Project Start:** October 28, 2025
- **Target Completion:** November 18, 2025
- **Duration:** 21 days
- **Extensions:** Allowed for emergencies or unavailability by mutual agreement

### Compensation Structure
| Phase | Description | Hours | Rate | Subtotal |
|-------|-------------|-------|------|----------|
| Initial Consultation & Planning | Layout discussion, photo review, branding | 2 | $25/hr | $50 |
| Front-End Design & Layout | HTML/CSS/JS development | 6 | $30/hr | $180 |
| Photo & Content Integration | Embedding product images and descriptions | 2 | $25/hr | $50 |
| Revision Rounds (2 included) | Feedback adjustments | 2 | Included | $0 |
| Hosting/Deployment Guidance | Domain and hosting advice | 1 | $20/hr | $20 |
| **Good-Faith Adjustment** | Veteran-to-veteran discount | - | - | **-$50** |
| **Total Project Fee** | | | | **$300** |

**Payment Terms:**
- Initial Payment (Project Start): $100
- Final Payment (Upon Completion): $200
- Fee Range: $200 - $400 (preferred rate: $300)
- Adjustments available for financial hardship or barter agreements

### Ownership & Rights
- All materials remain property of Developer until full payment
- Upon completion of payment, Client receives perpetual license to use and modify Demo Site
- Two revision rounds included; additional rounds: $25/round

### Key Agreement Points
- **Liability:** Demo Site provided "as-is" for demonstration only
- **No Guarantees:** No warranties of uptime or revenue generation
- **Termination:** Either party may terminate with written notice; payment for completed work due
- **Mutual Respect:** Acknowledges both Developer's technical expertise and Client's creative craftsmanship
- **Veteran Recognition:** Both parties are U.S. Veterans, collaboration represents mutual respect and fair dealing

---

## Branding & Identity

### Business Identity
**Business Name:** Danny's Dodgers Crafts  
**Tagline:** "Handcrafted Merchandise with Heart"  
**Alternative Tagline:** "Building presence, precision, and possibility — one pixel at a time" (digiSpace)

### Brand Values
- **Craftsmanship:** Every piece is handmade with meticulous attention to detail
- **Authenticity:** Genuine passion for baseball and the Dodgers
- **Quality:** Premium materials and construction
- **Local Pride:** Made in Los Angeles
- **Veteran-Owned:** Service, integrity, and dedication
- **Uniqueness:** One-of-a-kind pieces, not mass-produced

### Visual Identity

#### Color Palette (Custom - NOT Dodgers Colors)
**Primary Color - Deep Teal:**
- Primary-500: `#008b8b` (Main brand color)
- Primary-600: `#007575` (Hover states)
- Primary-700: `#005f5f` (Dark accents)
- Represents: Craftsmanship, reliability, sophistication

**Secondary Color - Warm Amber/Gold:**
- Secondary-500: `#ffc107` (Accent color)
- Secondary-600: `#ffb300` (Hover states)
- Represents: Excellence, warmth, quality

**Neutral Colors:**
- Grays ranging from `#f9fafb` (lightest) to `#111827` (darkest)
- Used for text, backgrounds, and UI elements

**Note:** While the products themselves are Dodgers-themed (client's choice), the website's own branding uses a custom teal and amber palette to establish unique identity and avoid trademark concerns.

#### Typography
**Heading Font:** Georgia (serif)
- Conveys tradition, craftsmanship, quality
- Used for all h1-h6 elements
- Fallbacks: Times New Roman, serif

**Body Font:** System fonts stack
- -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif
- Ensures fast loading and native feel
- Used for all body text, navigation, buttons

**Monospace Font:** SF Mono, Monaco, Consolas (for any code/technical content)

#### Logo Concept
- Icon: SVG-based logo incorporating craft/tools motif
- Text: "Danny's Crafts" in clean, bold typography
- Usage: Appears in header, footer, and as favicon
- Format: Scalable SVG for all sizes

#### Design Language
- **Clean & Modern:** Contemporary web design with breathing room
- **Image-Forward:** Product photography takes center stage
- **Card-Based:** Products displayed in well-defined cards
- **Subtle Animations:** Smooth transitions, not distracting
- **Professional Polish:** Small details matter (shadows, spacing, hover states)

### Tone of Voice
- **Friendly but Professional:** Approachable yet credible
- **Passionate:** Genuine enthusiasm for the craft
- **Authentic:** Real stories, real craftsmanship
- **Personal:** Made by a real person (Danny), not a corporation
- **Veteran Pride:** Subtly incorporates military service background

---

## Directory Structure

```
danny-dodgers-crafts/
│
├── index.html                          # Main HTML file (single page)
│
├── css/                                # All stylesheets
│   ├── reset.css                       # CSS reset and normalize
│   ├── variables.css                   # Custom properties (colors, spacing, etc.)
│   ├── styles.css                      # Core website styles
│   ├── components.css                  # Component-specific styles
│   └── responsive.css                  # Media queries and responsive design
│
├── js/                                 # JavaScript files
│   ├── config.js                       # Site configuration and constants
│   ├── utils.js                        # Utility helper functions
│   ├── api.js                          # Data fetching and mock API
│   ├── main.js                         # General site functionality
│   └── components/                     # Component modules
│       ├── navigation.js               # Mobile menu and navigation
│       ├── modal.js                    # Modal dialogs and lightbox
│       ├── carousel.js                 # Testimonials slider
│       ├── gallery.js                  # Image gallery functionality
│       ├── product-grid.js             # Product display and filtering
│       └── contact-form.js             # Form validation and submission
│
├── assets/                             # Static assets
│   ├── images/                         # Image files
│   │   ├── products/                   # Product photography
│   │   │   ├── lamp-01.png
│   │   │   ├── keychain-01.png
│   │   │   └── ... (more products)
│   │   ├── gallery/                    # Gallery images
│   │   │   ├── item-01.png
│   │   │   └── ... (more gallery items)
│   │   ├── about/                      # About section images
│   │   │   └── workshop.png
│   │   └── og-image.png                # Open Graph/social sharing image
│   │
│   └── icons/                          # SVG icons
│       ├── sprite.svg                  # SVG sprite sheet (all icons)
│       └── favicon.svg                 # Favicon
│
├── data/                               # JSON data files (optional for demo)
│   ├── products.json                   # Product data
│   ├── gallery.json                    # Gallery items
│   └── testimonials.json               # Customer testimonials
│
└── docs/                               # Documentation
    ├── README.md                       # Project overview and setup
    ├── DEPLOYMENT.md                   # Hosting and deployment guide
    └── BLUEPRINT.md                    # This file - project roadmap
```

### Directory Rationale

**Root Level:**
- Single `index.html` keeps demo simple and portable
- Easy to view by opening file directly in browser

**CSS Organization:**
- Separated by concern (reset, variables, layout, components, responsive)
- Loads in specific order for proper cascade
- Easy to maintain and extend

**JavaScript Organization:**
- Core utilities and config separated from components
- Each component is self-contained module
- Components can be loaded independently

**Assets:**
- Organized by type and purpose
- Product images separate from gallery images
- SVG icons in sprite for efficiency

**Data:**
- JSON files for easy content management
- Allows switching from mock to real API later
- Currently simulated in api.js

---

## Naming Conventions

### File Naming
**General Rules:**
- Use lowercase with hyphens (kebab-case)
- Descriptive but concise names
- Group related files with prefixes

**Examples:**
- ✅ `product-grid.js`
- ✅ `contact-form.css`
- ✅ `lamp-01.png`
- ❌ `ProductGrid.js`
- ❌ `contact_form.css`
- ❌ `Lamp1.png`

### CSS Classes
**Pattern:** Block Element Modifier (BEM-inspired)

**Structure:**
```
.block                  // Component
.block__element         // Child element
.block--modifier        // Variation
```

**Examples:**
- `.product-card` (block)
- `.product-card__title` (element)
- `.product-card--featured` (modifier)
- `.btn` (block)
- `.btn--primary` (modifier)
- `.btn--large` (modifier)

**Utility Classes:**
- Single-purpose classes for common patterns
- Examples: `.sr-only`, `.hidden`, `.container`

### JavaScript
**Variables:** camelCase
```javascript
const productGrid = ...
let currentIndex = ...
```

**Constants:** UPPER_SNAKE_CASE (in CONFIG)
```javascript
const MAX_PRODUCTS = 12;
```

**Functions:** camelCase, verb-first
```javascript
function getProducts() { }
function handleClick() { }
function validateForm() { }
```

**Components/Objects:** PascalCase
```javascript
const ProductGrid = { }
const Modal = { }
```

**Private/Internal:** Prefix with underscore (convention)
```javascript
function _privateHelper() { }
```

### HTML IDs and Data Attributes
**IDs:** Unique, descriptive, kebab-case
```html
id="contact-form"
id="product-grid"
id="back-to-top"
```

**Data Attributes:** Descriptive purpose
```html
data-product-id="123"
data-filter="lamps"
data-modal-close
data-gallery-item
```

### Image Files
**Pattern:** `category-descriptor-number.extension`

**Examples:**
- `lamp-01.png`
- `keychain-baseball-02.png`
- `gallery-workshop-01.png`
- `about-workshop.png`

**Requirements:**
- Descriptive but not too long
- Sequential numbering when in series
- Consistent across similar items

---

## Technical Architecture

### Technology Stack
**Front-End Only Demo:**
- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (ES6+, no frameworks)

**Why No Framework:**
- Simpler to hand off and modify
- No build process required
- Faster load times
- Easy to understand and extend
- Client can easily migrate to framework later if needed

### Browser Support
**Target Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Progressive Enhancement:**
- Core functionality works without JavaScript
- Fallbacks for older browsers
- Graceful degradation

### Performance Targets
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)

**Optimization Strategies:**
- Lazy loading for images
- SVG icons (no icon fonts)
- Minimal JavaScript bundle
- No external dependencies
- Responsive images
- CSS/JS loaded in optimal order

### Accessibility Standards
**Target:** WCAG 2.1 Level AA

**Key Features:**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Skip links
- Alt text for all images
- Color contrast compliance
- Screen reader announcements
- No motion for users who prefer reduced motion

### Mobile-First Approach
**Breakpoints:**
- Mobile: < 640px (base styles)
- Tablet: 640px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

**Touch Optimization:**
- Larger touch targets (44x44px minimum)
- Swipe gestures for carousel/gallery
- No hover-dependent functionality
- Touch-friendly spacing

### Data Architecture
**Current:** Mock data in JavaScript
**Future Path:** RESTful API

**Data Sources:**
1. Products (12 sample items across 4 categories)
2. Gallery (8 sample images)
3. Testimonials (5 sample reviews)

**Storage:**
- LocalStorage for cart (demo purposes)
- No persistent backend
- Data resets on page reload

---

## Content Strategy

### Page Sections

#### 1. Header / Navigation
**Content:**
- Logo and business name
- Main navigation (Home, Products, About, Gallery, Contact)
- Shopping cart icon with item count
- Mobile hamburger menu

**Purpose:** Primary navigation, brand recognition

#### 2. Hero Section
**Content:**
- Main headline: "Handcrafted Dodgers Merchandise with Heart"
- Subheadline: Emphasizes quality and passion
- Call-to-action buttons (Shop Collection, Learn More)
- Three stat cards (100% Handcrafted, Veteran Owned, LA Made)

**Purpose:** Immediate impact, clear value proposition, drive action

#### 3. Featured Banner
**Content:**
- Scrolling announcements (New arrivals, Custom orders, Free pickup)

**Purpose:** Highlight key information and promotions

#### 4. Products Section
**Content:**
- Section heading and description
- Category filters (All, Lamps, Keychains, Novelty, Other)
- Product grid (12 items initially)
- Each card: Image, category, title, description, price, "Add to Cart"
- "Load More" button

**Purpose:** Product discovery and browsing

#### 5. About Section
**Content:**
- Story of craftsmanship and dedication
- Veteran-owned business emphasis
- Feature highlights (Premium Materials, Custom Orders, Local Pickup)
- Workshop image

**Purpose:** Build trust, establish credibility, tell brand story

#### 6. Gallery Section
**Content:**
- Grid of product photos and process shots
- Lightbox for enlarged viewing
- Navigation between images

**Purpose:** Visual proof of quality, behind-the-scenes look

#### 7. Testimonials Section
**Content:**
- Customer reviews (5-star ratings)
- Carousel with navigation
- Customer names and locations

**Purpose:** Social proof, build confidence

#### 8. Contact Section
**Content:**
- Contact form (Name, Email, Subject, Message)
- Contact details (Location, Email, Response time)
- Social media links

**Purpose:** Enable communication, custom order inquiries

#### 9. Footer
**Content:**
- Brand recap and mission
- Quick links navigation
- Information links (Shipping, Returns, FAQ, Care Guide)
- Social media connections
- Copyright and legal links
- Developer credit (digiSpace)

**Purpose:** Secondary navigation, additional information, brand reinforcement

### Product Categories

#### Lamps (Premium Items)
- Table lamps with team designs
- Night lights
- Desk lamps
- Price range: $32 - $65

#### Keychains (Entry-Level Items)
- Stadium miniatures
- Baseball bat shapes
- Team cap replicas
- Pennant designs
- Price range: $8 - $15

#### Novelty Items (Mid-Range)
- Coaster sets
- Bottle openers
- Vintage clocks
- Scoreboards
- Price range: $18 - $48

#### Other (Specialty)
- Card holders
- Blueprint art
- Display cases
- Custom orders
- Price range: $42 - $55

### Content Tone Examples

**Product Descriptions:**
- "Handcrafted table lamp featuring authentic Dodgers design elements. Perfect for the home or office."
- "Detailed miniature stadium keychain made from premium materials. A perfect gift for any fan."

**About Section:**
- "Based in Los Angeles, each item is individually handcrafted with meticulous attention to detail."
- "As a veteran-owned small business, quality and integrity are at the heart of everything we create."

**Calls to Action:**
- "Shop Collection"
- "Add to Cart"
- "Learn More"
- "View Gallery"
- "Send Message"

---

## Development Phases

### Phase 1: Foundation (Days 1-3)
**Tasks:**
- Project setup and file structure
- HTML structure and semantic markup
- CSS reset and variables
- Typography system
- Color palette implementation
- Basic layout and grid system

**Deliverables:**
- Complete HTML structure
- CSS foundation files
- Responsive container system

**Status Check:**
- Does page load correctly?
- Is structure semantic and accessible?
- Are variables properly organized?

### Phase 2: Component Development (Days 4-9)
**Tasks:**
- Header and navigation (mobile menu)
- Hero section with stats
- Product cards and grid
- Gallery with lightbox
- Testimonials carousel
- Contact form
- Footer

**Deliverables:**
- All visual components built
- Interactive elements functioning
- Responsive across breakpoints

**Status Check:**
- Do all components render correctly?
- Is navigation working on mobile?
- Are interactions smooth and intuitive?

### Phase 3: JavaScript Functionality (Days 10-14)
**Tasks:**
- Navigation smooth scrolling
- Product filtering
- Modal/lightbox functionality
- Carousel auto-play and navigation
- Form validation
- Cart functionality (demo)
- Gallery interactions

**Deliverables:**
- All interactive features working
- Form submissions simulated
- Cart updates in real-time

**Status Check:**
- Do all filters work correctly?
- Is form validation thorough?
- Are animations smooth?

### Phase 4: Content Integration (Days 15-17)
**Tasks:**
- Product photography integration
- Product descriptions and pricing
- Gallery images
- Testimonial content
- About section text
- Contact information

**Deliverables:**
- All content populated
- Images optimized
- Text proofread

**Status Check:**
- Are all images loading?
- Is text clear and error-free?
- Do products look appealing?

### Phase 5: Polish & Testing (Days 18-20)
**Tasks:**
- Cross-browser testing
- Mobile device testing
- Accessibility audit
- Performance optimization
- Bug fixes
- Code cleanup and documentation

**Deliverables:**
- Fully tested site
- Bug-free experience
- Accessibility compliant
- Performance optimized

**Status Check:**
- Does site work in all target browsers?
- Are there any console errors?
- Does it pass accessibility tests?

### Phase 6: Delivery & Handoff (Day 21)
**Tasks:**
- Final client review
- Implement any last-minute feedback
- Prepare documentation
- Hosting/deployment guidance
- File delivery
- Final walkthrough

**Deliverables:**
- Complete website files
- Documentation package
- Deployment guide
- Training on updates

**Status Check:**
- Is client satisfied with result?
- Are all deliverables provided?
- Does client understand next steps?

---

## Deliverables Checklist

### Core Files
- [ ] index.html (fully functional single-page site)
- [ ] All CSS files (reset, variables, styles, components, responsive)
- [ ] All JavaScript files (core and components)
- [ ] Complete assets folder (images, icons, SVG sprite)
- [ ] Mock data files (products.json, gallery.json, testimonials.json)

### Documentation
- [ ] README.md (project overview and setup instructions)
- [ ] DEPLOYMENT.md (hosting and deployment guide)
- [ ] BLUEPRINT.md (this document - project roadmap)
- [ ] Code comments and inline documentation

### Testing & Validation
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Performance benchmarks met (Lighthouse 90+)
- [ ] All links functional
- [ ] All forms validated
- [ ] No JavaScript errors in console

### Consultation Deliverables
- [ ] Hosting recommendations provided
- [ ] Domain registration guidance
- [ ] Next steps for full e-commerce buildout
- [ ] Content management recommendations
- [ ] SEO basic guidelines
- [ ] Analytics setup suggestions

### Client Handoff
- [ ] Live demo walkthrough completed
- [ ] Client training on basic updates
- [ ] Questions answered
- [ ] Future enhancement discussion
- [ ] Files transferred to client
- [ ] Final payment received

---

## Next Steps & Future Enhancements

### Immediate Next Steps (Post-Demo)
1. **Domain Registration**
   - Recommend domains like: dannydodgerscrafts.com, dannyscraftsla.com
   - Register through: Namecheap, Google Domains, or GoDaddy

2. **Web Hosting Selection**
   - Shared hosting options: Bluehost, SiteGround, HostGator
   - Static hosting: Netlify, Vercel, GitHub Pages (free options)
   - Budget: $5-15/month for shared hosting, free for static

3. **Product Photography**
   - Professional photos of actual products
   - Consistent lighting and backgrounds
   - Multiple angles for each product
   - High resolution (minimum 1200px width)

4. **Content Development**
   - Real product descriptions
   - Authentic customer testimonials
   - Business story and founder bio
   - FAQ content
   - Shipping and return policies

### Phase 2: Full E-Commerce (Future Project)
**Backend Development:**
- Database for products and orders
- User authentication and accounts
- Shopping cart with persistence
- Order management system
- Inventory tracking

**Payment Integration:**
- Payment gateway (Stripe, PayPal, Square)
- SSL certificate for security
- Tax calculation
- Shipping rate calculation

**Additional Features:**
- Product search functionality
- Customer reviews and ratings
- Wishlist functionality
- Email notifications (order confirmations)
- Admin dashboard for managing products
- Order history for customers

**Estimated Investment:**
- Development: $2,000 - $5,000
- Payment processing: 2.9% + $0.30 per transaction
- SSL certificate: $50-100/year (or free with hosting)
- Additional tools: $50-200/month

### Phase 3: Marketing & Growth
**Digital Marketing:**
- Social media presence (Instagram, Facebook)
- Google My Business listing
- Email marketing campaign
- Local SEO optimization
- Content marketing (blog about craftsmanship)

**Product Line Expansion:**
- Seasonal offerings
- Custom order system
- Limited edition releases
- Gift bundles and packages
- Wholesale opportunities (local shops)

**Customer Experience:**
- Loyalty program
- Referral rewards
- Newsletter with new products
- Behind-the-scenes content
- Customer spotlights

### Technology Evolution Path
**Short Term (6-12 months):**
- Migrate to CMS (WordPress with WooCommerce, or Shopify)
- Implement basic analytics (Google Analytics)
- Set up email marketing (Mailchimp)
- Enable online payments

**Medium Term (1-2 years):**
- Mobile app consideration
- Advanced inventory management
- Customer relationship management (CRM)
- Marketing automation
- Multi-channel selling (Etsy, Amazon Handmade)

**Long Term (2+ years):**
- Custom platform development
- Wholesale portal
- API for third-party integrations
- International shipping
- Franchise/licensing opportunities

### Maintenance Recommendations
**Regular Updates:**
- New product additions (monthly)
- Seasonal content updates (quarterly)
- Blog posts or news (weekly/bi-weekly)
- Gallery refreshes (monthly)
- Security updates (as needed)

**Monitoring:**
- Website uptime monitoring
- Analytics review (monthly)
- Customer feedback collection
- Performance audits (quarterly)
- Competitor analysis (quarterly)

---

## Project Principles

### Good Faith Collaboration
This project embodies the spirit of veteran-to-veteran collaboration, mutual respect, and fair dealing. Both parties bring unique expertise:
- **Dennis (Developer):** Technical skill, design sense, web development
- **Danny (Client):** Craftsmanship, artistic vision, entrepreneurial drive

### Quality Over Speed
While timeline is important, quality should never be sacrificed. The demo must:
- Represent both parties professionally
- Showcase potential of the business
- Function flawlessly
- Look polished and complete

### Future-Proof Foundation
Though this is a demo, it's built with future expansion in mind:
- Clean, maintainable code
- Scalable architecture
- Documented decisions
- Easy to extend or migrate

### Accessibility First
The site must be usable by everyone:
- Screen reader compatible
- Keyboard navigable
- Color contrast compliant
- Clear, understandable content

---

## Success Criteria

### Technical Success
- ✅ Site loads in under 3 seconds
- ✅ Works on all modern browsers
- ✅ Fully responsive on all device sizes
- ✅ No JavaScript errors
- ✅ Passes accessibility audit
- ✅ Lighthouse score 90+ in all categories

### Client Success
- ✅ Client is proud to show it
- ✅ Accurately represents the brand
- ✅ Products look appealing and professional
- ✅ Easy for client to explain to potential customers
- ✅ Provides clear path forward for full buildout

### User Success
- ✅ Users can easily browse products
- ✅ Users can contact business effortlessly
- ✅ Users understand the value proposition
- ✅ Users trust the business
- ✅ Users want to purchase products

---

## Contact & Support

### Project Team
**Developer:** Dennis Smaltz  
**Company:** digiSpace  
**Role:** Web Development Maestro  
**Location:** Los Angeles, CA

**Client:** Danny Barcelo  
**Business:** Danny's Dodgers Crafts  
**Role:** Founder & Craftsman  
**Location:** Los Angeles, CA

### Communication Channels
- In-person meetings (same building - Apt 111 & 102)
- Email for formal communications
- Phone for urgent matters
- Shared document review for feedback

### Revision Process
1. Client reviews demo site
2. Provides written feedback via email or document
3. Developer prioritizes changes
4. Implements revisions
5. Client reviews again
6. Repeat if needed (2 rounds included, additional $25/round)

---

## Appendix

### Glossary of Terms
- **Demo Site:** Prototype website for demonstration purposes, not fully functional
- **Front-End:** Client-side code (HTML, CSS, JavaScript) that runs in browser
- **Backend:** Server-side code and database (not included in this project)
- **Responsive:** Design adapts to different screen sizes
- **SEO:** Search Engine Optimization - making site discoverable on Google
- **API:** Application Programming Interface - way for software to communicate
- **SVG:** Scalable Vector Graphics - resolution-independent image format
- **CMS:** Content Management System - software to manage website content
- **SSL:** Secure Sockets Layer - encryption for secure connections
- **Lighthouse:** Google's tool for measuring web performance and quality

### Resources for Client
**Learning Web Basics:**
- MDN Web Docs (developer.mozilla.org)
- W3Schools (w3schools.com)
- FreeCodeCamp (freecodecamp.org)

**Hosting Research:**
- Namecheap (domain and hosting)
- Netlify (free static hosting)
- Bluehost (affordable shared hosting)

**E-Commerce Platforms:**
- Shopify (easiest for non-technical)
- WooCommerce (WordPress plugin)
- Square Online (integrated with payment processing)
- Etsy (marketplace option)

**Marketing Resources:**
- Google My Business (local SEO)
- Canva (design graphics)
- Mailchimp (email marketing)
- Hootsuite (social media management)

---

## Document History

**Version 1.0** - October 24, 2025  
- Initial project blueprint created
- Comprehensive documentation of scope, structure, and strategy
- Serves as source of truth for development phase

**Prepared By:** Dennis Smaltz (digiSpace)  
**For:** Danny Barcelo (Danny's Dodgers Crafts)

---

*This blueprint represents the collaborative vision between developer and client, honoring both technical excellence and artisan craftsmanship. Built with pride in Los Angeles, California.*
