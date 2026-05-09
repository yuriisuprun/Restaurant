# WhatsApp Business - Quick Setup (15 Minutes)

## The Easiest Way to Get Started

This is the recommended approach for most restaurants. It's free, easy, and professional.

---

## What You'll Need

- ✅ A smartphone (iOS or Android)
- ✅ Your restaurant phone number
- ✅ 15 minutes of time

---

## Step-by-Step Setup

### Step 1: Download WhatsApp Business (2 minutes)

**On iPhone:**
1. Open App Store
2. Search "WhatsApp Business"
3. Tap "Get"
4. Tap "Install"
5. Wait for installation

**On Android:**
1. Open Google Play Store
2. Search "WhatsApp Business"
3. Tap "Install"
4. Wait for installation

### Step 2: Create Your Account (3 minutes)

1. Open WhatsApp Business app
2. Tap "Agree and Continue"
3. Enter your phone number with country code
   - Example: +39 351 234 5678
4. Tap "Next"
5. You'll receive an SMS with a verification code
6. Enter the code
7. Create a profile:
   - Name: Your name or "Ocean Table"
   - Profile picture: Your restaurant logo

### Step 3: Set Up Business Profile (5 minutes)

1. Tap the three dots (⋮) → Settings
2. Tap "Business Tools"
3. Fill in your business information:

**Business Name:**
```
Ocean Table Restaurant
```

**Business Description:**
```
Premium seafood restaurant with fresh daily catch. 
Mediterranean cuisine, sustainable sourcing.
```

**Business Category:**
- Select "Restaurant"

**Business Address:**
```
Via del Porto 123
Città Costiera, CC 12345
Italy
```

**Business Phone:**
```
+39 055 123 4567
```

**Website:**
```
https://yourdomain.com
```

**Email:**
```
info@yourdomain.com
```

**Hours:**
- Set your opening hours
- Example: Mon-Thu 12:00-23:00, Fri-Sat 12:00-00:00, Sun 12:00-22:00

### Step 4: Add Quick Replies (3 minutes)

Quick replies are pre-written responses to common questions.

1. Go to Settings → Business Tools → Quick Replies
2. Add these common responses:

**Reply 1: Hours**
- Shortcut: `hours`
- Message: "We're open Mon-Thu 12-23, Fri-Sat 12-00, Sun 12-22"

**Reply 2: Reservations**
- Shortcut: `reserve`
- Message: "Yes! We accept reservations. How many people and what time?"

**Reply 3: Delivery**
- Shortcut: `delivery`
- Message: "Yes, we deliver within 5km. What's your address?"

**Reply 4: Menu**
- Shortcut: `menu`
- Message: "Check our full menu at https://yourdomain.com/menu"

**Reply 5: Contact**
- Shortcut: `contact`
- Message: "Call us at +39 055 123 4567 or visit our website"

### Step 5: Enable Away Message (2 minutes)

1. Go to Settings → Business Tools → Away Message
2. Enable "Show away message"
3. Set message:
```
Thanks for contacting Ocean Table! 
We'll respond within 1 hour during business hours.
```

4. Set availability:
   - Available: Your business hours
   - Away: Outside business hours

---

## Update Your Website

Now update your website with your WhatsApp number.

### Find Your Phone Number

Your WhatsApp Business number is the one you registered with.

**Example:**
- Original: +39 351 234 5678
- For website: 393512345678

**Format:**
- Remove the + sign
- Remove spaces and dashes
- Keep country code + number

### Update Website

Edit: `assets/js/script.js`

Find this line (around line 280):
```javascript
const restaurantPhoneNumber = '393512345678';
```

Replace with your number:
```javascript
const restaurantPhoneNumber = '393512345678'; // Your WhatsApp Business number
```

**Example for Italy:**
```javascript
const restaurantPhoneNumber = '393512345678'; // +39 351 234 5678
```

**Example for USA:**
```javascript
const restaurantPhoneNumber = '12125551234'; // +1 212 555 1234
```

---

## Test It

1. Open your website in a browser
2. Scroll to the bottom-right
3. Look for the green WhatsApp button
4. Click it
5. WhatsApp should open with your number
6. Send a test message to yourself

---

## You're Done! 🎉

Your restaurant now has WhatsApp Business set up!

---

## Daily Usage

### Receiving Messages

1. Customers click the WhatsApp button on your website
2. Messages appear in WhatsApp Business app
3. You receive notifications
4. Reply to messages

### Responding to Messages

**Option 1: Type a response**
- Just type and send like normal WhatsApp

**Option 2: Use Quick Replies**
- Type the shortcut (e.g., `hours`)
- Select the quick reply
- Send

**Example:**
```
Customer: "What are your hours?"
You: Type "hours" → Select quick reply → Send
```

### Managing Messages

- **Pin important chats** - Long press → Pin
- **Archive chats** - Swipe left → Archive
- **Mute notifications** - Long press → Mute
- **Search messages** - Use search bar

---

## Pro Tips

### 1. Respond Quickly
- Aim for < 1 hour response time
- Customers appreciate fast replies
- Set notifications to "Always"

### 2. Use Quick Replies
- Saves time on common questions
- Consistent responses
- Professional appearance

### 3. Set Away Message
- Tells customers when you'll respond
- Manages expectations
- Reduces follow-up messages

### 4. Keep Profile Updated
- Update hours if they change
- Add seasonal information
- Keep description current

### 5. Be Professional
- Use proper grammar
- Be friendly and helpful
- Represent your restaurant well

### 6. Collect Information
- Ask for name and phone
- Get reservation details
- Note special requests

---

## Common Questions

**Q: Can I use my personal WhatsApp?**
A: Yes, but WhatsApp Business is better for restaurants.

**Q: Is it free?**
A: Yes, completely free.

**Q: Can I use it on multiple phones?**
A: No, one number per phone. But you can use WhatsApp Web on computer.

**Q: What if I get too many messages?**
A: Use quick replies to respond faster. Consider hiring help.

**Q: Can customers see my profile?**
A: Yes, they see your business info when they message you.

**Q: How do I backup messages?**
A: Settings → Chats → Chat backup

**Q: Can I schedule messages?**
A: Not in WhatsApp Business app. Use third-party services for this.

---

## Next Steps (Optional)

### Week 1
- ✅ Set up WhatsApp Business
- ✅ Update website
- ✅ Start receiving messages

### Week 2
- Monitor message volume
- Optimize quick replies
- Gather customer feedback

### Month 1
- Evaluate if you need automation
- Consider hiring staff if busy
- Track customer inquiries

### Month 3+
- If very busy, consider WhatsApp API
- Set up chatbots for common questions
- Integrate with CRM system

---

## Troubleshooting

### Messages Not Arriving
- Check phone is online
- Verify WhatsApp is installed
- Check notifications are enabled
- Restart app if needed

### Button Not Working on Website
- Verify phone number format (no + or spaces)
- Test: https://wa.me/393512345678
- Check browser console for errors

### Can't Find Quick Replies
- Go to Settings → Business Tools
- Make sure you're in WhatsApp Business (not regular WhatsApp)
- Restart app if needed

### Profile Not Showing
- Wait 24 hours for profile to update
- Refresh app
- Check all fields are filled

---

## Security Tips

### Protect Your Number
- Don't share publicly (except on website)
- Use strong phone password
- Enable two-factor authentication
- Keep phone updated

### Customer Privacy
- Don't share customer numbers
- Respect privacy requests
- Follow local privacy laws
- Delete old conversations if needed

---

## Resources

- **WhatsApp Business Help:** https://faq.whatsapp.com/business/
- **WhatsApp Business Features:** https://www.whatsapp.com/business/
- **Your Website:** Update `assets/js/script.js`

---

## Summary

| Step | Time | Action |
|------|------|--------|
| 1 | 2 min | Download WhatsApp Business |
| 2 | 3 min | Create account |
| 3 | 5 min | Set up business profile |
| 4 | 3 min | Add quick replies |
| 5 | 2 min | Enable away message |
| **Total** | **15 min** | **Done!** |

---

## You're All Set! 🚀

Your restaurant now has professional WhatsApp Business set up.

**Next:** Update your website phone number and start receiving customer inquiries!

---

**Last Updated:** May 2026
**Version:** 1.0
**Difficulty:** ⭐ Very Easy
**Time Required:** 15 minutes
