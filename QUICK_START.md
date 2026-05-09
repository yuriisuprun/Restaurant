# WhatsApp Button - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Step 1: Update Your Phone Number (Required)

Open: `assets/js/script.js`

Find line ~280:
```javascript
const restaurantPhoneNumber = '393512345678';
```

Replace with your WhatsApp number:
```javascript
const restaurantPhoneNumber = 'YOUR_NUMBER_HERE';
```

**Format:** Country code + number (no spaces or special characters)

**Examples:**
- Italy: `393512345678` (for +39 351 234 5678)
- USA: `12125551234` (for +1 212 555 1234)
- UK: `442071838750` (for +44 20 7183 8750)

### Step 2: Test It

1. Open your website in a browser
2. Scroll down
3. Look for the green WhatsApp button at the bottom-right
4. Click it
5. WhatsApp should open with your pre-filled message

✅ **Done!** Your WhatsApp button is now live.

---

## 📱 What Your Customers See

### Desktop View
```
┌─────────────────────────────────────┐
│                                     │
│  Your Website Content               │
│                                     │
│                                     │
│                                     │
│                                  ◉  │  ← Green WhatsApp button
│                                  💬  │     (60x60px)
│                                     │
└─────────────────────────────────────┘
```

### Mobile View
```
┌──────────────────────┐
│                      │
│ Your Website Content │
│                      │
│                      │
│                   ◉  │  ← Green WhatsApp button
│                   💬  │     (50x50px)
│                      │
└──────────────────────┘
```

### When Clicked
1. **Desktop:** Opens WhatsApp Web in new tab
2. **Mobile:** Opens WhatsApp app (if installed) or WhatsApp Web
3. **Message:** Pre-filled with your custom message

---

## 🎨 What Was Added

### Visual
- Green circular button with WhatsApp icon
- Positioned at bottom-right corner
- Smooth animations and hover effects
- Responsive for all devices

### Functionality
- Sticky position (always visible)
- Opens WhatsApp with pre-filled message
- Works on desktop and mobile
- Accessible for keyboard users

### Code
- HTML: 1 button element
- CSS: ~80 lines of styling
- JavaScript: ~40 lines of functionality

---

## 🔧 Optional Customizations

### Change the Message

In `assets/js/script.js`, find:
```javascript
const defaultMessage = 'Ciao! Vorrei informazioni sul vostro ristorante.';
```

Change to:
```javascript
const defaultMessage = 'Your custom message here';
```

### Change Button Position

In `assets/css/style.css`, find:
```css
.whatsapp-button {
    bottom: 30px;
    right: 30px;
}
```

Change to:
```css
.whatsapp-button {
    bottom: 50px;  /* Distance from bottom */
    right: 50px;   /* Distance from right */
}
```

### Enable Pulse Animation

In `assets/js/script.js`, uncomment these lines:
```javascript
// whatsappButton.classList.add('pulse');
// setTimeout(() => {
//     whatsappButton.classList.remove('pulse');
// }, 5000);
```

---

## 📊 How It Works

```
User clicks button
        ↓
JavaScript generates WhatsApp URL
        ↓
URL includes: phone number + message
        ↓
Opens WhatsApp (app or web)
        ↓
Message pre-fills in chat
        ↓
User can send or modify message
        ↓
Your restaurant receives inquiry
```

---

## ✅ Verification Checklist

- [ ] Phone number updated in `assets/js/script.js`
- [ ] Website opens without errors
- [ ] Green button visible at bottom-right
- [ ] Button works on desktop
- [ ] Button works on mobile
- [ ] Message pre-fills correctly
- [ ] WhatsApp opens in new tab/window

---

## 🆘 Troubleshooting

### Button Not Showing?
1. Check if Font Awesome is loaded (should be in `<head>`)
2. Check browser console for errors (F12)
3. Verify `id="whatsapp-button"` exists in HTML

### WhatsApp Not Opening?
1. Check phone number format (no + or spaces)
2. Test URL: `https://wa.me/YOUR_NUMBER`
3. Ensure WhatsApp is installed or WhatsApp Web is accessible

### Message Not Pre-filling?
1. Check message text (no special characters)
2. Try with simple ASCII text first
3. Check URL encoding

---

## 📚 Documentation

For more detailed information, see:

- **WHATSAPP_SETUP.md** - Complete setup guide
- **WHATSAPP_EXAMPLES.md** - Configuration examples
- **CODE_CHANGES.md** - Exact code changes
- **IMPLEMENTATION_CHECKLIST.md** - Full checklist

---

## 🎯 Next Steps

1. ✅ Update phone number
2. ✅ Test on desktop and mobile
3. ✅ Customize message (optional)
4. ✅ Monitor WhatsApp inquiries
5. ✅ Respond promptly to customers

---

## 💡 Pro Tips

1. **Use WhatsApp Business** for better features
2. **Set up Quick Replies** for common questions
3. **Respond within 1 hour** for best results
4. **Include business hours** in your message
5. **Monitor analytics** to track engagement

---

## 📞 Support

**WhatsApp Resources:**
- WhatsApp Business: https://www.whatsapp.com/business/
- WhatsApp API: https://developers.facebook.com/docs/whatsapp

**Technical Help:**
- Check browser console (F12) for errors
- Verify all files are in correct locations
- Test on different browsers

---

## 🎉 You're All Set!

Your restaurant website now has a professional WhatsApp button that allows customers to contact you directly.

**Key Features:**
✅ Always visible (sticky position)
✅ Mobile optimized
✅ Accessible
✅ Professional design
✅ Easy to customize

**Start receiving WhatsApp inquiries today!**

---

**Last Updated:** May 2026
**Version:** 1.0
**Status:** Ready to Use
