# 🧪 Testing Guide - Dapur Roti Rumahan

Panduan lengkap untuk testing website Dapur Roti Rumahan.

---

## 🎯 Testing Checklist

### **✅ Phase 1: Functional Testing**

#### Navbar & Navigation
- [ ] Logo clickable → navigate to home
- [ ] "Home" link → /index.html
- [ ] "About" link → /about.html
- [ ] "Produk" link → /produk.html
- [ ] "Keranjang" link → /keranjang.html
- [ ] "Login" link → /login.html
- [ ] Cart icon clickable → go to cart page
- [ ] Hamburger menu visible on mobile (< 768px)
- [ ] Hamburger menu toggle works
- [ ] Mobile menu closes after clicking link
- [ ] Active link highlighted on current page
- [ ] Navbar sticky at top while scrolling

#### Home Page (index.html)
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Hero image loads properly
- [ ] Feature cards (3) display in grid
- [ ] Stats section shows numbers
- [ ] CTA buttons clickable
- [ ] Footer links work
- [ ] All sections responsive on mobile

#### About Page (about.html)
- [ ] Page loads correctly
- [ ] 2-column layout works
- [ ] Team member cards display (3-4 members)
- [ ] Team images load
- [ ] Vision/Mission cards show
- [ ] Responsive layout on mobile
- [ ] All text readable

#### Product Page (produk.html)
- [ ] Page loads correctly
- [ ] All 12 products display in grid
- [ ] Product cards show: image, category, name, description, price
- [ ] Filter buttons visible: Semua, Roti, Pastry, Spesial
- [ ] "Semua" button shows all 12 products
- [ ] "Roti" button shows 4 roti products
- [ ] "Pastry" button shows 4 pastry products
- [ ] "Spesial" button shows 4 special products
- [ ] Active filter button highlighted
- [ ] Add to cart button on each product
- [ ] Products responsive (3 cols → 1 col mobile)

#### Shopping Cart Page (keranjang.html)
- [ ] Page loads correctly
- [ ] Empty cart message shows when no items
- [ ] Cart items display when items exist
- [ ] Each item shows: image, name, price, qty, subtotal
- [ ] Quantity buttons (+/-) work
- [ ] Quantity +/- updates total correctly
- [ ] Remove button (🗑️) removes item
- [ ] Summary sidebar shows:
  - [ ] Subtotal calculation correct
  - [ ] Shipping cost (Rp 20.000)
  - [ ] Total = Subtotal + Shipping
- [ ] "Checkout ke WhatsApp" button works
- [ ] "Lanjut Belanja" button → produk.html
- [ ] Cart items responsive layout

#### Login Page (login.html)
- [ ] Page loads correctly
- [ ] Email input field works
- [ ] Password input field works (masked)
- [ ] Remember me checkbox works
- [ ] Login form submits
- [ ] Email validation:
  - [ ] Empty email shows error
  - [ ] Invalid format shows error
  - [ ] Valid format accepted
- [ ] Password validation:
  - [ ] Empty password shows error
  - [ ] Wrong password shows error
  - [ ] Correct password accepted
- [ ] Demo credentials work: demo@gmail.com / demo123
- [ ] Remember me saves email to localStorage
- [ ] Successful login redirects to home
- [ ] Error message displays clearly
- [ ] Social login buttons visible (placeholder)

---

### **✅ Phase 2: Feature Testing**

#### Cart System
Test with shopping flow:

**Test Case 1: Add Single Item**
1. Go to Produk page
2. Click "Tambah Keranjang" on first product
   - [ ] Toast notification appears
   - [ ] Cart badge updates to "1"
   - [ ] Item stored in localStorage

**Test Case 2: Add Multiple Items**
1. Add 3 different products
   - [ ] Badge updates: 1 → 2 → 3
   - [ ] All items appear in cart

**Test Case 3: Quantity Management**
1. Go to Keranjang page
2. Click + button on one item
   - [ ] Quantity increases
   - [ ] Subtotal updates
   - [ ] Total updates
3. Click - button
   - [ ] Quantity decreases
   - [ ] Subtotal updates
   - [ ] Total updates

**Test Case 4: Remove Item**
1. In Keranjang page, click 🗑️ on item
   - [ ] Item removed from cart
   - [ ] Badge updates (decreases)
   - [ ] Total recalculates
   - [ ] Notification shows

**Test Case 5: Cart Persistence**
1. Add items to cart
2. Go to another page (About, Produk)
3. Go back to Keranjang
   - [ ] Items still there
4. Close browser completely
5. Reopen and go to Keranjang
   - [ ] Items still there (localStorage)

**Test Case 6: WhatsApp Checkout**
1. Add 2-3 items to cart
2. Click "Checkout ke WhatsApp"
   - [ ] WhatsApp opens with pre-filled message
   - [ ] Message includes: item names, quantities, prices, total
   - [ ] Message formatted correctly
   - [ ] Numbers formatted as Rp (Rp 35.000)
3. Send message in WhatsApp
4. Check that cart cleared in browser

#### Product Filtering
1. Go to Produk page
2. Test each filter:
   - [ ] "Semua" → 12 products
   - [ ] "Roti" → 4 products
   - [ ] "Pastry" → 4 products
   - [ ] "Spesial" → 4 products
3. Switch between filters
   - [ ] Products update correctly
   - [ ] Grid re-renders
   - [ ] Active button highlighted

#### Login & Session
1. Go to Login page
2. Try incorrect email/password
   - [ ] Error message shows
3. Try demo credentials
   - [ ] Successful login
   - [ ] Redirect to home
   - [ ] sessionStorage has isLoggedIn=true
4. Open Keranjang page
   - [ ] Should remain logged in (session active)
5. Close entire browser
6. Reopen website
   - [ ] Should be logged out (session cleared)

---

### **✅ Phase 3: Responsive Design Testing**

#### Mobile (375px width)
- [ ] Navbar displays hamburger menu
- [ ] Hamburger menu works
- [ ] All pages readable (no overflow)
- [ ] Product grid: 1 column
- [ ] Buttons clickable (touch-friendly size)
- [ ] Forms input fields accessible
- [ ] Images scale properly

#### Tablet (768px width)
- [ ] Navbar shows full menu (or hamburger)
- [ ] Product grid: 2 columns
- [ ] 2-column layouts work correctly
- [ ] All content visible
- [ ] Spacing appropriate

#### Desktop (1024px+ width)
- [ ] Navbar full horizontal layout
- [ ] Product grid: 3 columns
- [ ] 2-column layouts work as designed
- [ ] Hero section displays fully
- [ ] Team cards in grid

**Test via DevTools:**
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select different devices
4. Test all screen sizes

---

### **✅ Phase 4: Browser Compatibility**

#### Desktop Browsers
- [ ] Chrome (latest) - All features work
- [ ] Firefox (latest) - All features work
- [ ] Safari (latest) - All features work
- [ ] Edge (latest) - All features work

#### Mobile Browsers
- [ ] Chrome Mobile - All features work
- [ ] Safari Mobile - All features work
- [ ] Firefox Mobile - All features work

**Test Checklist for Each Browser:**
- [ ] Page loads
- [ ] No JavaScript errors (F12 Console)
- [ ] Styling renders correctly
- [ ] All interactive features work
- [ ] localStorage works
- [ ] Fetch API works (navbar loading)

---

### **✅ Phase 5: Performance Testing**

#### Page Load Speed
Using Chrome DevTools:

1. Open DevTools → Network tab
2. Disable cache (DevTools settings)
3. Reload page
4. Check load times:
   - [ ] DOMContentLoaded < 2 seconds
   - [ ] Full load < 3 seconds
   - [ ] No 404 errors

**Target Metrics:**
```
First Contentful Paint (FCP): < 1s
Largest Contentful Paint (LCP): < 2.5s
Cumulative Layout Shift (CLS): < 0.1
```

#### Lighthouse Audit
1. Open DevTools → Lighthouse
2. Run audit (Mobile)
3. Check scores:
   - [ ] Performance > 80
   - [ ] Accessibility > 80
   - [ ] Best Practices > 80
   - [ ] SEO > 80

---

### **✅ Phase 6: Console Testing**

Open Console (F12 → Console) and test:

```javascript
// 1. Test localStorage
localStorage.getItem('cart')  // Should return cart array
// Result: [{"id":1,"name":"Roti","qty":2,...}]

// 2. Test sessionStorage
sessionStorage.getItem('isLoggedIn')  // Should be 'true' if logged in
// Result: 'true'

// 3. Test product filtering
renderProducts('roti')  // Should show only roti
// Result: Re-renders 4 roti products

// 4. Test cart functions
addToCart(1, 'Roti Tawar', 35000, 'image.jpg')
// Result: Added to cart, badge updates

// 5. Test currency formatting
formatCurrency(100000)
// Result: "Rp 100.000"

// 6. Test notifications
showNotification('Test message')
// Result: Toast notification appears
```

---

## 📊 Test Results Template

Create a file `TEST_RESULTS.md`:

```markdown
# Test Results - Dapur Roti Rumahan

**Date:** [Your Date]  
**Tester:** [Your Name]  
**Browser:** [Browser Name & Version]  
**Device:** [Desktop/Mobile]  

## ✅ Passed Tests (26/26)

- [x] Navbar loads correctly
- [x] Products display in grid
- [x] Add to cart works
- [x] Cart updates total
... etc

## ⚠️ Failed Tests (0/26)

None!

## 📋 Notes

Any issues or observations...

---

**Status:** ✅ READY FOR PRODUCTION
```

---

## 🔍 Edge Case Testing

### **Empty States**
- [ ] Cart empty → show empty message
- [ ] Product filter returns 0 items → show no results message
- [ ] Login with empty fields → show error

### **Extreme Values**
- [ ] Add many items to cart (10+) → total calculates correctly
- [ ] Large product price (999.999) → formats correctly
- [ ] Quantity 1 to 99 → all work

### **Browser Storage**
- [ ] localStorage quota full → graceful degradation
- [ ] localStorage disabled → cart lost but app works
- [ ] sessionStorage cleared → user logged out

---

## 🚀 Before Launch Checklist

### **Final QA**
- [ ] All pages load without errors
- [ ] No console errors (F12)
- [ ] All links working
- [ ] All buttons functional
- [ ] Mobile responsive verified
- [ ] Cart persistence verified
- [ ] Login working
- [ ] WhatsApp checkout working
- [ ] Lighthouse score > 80
- [ ] Browser compatibility confirmed

### **Content Review**
- [ ] All text correct and no typos
- [ ] All images loading properly
- [ ] Correct product prices
- [ ] Correct contact information
- [ ] Correct WhatsApp number
- [ ] Correct shipping cost
- [ ] Correct demo credentials (if kept)

### **Security**
- [ ] No sensitive data in localStorage (except cart/email)
- [ ] Form validation working
- [ ] No XSS vulnerabilities
- [ ] HTTPS ready (if deploying)

---

## 🆘 Common Issues & Solutions

### Issue: Products not showing
```
Debug Steps:
1. Open Console (F12)
2. Type: console.log(products)
3. Check if array displays
4. If empty: check js/produk.js file

Solution: Ensure produk.js loaded before produk.html renders
```

### Issue: Cart not saving
```
Debug Steps:
1. Open Console
2. Type: localStorage.getItem('cart')
3. Should show JSON array

Solution: 
- Hard refresh (Ctrl+Shift+R)
- Check browser storage not full
- Check browser privacy settings
```

### Issue: Navbar not loading
```
Debug Steps:
1. Open Console
2. Check for fetch errors
3. Verify components/navbar.html exists

Solution:
- Must run on local server (not file://)
- Check network tab for 404 errors
```

### Issue: WhatsApp link not opening
```
Debug Steps:
1. Check WhatsApp number format in keranjang.js
2. Test on mobile with WhatsApp installed

Solution:
- Format: only digits, no +
- Example: 6281234567890 (not +62812345678)
```

---

## 📈 Test Metrics

### **Coverage Target**
- [ ] Functional Coverage: > 95%
- [ ] Browser Coverage: 4 major browsers
- [ ] Device Coverage: Mobile, Tablet, Desktop
- [ ] Feature Coverage: All 8 features tested

### **Quality Gates**
- [ ] Zero critical bugs
- [ ] Zero JavaScript errors in console
- [ ] Performance score > 80
- [ ] All form validation working
- [ ] All navigation links working

---

## 🎓 Test Scenarios for Training

### **Scenario 1: New Customer Journey**
1. New user arrives at homepage
2. Browse About page
3. Go to Products
4. Filter by Roti
5. Add 2 roti to cart
6. Check cart
7. Increase quantity on one
8. Checkout via WhatsApp
9. Verify message sent

### **Scenario 2: Returning Customer**
1. User already has items in cart
2. Close and reopen browser
3. Cart items still there (persistence)
4. Add more items
5. Login if account exists
6. Checkout

### **Scenario 3: Error Handling**
1. Try invalid email on login
2. Try empty password
3. Try remove all cart items
4. Try checkout with empty cart
5. Verify error messages appear

---

## 📝 Automated Test Example (Bonus)

If you want to add automated tests later, here's a template:

```javascript
// Example: Jest/Cypress test
describe('Cart Functionality', () => {
  test('should add item to cart', () => {
    addToCart(1, 'Roti', 35000, 'image.jpg');
    const cart = getCart();
    expect(cart.length).toBe(1);
    expect(cart[0].qty).toBe(1);
  });

  test('should increase quantity', () => {
    addToCart(1, 'Roti', 35000, 'image.jpg');
    addToCart(1, 'Roti', 35000, 'image.jpg');
    const cart = getCart();
    expect(cart[0].qty).toBe(2);
  });

  test('should remove item from cart', () => {
    addToCart(1, 'Roti', 35000, 'image.jpg');
    removeFromCart(1);
    const cart = getCart();
    expect(cart.length).toBe(0);
  });
});
```

---

**Happy Testing! 🧪✨**

Remember: A well-tested website is a reliable website!
