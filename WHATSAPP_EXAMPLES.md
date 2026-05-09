# WhatsApp Button - Configuration Examples

## Phone Number Examples by Country

### Italy (Your Current Setup)
```javascript
const restaurantPhoneNumber = '393512345678'; // +39 351 234 5678
```

### United States
```javascript
const restaurantPhoneNumber = '12125551234'; // +1 212 555 1234
```

### United Kingdom
```javascript
const restaurantPhoneNumber = '442071838750'; // +44 20 7183 8750
```

### France
```javascript
const restaurantPhoneNumber = '33123456789'; // +33 1 23 45 67 89
```

### Spain
```javascript
const restaurantPhoneNumber = '34912345678'; // +34 91 234 5678
```

### Germany
```javascript
const restaurantPhoneNumber = '493012345678'; // +49 30 123 45678
```

### Canada
```javascript
const restaurantPhoneNumber = '14165551234'; // +1 416 555 1234
```

### Australia
```javascript
const restaurantPhoneNumber = '61212345678'; // +61 2 1234 5678
```

## Message Examples

### Italian - Reservation Request
```javascript
const defaultMessage = 'Ciao! Vorrei prenotare un tavolo per 2 persone domani sera. Avete disponibilità?';
```

### Italian - General Inquiry
```javascript
const defaultMessage = 'Ciao! Vorrei informazioni sui vostri piatti e orari di apertura.';
```

### Italian - Delivery Inquiry
```javascript
const defaultMessage = 'Ciao! Fate consegne a domicilio? Quali sono i tempi e i costi?';
```

### English - Reservation Request
```javascript
const defaultMessage = 'Hello! I would like to make a reservation for 2 people tomorrow evening. Do you have availability?';
```

### English - General Inquiry
```javascript
const defaultMessage = 'Hello! I would like information about your dishes and opening hours.';
```

### English - Delivery Inquiry
```javascript
const defaultMessage = 'Hello! Do you offer home delivery? What are the delivery times and costs?';
```

### English - Special Occasion
```javascript
const defaultMessage = 'Hello! I\'m planning a special celebration. Can you help with catering or private dining?';
```

## Multi-Language Implementation

### Detect Language and Set Message
```javascript
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (!whatsappButton) return;
    
    const restaurantPhoneNumber = '393512345678';
    
    // Detect current language
    const currentLang = document.documentElement.lang || 'it';
    
    // Set message based on language
    let defaultMessage;
    if (currentLang === 'en') {
        defaultMessage = 'Hello! I would like information about your restaurant.';
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

## Different Messages for Different Pages

### Menu Page
```javascript
const defaultMessage = 'Ciao! Ho visto il vostro menu online. Potete dirmi di più su questo piatto?';
```

### Careers Page
```javascript
const defaultMessage = 'Ciao! Sono interessato a lavorare presso il vostro ristorante. Quali posizioni sono disponibili?';
```

### Locations Page
```javascript
const defaultMessage = 'Ciao! Vorrei visitare il vostro ristorante. Quali sono gli orari di apertura?';
```

## Advanced: Page-Specific Messages

```javascript
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (!whatsappButton) return;
    
    const restaurantPhoneNumber = '393512345678';
    
    // Determine current page
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

## CSS Customization Examples

### Change to Different Green Shade
```css
.whatsapp-button {
    background: linear-gradient(135deg, #128c7e, #075e54);
}
```

### Use Solid Color Instead of Gradient
```css
.whatsapp-button {
    background: #25d366;
}
```

### Add Border
```css
.whatsapp-button {
    border: 3px solid var(--white);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 
                inset 0 0 0 3px var(--white);
}
```

### Different Position (Top-Left)
```css
.whatsapp-button {
    bottom: auto;
    right: auto;
    top: 30px;
    left: 30px;
}
```

### Larger Button
```css
.whatsapp-button {
    width: 80px;
    height: 80px;
    font-size: 2.2rem;
}
```

### Square Button Instead of Circle
```css
.whatsapp-button {
    border-radius: 8px;
}
```

## Analytics Examples

### Track Different Events
```javascript
// Track with custom parameters
if (window.gtag) {
    gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp Button',
        'value': 1,
        'page_path': window.location.pathname
    });
}
```

### Track with User Properties
```javascript
if (window.gtag) {
    gtag('set', {'user_id': 'USER_ID'});
    gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp Button'
    });
}
```

## Business Hours Message

### Include Hours in Message
```javascript
const defaultMessage = `Ciao! Vorrei informazioni. 
Orari: Lun-Gio 12:00-23:00, Ven-Sab 12:00-00:00, Dom 12:00-22:00`;
```

## Special Offers Message

### Promote Special Offers
```javascript
const defaultMessage = 'Ciao! Sono interessato alla vostra offerta speciale. Potete darmi più dettagli?';
```

## Event/Catering Message

### For Special Events
```javascript
const defaultMessage = 'Ciao! Sto organizzando un evento. Potete aiutarmi con catering o spazi privati?';
```

## Testing URLs

### Test WhatsApp URL Directly
```
https://wa.me/393512345678?text=Ciao%21%20Vorrei%20informazioni%20sul%20vostro%20ristorante.
```

### URL Encoder Tool
Use an online URL encoder to test your messages:
- https://www.urlencoder.org/
- https://meyerweb.com/eric/tools/dencoder/

## Common Issues & Solutions

### Message Not Appearing
- Check URL encoding
- Verify special characters are encoded
- Test with simple ASCII text first

### Phone Number Not Working
- Remove all spaces and special characters
- Include country code
- Test format: `https://wa.me/PHONENUMBER`

### Button Not Showing
- Verify Font Awesome is loaded
- Check browser console for errors
- Ensure `id="whatsapp-button"` exists in HTML

## Performance Tips

### Lazy Load WhatsApp Icon
```javascript
// Load Font Awesome only when needed
if (!document.querySelector('link[href*="font-awesome"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(link);
}
```

### Debounce Click Events
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedWhatsAppClick = debounce(function() {
    // Handle click
}, 300);
```

---

**Last Updated:** May 2026
**Version:** 1.0
