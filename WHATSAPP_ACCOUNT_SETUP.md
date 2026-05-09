# WhatsApp Account Setup - Complete Guide

## Overview

There are several ways to connect WhatsApp to your restaurant website, depending on your needs and budget. This guide covers all options.

---

## Option 1: WhatsApp Business Account (Recommended for Most Restaurants)

### What It Is
- Free WhatsApp account specifically designed for businesses
- Same as regular WhatsApp but with business features
- Best for small to medium restaurants

### Setup Steps

#### Step 1: Download WhatsApp Business App
1. Go to your phone's app store (iOS App Store or Google Play Store)
2. Search for "WhatsApp Business"
3. Download and install the app
4. Open the app

#### Step 2: Create Account
1. Tap "Agree and Continue"
2. Enter your phone number (with country code)
   - Example: +39 351 234 5678
3. Verify with the code sent via SMS
4. Add your name and profile picture

#### Step 3: Set Up Business Profile
1. Go to Settings → Business Tools
2. Add business information:
   - Business name: "Ocean Table Restaurant"
   - Business description: "Premium Seafood Restaurant"
   - Business category: "Restaurant"
   - Business address: Your restaurant address
   - Business phone: Your restaurant phone
   - Website: Your website URL
   - Email: Your business email

#### Step 4: Enable Features
1. **Quick Replies** - Pre-written responses for common questions
   - "What are your hours?" → "Mon-Thu 12-23, Fri-Sat 12-00, Sun 12-22"
   - "Do you have reservations?" → "Yes, call us or use our website"
   - "Do you deliver?" → "Yes, we deliver within 5km"

2. **Away Messages** - Auto-reply when you're not available
   - "Thanks for contacting us! We'll respond within 1 hour"

3. **Greeting Message** - First message customers see
   - "Welcome to Ocean Table! How can we help you?"

#### Step 5: Get Your Phone Number
Your WhatsApp Business phone number is the one you registered with.

**Format for website button:**
- Remove the + sign
- Remove spaces and dashes
- Example: +39 351 234 5678 → 393512345678

### Update Your Website

Edit `assets/js/script.js`:
```javascript
const restaurantPhoneNumber = '393512345678'; // Your WhatsApp Business number
```

### Advantages
✅ Free
✅ Easy to set up
✅ Professional features
✅ Quick replies
✅ Away messages
✅ Business profile
✅ No coding required

### Disadvantages
❌ Manual message handling
❌ Limited automation
❌ No CRM integration
❌ Can't track analytics easily

---

## Option 2: WhatsApp Business API (For Advanced Features)

### What It Is
- Official WhatsApp API for businesses
- Allows automated messages, templates, and integrations
- Best for restaurants wanting advanced features

### Requirements
- Business account with Meta (Facebook)
- Monthly message costs ($0.01-$0.05 per message)
- Developer knowledge or agency help

### Setup Steps

#### Step 1: Create Meta Business Account
1. Go to https://business.facebook.com
2. Click "Create Account"
3. Enter business details:
   - Business name: "Ocean Table Restaurant"
   - Your name
   - Business email
   - Business phone

#### Step 2: Set Up WhatsApp Business Account
1. Go to https://www.whatsapp.com/business/
2. Click "Get Started"
3. Follow the setup wizard
4. Verify your phone number

#### Step 3: Get API Credentials
1. Go to Meta App Dashboard: https://developers.facebook.com/
2. Create a new app
3. Add WhatsApp product
4. Get your:
   - Phone Number ID
   - Business Account ID
   - Access Token

#### Step 4: Integrate with Website
You'll need a developer to integrate the API. Basic integration:

```javascript
// Example: Send message via WhatsApp API
async function sendWhatsAppMessage(phoneNumber, message) {
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const phoneNumberId = 'YOUR_PHONE_NUMBER_ID';
    
    const response = await fetch(
        `https://graph.instagram.com/v18.0/${phoneNumberId}/messages`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: phoneNumber,
                type: 'text',
                text: { body: message }
            })
        }
    );
    
    return response.json();
}
```

### Advantages
✅ Automated messages
✅ Message templates
✅ Analytics and reporting
✅ CRM integration
✅ Scalable
✅ Professional

### Disadvantages
❌ Costs money per message
❌ Complex setup
❌ Requires developer
❌ Longer approval process

### Costs
- Setup: Free
- Messages: $0.01-$0.05 per message (depending on country)
- Example: 1000 messages/month = $10-50

---

## Option 3: Third-Party WhatsApp Integration Services

### Popular Services

#### A. Twilio WhatsApp
- **Website:** https://www.twilio.com/whatsapp
- **Cost:** $0.01-0.05 per message
- **Setup:** 30 minutes
- **Features:** Automated messages, templates, webhooks

#### B. Messagebird
- **Website:** https://www.messagebird.com/en/whatsapp
- **Cost:** $0.01-0.05 per message
- **Setup:** 30 minutes
- **Features:** Chatbots, templates, analytics

#### C. Intercom
- **Website:** https://www.intercom.com/
- **Cost:** $39-99/month
- **Setup:** 1 hour
- **Features:** Full customer communication platform

#### D. Zendesk
- **Website:** https://www.zendesk.com/
- **Cost:** $49-199/month
- **Setup:** 1-2 hours
- **Features:** Customer support, ticketing, WhatsApp integration

#### E. Chatbot Builders (No-Code)
- **Landbot:** https://landbot.io/
- **ManyChat:** https://manychat.com/
- **Chatfuel:** https://chatfuel.com/
- **Cost:** $15-99/month
- **Setup:** 1-2 hours
- **Features:** Automated responses, lead capture

### Setup Example: Twilio

#### Step 1: Create Twilio Account
1. Go to https://www.twilio.com/
2. Sign up for free account
3. Verify your email

#### Step 2: Get WhatsApp Sandbox
1. Go to Twilio Console
2. Navigate to Messaging → WhatsApp
3. Click "Try it out"
4. Get your sandbox number

#### Step 3: Connect Your Number
1. Send "join [code]" to the sandbox number
2. Twilio will confirm connection

#### Step 4: Integrate with Website
```javascript
// Example: Send WhatsApp via Twilio
async function sendWhatsAppViaTwilio(toNumber, message) {
    const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            to: toNumber,
            message: message
        })
    });
    return response.json();
}
```

---

## Option 4: Simple Click-to-Chat (Current Implementation)

### What It Is
- Direct link to WhatsApp conversation
- No API or integration needed
- User clicks button → WhatsApp opens with pre-filled message

### How It Works
```
User clicks button
    ↓
Opens: https://wa.me/393512345678?text=Hello
    ↓
WhatsApp opens with your number
    ↓
Message pre-fills
    ↓
User sends message
    ↓
You receive on your phone
```

### Advantages
✅ Free
✅ No setup required
✅ Works immediately
✅ No coding needed
✅ Works on all devices

### Disadvantages
❌ Manual responses only
❌ No automation
❌ No analytics
❌ Messages go to personal phone

### Current Implementation
Your website already has this! Just update the phone number:

```javascript
const restaurantPhoneNumber = '393512345678'; // Your WhatsApp number
```

---

## Comparison Table

| Feature | Option 1 | Option 2 | Option 3 | Option 4 |
|---------|----------|----------|----------|----------|
| | WhatsApp Business | WhatsApp API | Third-Party | Click-to-Chat |
| **Cost** | Free | $0.01-0.05/msg | $15-200/mo | Free |
| **Setup Time** | 15 min | 2-4 hours | 30 min-2 hrs | Already done |
| **Automation** | Manual | Full | Partial | None |
| **Analytics** | Limited | Full | Full | None |
| **Complexity** | Easy | Hard | Medium | Very Easy |
| **Best For** | Small restaurants | Large chains | Growing restaurants | All restaurants |
| **Scalability** | Low | High | High | Low |

---

## Recommended Setup for Your Restaurant

### Phase 1: Start Simple (Week 1)
Use **Option 4 (Click-to-Chat)** - Already implemented!

1. Update phone number in `assets/js/script.js`
2. Test on website
3. Start receiving inquiries

### Phase 2: Add Business Features (Month 1)
Switch to **Option 1 (WhatsApp Business)**

1. Download WhatsApp Business app
2. Set up business profile
3. Add quick replies
4. Enable away messages

### Phase 3: Scale Up (Month 3+)
Consider **Option 2 or 3** if you get many inquiries

1. Evaluate message volume
2. Choose integration service
3. Set up automation
4. Track analytics

---

## Step-by-Step: Get Your Phone Number Ready

### Step 1: Decide on Phone Number
Options:
- Use existing restaurant phone
- Get dedicated WhatsApp Business number
- Use virtual number (Google Voice, Twilio)

### Step 2: Format for Website
```
Original: +39 351 234 5678
Website format: 393512345678

Remove: + sign, spaces, dashes
Keep: Country code + number
```

### Step 3: Update Website
Edit `assets/js/script.js`:
```javascript
const restaurantPhoneNumber = '393512345678';
```

### Step 4: Test
1. Open website
2. Click WhatsApp button
3. Should open WhatsApp with your number

---

## Best Practices

### Message Strategy
1. **Greeting Message**
   - "Welcome to Ocean Table! How can we help?"

2. **Quick Replies**
   - Hours: "Mon-Thu 12-23, Fri-Sat 12-00, Sun 12-22"
   - Reservations: "Yes, we accept reservations. How many people?"
   - Delivery: "Yes, we deliver within 5km. What's your address?"
   - Menu: "Check our menu at [website]"

3. **Away Message**
   - "Thanks for contacting us! We'll respond within 1 hour"

### Response Time
- ⏱️ Aim for < 1 hour response
- 📱 Check messages regularly
- 🔔 Enable notifications

### Customer Service
- Be professional and friendly
- Answer common questions quickly
- Use quick replies to save time
- Collect feedback

---

## Troubleshooting

### Button Not Working
- Verify phone number format (no + or spaces)
- Test URL: `https://wa.me/393512345678`
- Check if WhatsApp is installed/accessible

### Messages Not Arriving
- Verify phone number is correct
- Check WhatsApp is active on phone
- Ensure notifications are enabled

### Can't Receive Messages
- Phone must be online
- WhatsApp must be installed
- Number must be verified

---

## Security & Privacy

### Protect Your Number
- Don't share publicly (except on website)
- Use WhatsApp Business for business only
- Enable two-factor authentication
- Keep phone secure

### Customer Privacy
- Don't share customer numbers
- Follow GDPR/privacy laws
- Get consent before messaging
- Respect opt-out requests

---

## Next Steps

### Immediate (Today)
1. ✅ Update phone number in website
2. ✅ Test WhatsApp button
3. ✅ Start receiving messages

### This Week
1. Download WhatsApp Business app
2. Set up business profile
3. Add quick replies
4. Enable away messages

### This Month
1. Monitor message volume
2. Optimize response time
3. Gather customer feedback
4. Consider automation if needed

---

## Resources

### Official WhatsApp
- WhatsApp Business: https://www.whatsapp.com/business/
- WhatsApp API: https://developers.facebook.com/docs/whatsapp

### Integration Services
- Twilio: https://www.twilio.com/whatsapp
- Messagebird: https://www.messagebird.com/
- Intercom: https://www.intercom.com/
- Zendesk: https://www.zendesk.com/

### Chatbot Builders
- Landbot: https://landbot.io/
- ManyChat: https://manychat.com/
- Chatfuel: https://chatfuel.com/

---

## FAQ

**Q: Is WhatsApp Business free?**
A: Yes, the app is free. You only pay if you use the API.

**Q: Can I use my personal WhatsApp?**
A: Yes, but WhatsApp Business is recommended for restaurants.

**Q: How many messages can I send?**
A: Unlimited with WhatsApp Business app. API has costs.

**Q: Can I automate responses?**
A: Yes, with WhatsApp API or third-party services.

**Q: Do customers need WhatsApp?**
A: Yes, they need WhatsApp installed or WhatsApp Web access.

**Q: Is it secure?**
A: Yes, WhatsApp uses end-to-end encryption.

**Q: Can I track analytics?**
A: Limited with WhatsApp Business. Full analytics with API.

**Q: What if I get too many messages?**
A: Use quick replies, away messages, or hire staff.

---

**Last Updated:** May 2026
**Version:** 1.0
