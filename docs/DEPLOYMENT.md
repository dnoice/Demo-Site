# Deployment Guide

Comprehensive guide for hosting and deploying Danny's Dodgers Crafts website.

## Table of Contents
1. [Quick Start Options](#quick-start-options)
2. [Domain Registration](#domain-registration)
3. [Hosting Options](#hosting-options)
4. [Deployment Steps](#deployment-steps)
5. [SSL Certificate](#ssl-certificate)
6. [Performance Optimization](#performance-optimization)
7. [Maintenance](#maintenance)
8. [Future Upgrades](#future-upgrades)

## Quick Start Options

### Option 1: Free Static Hosting (Recommended for Demo)

**Best for:** Testing, portfolio, demo purposes

**Platforms:**
- **Netlify** (Easiest, most features)
- **Vercel** (Great performance)
- **GitHub Pages** (Good for public repos)
- **Cloudflare Pages** (Fast global CDN)

**Pros:**
- ✅ Free
- ✅ Automatic HTTPS
- ✅ Fast deployment
- ✅ Custom domain support
- ✅ No maintenance

**Cons:**
- ❌ Static files only (no backend)
- ❌ Limited for e-commerce expansion

### Option 2: Shared Hosting (Recommended for Production)

**Best for:** Growing business, eventual backend addition

**Providers:**
- **Bluehost** ($3-8/month)
- **SiteGround** ($4-10/month)
- **HostGator** ($3-6/month)
- **Namecheap** ($2-5/month)

**Pros:**
- ✅ Affordable
- ✅ Easy to manage
- ✅ Can add backend later
- ✅ Email included
- ✅ Support available

**Cons:**
- ❌ Monthly cost
- ❌ Shared resources
- ❌ Some technical knowledge needed

### Option 3: E-commerce Platform (Future Consideration)

**Best for:** Full online store

**Platforms:**
- **Shopify** ($29-299/month)
- **WooCommerce** (Free + hosting)
- **Square Online** ($12-72/month)
- **BigCommerce** ($29-299/month)

---

## Domain Registration

### Choosing a Domain Name

**Suggested domains:**
- `dannydodgerscrafts.com` (Primary choice)
- `dannyscraftsla.com` (Alternative)
- `dannyshandicrafts.com` (Alternative)
- `barcelocrafts.com` (Alternative)

### Domain Registrars

**Recommended:**
1. **Namecheap** - $8-12/year, excellent support
2. **Google Domains** - $12/year, clean interface
3. **GoDaddy** - $12-20/year, well-known

**Domain Checklist:**
- ✅ Check availability at domain registrar
- ✅ Register for at least 2 years
- ✅ Enable privacy protection (free or $2-5/year)
- ✅ Set up auto-renewal
- ✅ Keep registration email secure

### Domain Setup
1. Register domain
2. Wait for DNS propagation (up to 48 hours)
3. Point domain to hosting (see hosting-specific instructions below)

---

## Hosting Options

### Option A: Netlify (Free Static Hosting)

**Step-by-step:**

1. **Create Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with email or GitHub

2. **Deploy Site**
   - Drag and drop entire site folder to Netlify
   - Or connect GitHub repository

3. **Custom Domain**
   - Go to Domain settings
   - Add custom domain
   - Follow DNS configuration instructions

4. **HTTPS**
   - Automatically enabled (Let's Encrypt)

**Cost:** Free
**Time:** 10-15 minutes

### Option B: Bluehost (Shared Hosting)

**Step-by-step:**

1. **Purchase Hosting**
   - Go to [bluehost.com](https://bluehost.com)
   - Choose "Basic" plan ($3-5/month)
   - Add domain (free for first year)

2. **Access cPanel**
   - Login to Bluehost account
   - Click "cPanel" or "Advanced"

3. **Upload Files**
   - Open "File Manager"
   - Navigate to `public_html`
   - Upload all website files
   - Ensure `index.html` is in root

4. **Test Site**
   - Visit your domain
   - Check all pages and features

**Cost:** $36-60/year
**Time:** 30-60 minutes

### Option C: GitHub Pages (Free)

**Step-by-step:**

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages"
   - Select branch: `main`
   - Select folder: `/root` or `/docs`
   - Save

3. **Custom Domain** (optional)
   - Add `CNAME` file with your domain
   - Configure DNS at domain registrar
   - Enable HTTPS in Pages settings

**Cost:** Free
**Time:** 15-20 minutes

---

## Deployment Steps

### Pre-Deployment Checklist

- ✅ Test site locally in multiple browsers
- ✅ Replace placeholder images with real photos
- ✅ Update contact information
- ✅ Test all forms
- ✅ Check all links
- ✅ Optimize images (compress, resize)
- ✅ Test mobile responsiveness
- ✅ Run accessibility audit
- ✅ Run performance audit (Lighthouse)

### Image Optimization

**Before uploading:**

1. **Resize Images**
   - Products: 800x600px
   - Gallery: 1200x1200px
   - About: 1200x800px

2. **Compress Images**
   - Use [TinyPNG.com](https://tinypng.com)
   - Or [Squoosh.app](https://squoosh.app)
   - Target: <200KB per image

3. **Format**
   - Use JPG for photos
   - Use PNG for graphics with transparency
   - Use SVG for logos and icons

### File Upload Methods

**Method 1: FTP (Shared Hosting)**
1. Download FileZilla (free FTP client)
2. Connect with hosting credentials
3. Upload files to `public_html` or `www`

**Method 2: cPanel File Manager**
1. Login to cPanel
2. Open File Manager
3. Navigate to public directory
4. Upload and extract files

**Method 3: Git Deploy (Netlify/Vercel)**
1. Push to GitHub
2. Platform auto-deploys on commit
3. Instant updates

---

## SSL Certificate

### Why You Need HTTPS
- ✅ Security (encrypts data)
- ✅ Trust (visitors feel safe)
- ✅ SEO (Google ranking boost)
- ✅ Required for payments

### Getting SSL

**Option 1: Free SSL (Let's Encrypt)**
- Available on most modern hosts
- Auto-renews every 90 days
- Enable in hosting control panel

**Option 2: Paid SSL**
- $50-150/year
- Extended validation
- Insurance coverage
- Only needed for high-volume commerce

**Setup:**
1. Login to hosting control panel
2. Find "SSL/TLS" section
3. Click "Install Free SSL" or similar
4. Wait 5-10 minutes for activation
5. Force HTTPS redirect (add in .htaccess)

---

## Performance Optimization

### After Deployment

1. **Enable Gzip Compression**
   - Most hosts enable by default
   - Check in cPanel or .htaccess

2. **Enable Browser Caching**
   Add to `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Setup CDN (Optional)**
   - Cloudflare (free tier available)
   - Speeds up global access
   - Additional security

4. **Test Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - Target: 90+ score

---

## Maintenance

### Regular Tasks

**Weekly:**
- ✅ Check site loads correctly
- ✅ Test contact form
- ✅ Monitor email notifications

**Monthly:**
- ✅ Update product listings
- ✅ Add new gallery images
- ✅ Check all links work
- ✅ Review analytics
- ✅ Backup website files

**Quarterly:**
- ✅ Security updates
- ✅ Content refresh
- ✅ Performance audit
- ✅ Accessibility check

### Backup Strategy

**What to Backup:**
- All website files
- Product images
- Customer data (if collected)

**How to Backup:**
1. **Automatic** (Hosting provider)
   - Most hosts offer daily backups
   - Check backup settings

2. **Manual** (Monthly)
   - Download all files via FTP
   - Store on external drive
   - Keep 3 most recent backups

3. **Cloud Backup** (Recommended)
   - Google Drive
   - Dropbox
   - iCloud

---

## Future Upgrades

### Adding E-commerce

**Option 1: Shopify Migration**
1. Export product data
2. Import to Shopify
3. Customize theme to match design
4. Connect payment processor
5. Redirect domain to Shopify

**Cost:** $29/month + 2.9% + $0.30 per transaction

**Option 2: WooCommerce (WordPress)**
1. Install WordPress on hosting
2. Install WooCommerce plugin
3. Rebuild design as WordPress theme
4. Add products
5. Configure payment gateways

**Cost:** Free (+ hosting + optional plugins)

**Option 3: Custom Backend**
1. Hire developer
2. Build Node.js/PHP backend
3. Add database (MySQL/MongoDB)
4. Integrate Stripe/PayPal
5. Build admin dashboard

**Cost:** $2,000-5,000 development

### Marketing & Growth

**Essential Tools:**
1. **Google Analytics** (Free)
   - Track visitors
   - Understand behavior
   - Monitor conversions

2. **Google My Business** (Free)
   - Local SEO
   - Map listings
   - Customer reviews

3. **Email Marketing**
   - Mailchimp (Free up to 500 subscribers)
   - Newsletter campaigns
   - Automated follow-ups

4. **Social Media**
   - Instagram for product photos
   - Facebook for community
   - Pinterest for discovery

---

## Need Help?

### Technical Support

**Hosting Issues:**
- Contact your hosting provider's support
- Most offer 24/7 chat or phone support

**Website Updates:**
- Refer to README.md for customization
- Edit files locally, then re-upload

**Developer Support:**
- Contact Dennis Smaltz (digiSpace)
- Available for additional services

### Resources

**Learning:**
- [HTML & CSS Basics](https://developer.mozilla.org/en-US/docs/Learn)
- [JavaScript Fundamentals](https://javascript.info)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/)

**Tools:**
- [TinyPNG](https://tinypng.com) - Image compression
- [Favicon Generator](https://realfavicongenerator.net)
- [Color Picker](https://colorhunt.co)

---

## Quick Reference

### Costs Summary

| Service | Cost | Frequency |
|---------|------|-----------|
| Domain | $8-15 | Yearly |
| Shared Hosting | $3-10 | Monthly |
| SSL Certificate | Free | (Let's Encrypt) |
| Email (if separate) | $1-5 | Monthly |
| **Total (minimum)** | **$50-150** | **Yearly** |

### Timeline

| Task | Time Required |
|------|---------------|
| Domain registration | 10 minutes |
| Hosting setup | 30 minutes |
| File upload | 15 minutes |
| SSL setup | 10 minutes |
| Testing | 30 minutes |
| **Total** | **~2 hours** |

---

**Good luck with your deployment!**

For questions, refer back to this guide or contact your hosting provider's support team.

---

*Developed by digiSpace - Web Development Maestro*
