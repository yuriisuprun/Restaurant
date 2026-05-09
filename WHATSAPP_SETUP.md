# WhatsApp Button Implementation Guide

## Overview
A sticky WhatsApp button has been added to your restaurant website, allowing customers to easily contact you via WhatsApp. The button is positioned at the bottom-right corner of the page and follows modern UX best practices.

## Features

### ✅ Best Practices Implemented

1. **Accessibility**
   - Proper ARIA labels for screen readers
   - Keyboard navigation support (Tab + Enter)
   - Focus-visible styles for keyboard users
   - Semantic HTML structure

2. **Performance**
   - Lightweight implementation (no external dependencies)
   - CSS animations using GPU-accelerated transforms
   - Smooth transitions and hover effects
   - Optimized for mobile devices

3. **User Experience**
   - Fixed positioning (always visible)
   - Smooth slide-in animation on page load
   - Hover effects with scale and shadow
   - Active state feedback
   - Responsive design for all screen sizes
   - Hidden on print view

4. **Mobile Optimization**
   - Responsive sizing (60px on desktop, 50px on mobile)
   - Proper spacing to avoid overlapping with other elements
   - Touch-friendly button size (minimum 44x44px recommended)

5. **Analytics Ready**
   - Built-in Google Analytics tracking (optional)
   - Event tracking for WhatsApp clicks

## Configuration

### Setting the Restaurant Phone Number

Edit the phone number in `assets/js/script.js`:

```javascript
// In the initWhatsAppButton() function
const restaurantPhoneNumber = '393512345678'; // Replace with your number
```

**Format Requirements:**
- Country code + phone number
- No spaces, dashes, or special characters
- Example: `+39 351 234 5678` → `393512345678`

### Common Country Codes
- Italy: `39`
- USA: `1`
- UK: `44`
- France: `33`
- Spain: `34`
- Germany: `49`

### Customizing the Default Message

Edit the default message in `assets/js/script.js`:

```javascript
// Italian version (default)
const defaultMessage = 'Ciao! Vorrei informazioni sul vostro ristorante.';

// English version
const defaultMessage = 'Hello! I would like information about your restaurant.';
```

## File Changes

### 1. HTML Files
- `index.html` - Added WhatsApp button element
- `en/index.html` - Added WhatsApp button element

### 2. CSS File
- `assets/css/style.css` - Added WhatsApp button styles with:
  - Fixed positioning
  - Gradient background (WhatsApp green)
  - Hover and active states
  - Animations
  - Responsive breakpoints
  - Print media query

### 3. JavaScript File
- `assets/js/script.js` - Added:
  - `initWhatsAppButton()` function
  - WhatsApp URL generation
  - Click event handling
  - Optional analytics tracking

## Styling Customization

### Change Button Color
Edit the gradient in `assets/css/style.css`:

```css
.whatsapp-button {
    background: linear-gradient(135deg, #25d366, #20ba5a);
    /* Change to your preferred colors */
}
```

### Adjust Button Position
```css
.whatsapp-button {
    bottom: 30px;  /* Distance from bottom */
    right: 30px;   /* Distance from right */
}
```

### Enable Pulse Animation
Uncomment in `assets/js/script.js`:

```javascript
// Add pulse animation on first load
whatsappButton.classList.add('pulse');

// Remove pulse after 5 seconds
setTimeout(() => {
    whatsappButton.classList.remove('pulse');
}, 5000);
```

## WhatsApp URL Format

The button uses the WhatsApp Web API:
```
https://wa.me/{PHONE_NUMBER}?text={MESSAGE}
```

- `{PHONE_NUMBER}`: International format without + or spaces
- `{MESSAGE}`: URL-encoded message text

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ IE 11+ (with graceful degradation)

## Mobile Behavior

On mobile devices:
- WhatsApp app opens directly if installed
- Falls back to WhatsApp Web if app not available
- Button size reduces to 50px for better mobile UX
- Proper spacing to avoid overlapping with other UI elements

## Analytics Integration

### Google Analytics (Optional)

The code includes optional Google Analytics tracking:

```javascript
if (window.gtag) {
    gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp Button'
    });
}
```

To enable:
1. Ensure Google Analytics is loaded on your page
2. The tracking will automatically fire when users click the button

## Testing

### Desktop Testing
1. Open the website in a browser
2. Scroll to any section
3. Click the green WhatsApp button
4. Should open WhatsApp Web or app with pre-filled message

### Mobile Testing
1. Open on mobile device
2. Click the WhatsApp button
3. Should open WhatsApp app with pre-filled message
4. Verify button size and positioning

### Accessibility Testing
1. Use Tab key to navigate to the button
2. Press Enter to activate
3. Verify focus outline is visible
4. Test with screen readers (NVDA, JAWS, VoiceOver)

## Troubleshooting

### Button Not Appearing
- Check if Font Awesome icons are loaded
- Verify `id="whatsapp-button"` exists in HTML
- Check browser console for JavaScript errors

### WhatsApp Not Opening
- Verify phone number format (no + or spaces)
- Test URL directly: `https://wa.me/393512345678`
- Ensure WhatsApp is installed or WhatsApp Web is accessible

### Message Not Pre-filling
- Check message encoding (URL encoding)
- Verify special characters are properly encoded
- Test with simple ASCII text first

## Best Practices for Your Restaurant

1. **Update Phone Number**: Replace the placeholder with your actual WhatsApp business number
2. **Customize Message**: Tailor the default message to your restaurant's needs
3. **Business Hours**: Consider adding business hours info in the message
4. **Quick Responses**: Set up WhatsApp Business to provide quick replies
5. **Monitor**: Track WhatsApp inquiries and respond promptly

## Example Messages

### Italian
```
Ciao! Vorrei prenotare un tavolo per [numero persone] persone il [data] alle [ora].
```

### English
```
Hello! I would like to make a reservation for [number] people on [date] at [time].
```

### Multi-language Support
You can detect the user's language and adjust the message accordingly in the JavaScript function.

## Future Enhancements

Potential improvements:
- Multi-language message support
- Different messages for different pages
- WhatsApp Business API integration
- Message templates for reservations
- Analytics dashboard
- A/B testing different messages

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify all files are in correct locations
3. Check browser console for errors
4. Test on different browsers and devices

---

**Last Updated:** May 2026
**Version:** 1.0
