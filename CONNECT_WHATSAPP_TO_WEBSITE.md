# Connect WhatsApp to Your Website - Complete Guide

## Overview

This guide shows you how to connect your WhatsApp account to your restaurant website so customers can contact you.

---

## The Complete Flow

```
Customer visits website
        ↓
Sees green WhatsApp button
        ↓
Clicks button
        ↓
WhatsApp opens with your number
        ↓
Pre-filled message appears
        ↓
Customer sends message
        ↓
You receive on your phone
        ↓
You reply
        ↓
Customer gets response
```

---

## What You Need

1. ✅ A WhatsApp account (personal or business)
2. ✅ Your phone number
3. ✅ Access to edit `assets/js/script.js`
4. ✅ 5 minutes

---

## Step 1: Get Your WhatsApp Account Ready

### Option A: Use Existing WhatsApp (Easiest)

If you already have WhatsApp on your phone:
1. Open WhatsApp
2. Your number is already set up
3. Go to Step 2

### Option B: Create WhatsApp Business Account (Recommended)

For a professional setup:
1. Download "WhatsApp Business" app
2. Follow the setup wizard
3. Verify your phone number
4. Set up business profile
5. Go to Step 2

**See:** [WHATSAPP_BUSINESS_QUICK_SETUP.md](WHATSAPP_BUSINESS_QUICK_SETUP.md)

---

## Step 2: Get Your Phone Number

### Find Your Number

Your WhatsApp phone number is the one you registered with.

**Example:**
- You registered with: +39 351 234 5678
- Your WhatsApp number: +39 351 234 5678

### Format for Website

The website needs the number in a specific format:
- Remove the + sign
- Remove spaces and dashes
- Keep country code + number

**Examples:**

| Country | Original | Website Format |
|---------|----------|----------------|
| Italy | +39 351 234 5678 | 393512345678 |
| USA | +1 212 555 1234 | 12125551234 |
| UK | +44 20 7183 8750 | 442071838750 |
| France | +33 1 23 45 67 89 | 33123456789 |
| Spain | +34 91 234 5678 | 34912345678 |
| Germany | +49 30 123 45678 | 493012345678 |

### Your Number

**Original:** ___________________________

**Website Format:** ___________________________

---

## Step 3: Update Your Website

### Find the File

Open: `assets/js/script.js`

### Find the Line

Search for (around line 280):
```javascript
const restaurantPhoneNumber = '393512345678';
```

### Replace with Your Number

Change:
```javascript
const restaurantPhoneNumber = '393512345678';
```

To:
```javascript
const restaurantPhoneNumber = 'YOUR_NUMBER_HERE';
```

**Example for Italy:**
```javascript
const restaurantPhoneNumber = '393512345678'; // +39 351 234 5678
```

**Example for USA:**
```javascript
const restaurantPhoneNumber = '12125551234'; // +1 212 555 1234
```

### Save the File

Press Ctrl+S (or Cmd+S on Mac) to save.

---

## Step 4: Customize the Message (Optional)

### Find the Message Line

In the same file, find (around line 285):
```javascript
const defaultMessage = 'Ciao! Vorrei informazioni sul vostro ristorante.';
```

### Change to Your Message

**Italian Examples:**
```javascript
const defaultMessage = 'Ciao! Vorrei prenotare un tavolo.';
const defaultMessage = 'Ciao! Quali sono i vostri orari?';
const defaultMessage = 'Ciao! Fate consegne a domicilio?';
```

**English Examples:**
```javascript
const defaultMessage = 'Hello! I would like to make a reservation.';
const defaultMessage = 'Hello! What are your hours?';
const defaultMessage = 'Hello! Do you offer delivery?';
```

### Save the File

Press Ctrl+S to save.

---

## Step 5: Test It

### On Desktop

1. Open your website in a browser
2. Scroll down to the bottom-right corner
3. Look for the green WhatsApp button with the WhatsApp icon
4. Click the button
5. WhatsApp Web should open in a new tab
6. Your number should appear
7. The pre-filled message should appear

### On Mobile

1. Open your website on your phone
2. Scroll down to the bottom-right corner
3. Look for the green WhatsApp button
4. Click the button
5. WhatsApp app should open (if installed)
6. Your number should appear
7. The pre-filled message should appear

### Send a Test Message

1. Type a test message
2. Click Send
3. You should receive it on your phone

---

## Verify Everything Works

### Checklist

- [ ] Green WhatsApp button appears on website
- [ ] Button is at bottom-right corner
- [ ] Button works on desktop
- [ ] Button works on mobile
- [ ] WhatsApp opens when clicked
- [ ] Your number appears
- [ ] Message pre-fills
- [ ] You can send a test message

---

## Common Issues & Solutions

### Issue 1: Button Not Showing

**Problem:** Green WhatsApp button doesn't appear on website

**Solutions:**
1. Check if Font Awesome icons are loaded
2. Refresh the page (Ctrl+F5)
3. Check browser console for errors (F12)
4. Verify `id="whatsapp-button"` exists in HTML

### Issue 2: WhatsApp Not Opening

**Problem:** Clicking button doesn't open WhatsApp

**Solutions:**
1. Verify phone number format (no + or spaces)
2. Test URL directly: `https://wa.me/393512345678`
3. Ensure WhatsApp is installed or WhatsApp Web is accessible
4. Try different browser

### Issue 3: Message Not Pre-filling

**Problem:** Message doesn't appear in WhatsApp

**Solutions:**
1. Check message text (no special characters)
2. Try with simple ASCII text first
3. Verify URL encoding
4. Check browser console for errors

### Issue 4: Wrong Number Appears

**Problem:** Different number appears than expected

**Solutions:**
1. Verify phone number format in `assets/js/script.js`
2. Remove + sign and spaces
3. Include country code
4. Save file and refresh page

---

## How Customers Use It

### Desktop User Flow

```
1. Customer visits website
2. Scrolls to bottom
3. Sees green WhatsApp button
4. Clicks button
5. WhatsApp Web opens in new tab
6. Message pre-fills
7. Customer types additional info
8. Customer clicks Send
9. You receive message on phone
```

### Mobile User Flow

```
1. Customer visits website on phone
2. Scrolls to bottom
3. Sees green WhatsApp button
4. Clicks button
5. WhatsApp app opens (if installed)
6. Message pre-fills
7. Customer types additional info
8. Customer clicks Send
9. You receive message on phone
```

---

## Best Practices

### 1. Keep Phone Online
- Your phone must be online to receive messages
- WhatsApp must be installed
- Notifications must be enabled

### 2. Respond Quickly
- Aim for < 1 hour response time
- Customers appreciate fast replies
- Set notifications to "Always"

### 3. Professional Responses
- Use proper grammar
- Be friendly and helpful
- Represent your restaurant well

### 4. Use Quick Replies (WhatsApp Business)
- Set up pre-written responses
- Save time on common questions
- Maintain consistency

### 5. Set Away Message (WhatsApp Business)
- Tell customers when you'll respond
- Manage expectations
- Reduce follow-up messages

---

## Advanced: Multiple Numbers

If you want different numbers for different locations:

### For Each Location

Edit `assets/js/script.js` and modify the function:

```javascript
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (!whatsappButton) return;
    
    // Detect current page
    const currentPage = window.location.pathname;
    
    let restaurantPhoneNumber;
    
    // Different numbers for different pages
    if (currentPage.includes('location1')) {
        restaurantPhoneNumber = '393512345678'; // Location 1
    } else if (currentPage.includes('location2')) {
        restaurantPhoneNumber = '393587654321'; // Location 2
    } else {
        restaurantPhoneNumber = '393512345678'; // Default
    }
    
    const defaultMessage = 'Ciao! Vorrei informazioni.';
    
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappURL = `https://wa.me/${restaurantPhoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappURL, '_blank');
    });
}
```

---

## Advanced: Dynamic Messages

If you want different messages for different pages:

```javascript
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (!whatsappButton) return;
    
    const restaurantPhoneNumber = '393512345678';
    
    // Detect current page
    const currentPage = window.location.pathname;
    
    let defaultMessage;
    
    if (currentPage.includes('menu')) {
        defaultMessage = 'Ciao! Ho visto il vostro menu. Potete dirmi di più?';
    } else if (currentPage.includes('careers')) {
        defaultMessage = 'Ciao! Sono interessato a lavorare da voi.';
    } else {
        defaultMessage = 'Ciao! Vorrei informazioni sul vostro ristorante.';
    }
    
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappURL = `https://wa.me/${restaurantPhoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappURL, '_blank');
    });
}
```

---

## Monitoring & Analytics

### Track Messages

**Manual Tracking:**
- Note when you receive messages
- Track inquiry types
- Monitor response times

**With WhatsApp Business:**
- View message statistics
- Track response times
- Monitor customer satisfaction

**With Third-Party Services:**
- Full analytics dashboard
- Automated reporting
- Customer insights

---

## Next Steps

### Immediate (Today)
1. ✅ Update phone number in website
2. ✅ Test WhatsApp button
3. ✅ Send test message

### This Week
1. Download WhatsApp Business app (optional)
2. Set up business profile
3. Add quick replies
4. Enable away message

### This Month
1. Monitor message volume
2. Optimize response time
3. Gather customer feedback
4. Consider automation if needed

---

## Support

### If Something Doesn't Work

1. Check [WHATSAPP_SETUP.md](WHATSAPP_SETUP.md) troubleshooting section
2. Verify phone number format
3. Test URL directly: `https://wa.me/YOUR_NUMBER`
4. Check browser console (F12)
5. Try different browser

### Resources

- **WhatsApp Help:** https://faq.whatsapp.com/
- **WhatsApp Business:** https://www.whatsapp.com/business/
- **Your Website:** `assets/js/script.js`

---

## Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Get WhatsApp account | 5 min |
| 2 | Get your phone number | 1 min |
| 3 | Update website | 2 min |
| 4 | Customize message | 1 min |
| 5 | Test | 2 min |
| **Total** | **Connected!** | **11 min** |

---

## You're Connected! 🎉

Your restaurant website is now connected to WhatsApp.

**Customers can now:**
- Click the WhatsApp button
- Send you messages
- Get responses from you

**You can now:**
- Receive customer inquiries
- Respond to messages
- Build customer relationships

---

**Last Updated:** May 2026
**Version:** 1.0
**Difficulty:** ⭐ Very Easy
**Time Required:** 10-15 minutes
