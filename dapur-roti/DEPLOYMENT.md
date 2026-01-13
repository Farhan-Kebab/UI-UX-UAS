# 🚀 Deployment Guide - Dapur Roti Rumahan

Panduan lengkap untuk deploy website ke production.

---

## 📋 Pre-Deployment Checklist

### **Content & Configuration**
- [ ] WhatsApp number updated di `js/keranjang.js`
- [ ] Shipping cost correct
- [ ] Login credentials updated (or login page removed)
- [ ] Brand name & logo final
- [ ] About page content correct
- [ ] Product list accurate
- [ ] Contact information updated
- [ ] All links working
- [ ] No console errors (F12)

### **Testing**
- [ ] All pages load correctly
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Cart functionality works
- [ ] WhatsApp checkout tested
- [ ] Login tested
- [ ] No broken images
- [ ] Lighthouse score > 80

### **Security**
- [ ] Sensitive data not in code (WhatsApp number masked if needed)
- [ ] No hardcoded passwords in production
- [ ] Form validation working
- [ ] No XSS vulnerabilities

---

## 🌐 Free Deployment Options

### **Option 1: Netlify (Recommended) ⭐**

**Advantages:**
- Free hosting
- Custom domain support
- Automatic HTTPS
- Easy CI/CD
- Good performance

**Steps:**

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub/Email
   - Verify email

2. **Upload Project**
   - Option A: Git Integration
     ```
     - Push project to GitHub
     - Connect GitHub to Netlify
     - Auto-deploy on push
     ```
   - Option B: Drag & Drop
     ```
     - Zip your dapur-roti folder
     - Drag & drop to Netlify
     - Wait for deployment
     ```

3. **Configure**
   - Site settings → Domain management
   - Add custom domain (optional)
   - Enable HTTPS (automatic)

4. **Deploy Trigger**
   ```
   Push to GitHub → Netlify auto-builds → Live!
   ```

**Cost:** Free (for basic sites)  
**Link Example:** `https://dapur-roti-rumahan.netlify.app`

---

### **Option 2: Vercel**

**Advantages:**
- Fast CDN
- Zero-config deployment
- Great for static sites
- Good performance

**Steps:**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Install Vercel app

2. **Deploy Project**
   ```
   - Push to GitHub
   - Vercel auto-imports
   - Click Deploy
   ```

3. **Custom Domain**
   - Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS records

**Cost:** Free  
**Link Example:** `https://dapur-roti.vercel.app`

---

### **Option 3: GitHub Pages**

**Advantages:**
- Free GitHub account
- Simple setup
- Great for static content

**Disadvantages:**
- Custom domain costs extra
- Limited customization

**Steps:**

1. **Create GitHub Repository**
   ```bash
   - Create new repo: dapur-roti
   - Upload your files
   ```

2. **Enable Pages**
   - Repository Settings
   - Scroll to "Pages" section
   - Select "main" branch
   - Save

3. **Access Site**
   - URL: `https://yourusername.github.io/dapur-roti`
   - Wait 1-2 minutes for deployment

**Cost:** Free  
**Custom Domain:** ~Rp 150.000/year

---

### **Option 4: Firebase Hosting**

**Advantages:**
- Google infrastructure
- Fast deployment
- Analytics included
- Good performance

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Project**
   ```bash
   firebase init hosting
   # Select your Firebase project
   # Public directory: . (current folder)
   # Single page app: No
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

**Cost:** Free (with limits)  
**Link Example:** `https://dapur-roti-rumahan.web.app`

---

## 🌍 Custom Domain Setup

### **Domain Registration**

**Recommended Registrars:**
1. **Pandi.id** (Indonesian domains)
   - Cost: Rp 200.000/year (for .id domain)
   - Fast registration
   - Indonesian support

2. **Namecheap**
   - Cost: $8-10/year
   - Good for .com domains
   - Easy DNS management

3. **Google Domains**
   - Cost: $12/year (minimum)
   - Integrated with Google services
   - Simple setup

### **DNS Configuration**

After registering domain:

**For Netlify:**
```
1. Netlify dashboard → Settings → Domains
2. Add your domain
3. Copy nameservers
4. Add to domain registrar DNS settings
5. Wait 24-48 hours for propagation
```

**For Vercel:**
```
1. Vercel dashboard → Settings → Domains
2. Add your domain
3. Update DNS A record:
   IP: 76.76.19.165
   IP: 76.76.19.166
4. Update CNAME (if needed)
```

**For Firebase:**
```
1. Firebase console → Hosting
2. Connect custom domain
3. Follow Google's verification steps
4. Update DNS records
```

---

## 📊 Performance Optimization

### **Before Deployment**

#### 1. **Image Optimization**
```bash
# Compress all images
# Use tools like:
# - TinyPNG (https://tinypng.com)
# - ImageOptim (Mac)
# - FileOptimizer (Windows)

# Or use online converter to WebP format (smaller file size)
```

#### 2. **Minify CSS**
```bash
# If you want to minimize style.css:
# Use https://cssnano.co or similar tool
# But not critical for small sites
```

#### 3. **Minify JavaScript**
```bash
# Use https://www.minifycode.com
# Or webpack/build tools
# But not critical for small sites
```

#### 4. **Enable Gzip Compression**
- Most hosting automatically enables this
- Netlify & Vercel: automatic

#### 5. **Reduce Third-Party Scripts**
- Currently using: Tailwind CDN + vanilla JS
- Already minimal (good!)
- No jQuery or heavy libraries

### **Lighthouse Score Optimization**

**Current Performance:**
- ✅ No unnecessary CSS
- ✅ Minimal JavaScript
- ✅ Good image sizes
- ✅ Mobile-first design

**To improve score:**
1. Add image alt texts (✅ already done)
2. Add meta descriptions (optional)
3. Add canonical tags (optional)
4. Enable service worker for PWA (advanced)

---

## 🔐 Security Checklist

### **Before Going Live**

- [ ] Remove demo login if in production
- [ ] Validate all form inputs (✅ done)
- [ ] Use HTTPS (all hosting options provide)
- [ ] No sensitive data in code
- [ ] No API keys exposed
- [ ] No console errors with sensitive info
- [ ] Update WhatsApp number (not shared publicly)

### **HTTPS Configuration**

**Netlify:** Automatic (with Let's Encrypt)  
**Vercel:** Automatic (with Let's Encrypt)  
**Firebase:** Automatic  
**GitHub Pages:** Automatic

All major hosting providers automatically enable HTTPS!

---

## 📈 Post-Deployment

### **1. Test Live Site**
```
- Open your domain
- Test all pages
- Test shopping flow
- Test WhatsApp checkout
- Check on mobile
```

### **2. Set Up Analytics**
```html
<!-- Add to all HTML pages (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **3. Monitor Performance**
- Netlify Analytics
- Vercel Analytics
- Google Analytics
- Google Search Console

### **4. Set Up Email Notifications**
- Netlify: Deploy notifications
- Vercel: Deployment notifications
- GitHub: Commit email alerts

---

## 🔄 Continuous Deployment (CI/CD)

### **Automatic Deployment with GitHub**

**Setup:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. **Netlify Auto-Deploy**
   - Netlify detects push
   - Automatically builds
   - Deploys to production
   - ~30 seconds to live

**No manual steps needed!**

---

## 📱 Mobile App (Bonus)

If you want to convert website to mobile app:

### **Option 1: Progressive Web App (PWA)**
```javascript
// Add to script.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
```

### **Option 2: Capacitor**
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
# Creates Android & iOS apps from your web code
```

### **Option 3: Cordova**
```bash
cordova create dapur-roti
cordova add platform ios android
cordova build ios
```

---

## 🐛 Troubleshooting Deployment

### **Problem: Site shows 404 error**
```
Solution:
1. Check repository is public (GitHub Pages)
2. Check build settings in Netlify/Vercel
3. Verify all files uploaded
4. Check folder structure is correct
```

### **Problem: Custom domain not working**
```
Solution:
1. Check DNS propagation (wait 24-48 hours)
2. Verify DNS records set correctly
3. Clear browser cache (Ctrl+Shift+Del)
4. Try different browser
5. Check domain registrar settings
```

### **Problem: Site loads slowly**
```
Solution:
1. Optimize images (compress)
2. Enable CDN (Netlify/Vercel auto-does this)
3. Reduce external requests
4. Check Lighthouse score
5. Use Performance tab in DevTools
```

### **Problem: WhatsApp link not working**
```
Solution:
1. Check WhatsApp number format (no +)
2. Test on mobile phone (WhatsApp must be installed)
3. Verify message encoding (URL encoded)
4. Check for special characters in message
```

---

## 💰 Estimated Costs

### **Minimum Setup**
```
Website Hosting:     FREE  (Netlify, Vercel, Firebase)
Domain Name:         FREE  (optional, or Rp 150k-300k/year)
SSL Certificate:     FREE  (auto-included)
Email:               FREE  (Gmail for business inquiries)

TOTAL:               FREE or Rp 150k-300k/year
```

### **Professional Setup**
```
Hosting (paid tier):     $10-30/month
Domain:                  $10-20/year
Email hosting:           $5-10/month
CDN:                     Included or $10+/month
Analytics:               FREE

TOTAL:                   $100-150/month
```

---

## 📝 Deployment Checklist Template

```markdown
# Deployment Checklist - [DATE]

## Pre-Deployment
- [ ] All files committed to GitHub
- [ ] WhatsApp number updated
- [ ] Tested on localhost
- [ ] Mobile responsive verified
- [ ] No console errors
- [ ] Lighthouse score: 80+
- [ ] All links working

## Deployment
- [ ] Pushed to main branch
- [ ] Hosting platform auto-deployed
- [ ] Domain configured (if custom)
- [ ] HTTPS enabled
- [ ] Deployment successful

## Post-Deployment
- [ ] Live site tested
- [ ] All pages load
- [ ] Shopping flow works
- [ ] WhatsApp checkout tested
- [ ] Analytics set up (optional)
- [ ] Backup of code (GitHub)
- [ ] Team notified of launch

## Status: ✅ LIVE
```

---

## 🎯 Quick Deployment (5 Minutes)

### **Fastest Option: Netlify Drag & Drop**

1. **Prepare Files**
   ```
   - Go to c:\Users\HYPE AMD\Documents\test\uas\dapur-roti
   - Select all files & folders
   - Zip to: dapur-roti.zip
   ```

2. **Upload to Netlify**
   ```
   - Go to https://app.netlify.com
   - Drag & drop dapur-roti.zip
   - Wait 30 seconds
   - Site is LIVE!
   ```

3. **Share Your Site**
   ```
   - URL: https://[random-name].netlify.app
   - Share with friends & customers
   - Start taking orders!
   ```

**Total Time: 5 minutes ⚡**

---

## 📚 Additional Resources

- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Firebase Hosting:** https://firebase.google.com/docs/hosting
- **GitHub Pages:** https://pages.github.com
- **Domain Registration:** https://pandi.id (Indonesia)
- **SSL Testing:** https://www.ssllabs.com/ssltest

---

## 🎉 You're Ready to Launch!

Your Dapur Roti Rumahan website is ready for the world!

**Next Steps:**
1. ✅ Deploy to hosting
2. ✅ Set up custom domain
3. ✅ Share with customers
4. ✅ Start taking orders
5. ✅ Track analytics
6. ✅ Gather feedback
7. ✅ Improve continuously

**Success Metrics:**
- Traffic from Google
- WhatsApp orders received
- Customer satisfaction
- Return customer rate

---

**Happy Launching! 🚀🥖**

For support, check README.md and TESTING.md files.
