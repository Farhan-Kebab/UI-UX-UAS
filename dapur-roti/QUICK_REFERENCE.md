# 🚀 QUICK REFERENCE - Keranjang & Checkout Integration

## 📌 Essential Functions Reference

### From script.js (Core Functions)
```javascript
// Add product to cart
addToCart(productId, name, price, image)

// Get cart from localStorage
const cart = getCart()

// Save cart to localStorage
saveCart(cart)

// Format price for display
formatPrice(35000) → "35.000"
```

### From keranjang.js (Cart Page)
```javascript
// Display/refresh cart items
displayCart()

// Increment or decrement quantity
updateQuantity(index, change)
// Example: updateQuantity(0, 1)  // Add 1 to first item

// Remove item from cart
removeFromCart(index)

// Calculate and display totals
calculateTotal()

// Navigate to checkout
proceedToCheckout()
```

### From checkout.js (Checkout Page)
```javascript
// Initialize checkout page
initializeCheckout()

// Render items in checkout
renderCheckoutItems(cart)

// Calculate totals in checkout
calculateTotals()

// Validate shipping form
validateAndProceed()

// Complete and save order
completeCheckout()

// Show payment details
showPaymentDetails(method)
```

---

## 🔑 Key Data Structure

```javascript
// Item in cart
{
  id: 1,
  name: "Roti Tawar",
  price: 35000,
  image: "img/roti.jpg",
  quantity: 2
}

// Full cart
[
  {id: 1, name: "...", price: 35000, image: "...", quantity: 2},
  {id: 2, name: "...", price: 25000, image: "...", quantity: 1}
]

// Stored in localStorage['cart']
// Retrieved via getCart()
// Saved via saveCart(cart)
```

---

## 📱 How the Pages Connect

### produk.html → keranjang.html → checkout.html

```
FLOW 1: Add to Cart
┌──────────────────┐
│ produk.html      │
│ Button: onclick= │
│ "addToCart(...)" │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────┐
│ script.js                │
│ addToCart() creates:     │
│ {id, name, price,        │
│  image, quantity: 1}     │
│ Saves to localStorage    │
└──────────────────────────┘

FLOW 2: View Cart
┌──────────────────┐
│ keranjang.html   │
│ DOMContentLoaded:│
│ displayCart()    │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────┐
│ keranjang.js             │
│ getCart()                │
│ Render with quantity     │
│ calculateTotal()         │
└────────┬─────────────────┘
         │
QUANTITY CONTROLS: updateQuantity()
DELETE: removeFromCart()
NAVIGATE: proceedToCheckout()

FLOW 3: Checkout
┌──────────────────┐
│ checkout.html    │
│ DOMContentLoaded:│
│ initializeCheckout() │
└────────┬──────────┘
         │
         ▼
┌──────────────────────────┐
│ checkout.js              │
│ getCart() from storage   │
│ renderCheckoutItems()    │
│ calculateTotals()        │
│ validateAndProceed()     │
│ completeCheckout()       │
│ saveOrder()              │
└──────────────────────────┘
```

---

## ✅ Field Consistency

**IMPORTANT:** All functions use `item.quantity` (NOT `item.qty`)

```javascript
// ✅ CORRECT
cart[0].quantity = 2
item.quantity * item.price

// ❌ WRONG
cart[0].qty = 2
item.qty * item.price
```

---

## 🧪 Testing Commands (Console)

```javascript
// Add test product
addToCart(1, "Roti Test", 35000, "img/test.jpg")

// Check cart
console.log(getCart())

// Update quantity
updateQuantity(0, 1)

// Check localStorage
console.log(localStorage.getItem('cart'))

// Remove item
removeFromCart(0)

// View totals (will show in page)
calculateTotal()
```

---

## 🔍 Debugging

```javascript
// Check if cart exists
const cart = getCart();
console.log('Cart:', cart);
console.log('Items:', cart.length);

// Check specific item
console.log('Item 0:', cart[0]);
console.log('Has quantity?', 'quantity' in cart[0]);

// Check localStorage
const stored = localStorage.getItem('cart');
console.log('Stored:', stored);

// Check totals calculation
const subtotal = cart.reduce((sum, item) => 
  sum + (item.price * item.quantity), 0);
console.log('Subtotal:', subtotal);
```

---

## 📊 localStorage Keys

```javascript
// Cart data
localStorage['cart'] = [{...}, {...}]

// Shipping info (saved on checkout)
localStorage['shippingData'] = {
  fullname: "...",
  email: "...",
  phone: "...",
  address: "...",
  city: "..."
}

// Orders (saved after complete)
localStorage['orders'] = [{...}, {...}]
```

---

## 🎯 Common Tasks

### Task 1: Add Product
```javascript
addToCart(productId, productName, productPrice, productImage)
// Automatically creates quantity: 1
// Updates automatically if same product added again
```

### Task 2: Change Quantity
```javascript
updateQuantity(cartIndex, +1)  // Increase
updateQuantity(cartIndex, -1)  // Decrease
// Auto saves to localStorage
// Auto refreshes display
```

### Task 3: Delete Item
```javascript
removeFromCart(cartIndex)
// Shows confirmation dialog
// Auto refreshes display
```

### Task 4: Get Total
```javascript
calculateTotal()
// Calculates: subtotal + shipping + tax
// Updates display automatically
// Disables checkout if cart empty
```

### Task 5: Go to Checkout
```javascript
proceedToCheckout()
// Checks if cart not empty
// Navigates to checkout.html
// Cart data persists in localStorage
```

---

## ⚠️ Common Issues & Solutions

### Issue: Cart not showing in checkout
**Solution:** Check localStorage['cart']
```javascript
const cart = localStorage.getItem('cart');
console.log('Cart data:', cart);
// If null, customer needs to add items first
```

### Issue: Quantity not updating
**Solution:** Verify updateQuantity is called
```javascript
// Check if function exists
console.log(typeof updateQuantity);  // Should be 'function'

// Check if cart updates
updateQuantity(0, 1);
console.log(getCart()[0].quantity);  // Should increase
```

### Issue: Total showing NaN
**Solution:** Check if quantity field exists
```javascript
const cart = getCart();
cart.forEach(item => {
  console.log('Item:', item.name, 'Quantity:', item.quantity);
  // Should show number, not undefined
});
```

### Issue: Checkout.html loads but no items
**Solution:** Check if initializeCheckout called
```javascript
// In browser console on checkout.html
console.log('Is cart loaded?', getCart());
// If empty, customer needs to come from cart page
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README_INTEGRATION.md` | Overview & summary |
| `INTEGRASI_KERANJANG_CHECKOUT.md` | How integration works |
| `DATA_FLOW_DIAGRAM.md` | Visual data flow |
| `VERIFICATION_CHECKLIST.md` | Detailed verification |
| `test-integrasi.html` | Interactive test page |
| `INTEGRATION_STATUS.md` | Status & progress |

---

## 🚀 Integration Status

**Status:** ✅ COMPLETE & VERIFIED

All functions tested and working:
- ✅ Data creation with quantity
- ✅ Cart display with quantity controls
- ✅ Update & delete operations
- ✅ Total calculations
- ✅ Navigation between pages
- ✅ Order persistence

Ready for production use!

---

*Last Updated: Today*  
*Version: 1.0*
