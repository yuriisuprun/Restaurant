# Ocean Table - Premium Seafood Restaurant Website

A modern, responsive restaurant website UI inspired by premium seafood dining experiences. This is a complete front-end prototype showcasing elegant design, smooth interactions, and mobile-first responsive layout.

## 🌊 Features

### Design & Layout
- **Modern Mediterranean-inspired design** with deep blue color palette
- **Fully responsive** layout that works on all devices
- **Smooth animations** and hover effects throughout
- **High-quality imagery** from Unsplash for seafood and restaurant ambiance
- **Clean typography** using Playfair Display (serif) and Inter (sans-serif)

### Navigation & Structure
- **Sticky navigation bar** with smooth scrolling
- **Mobile hamburger menu** for smaller screens
- **Multi-page architecture** with seamless navigation
- **Active link highlighting** based on scroll position

### Pages Included
1. **Homepage** (`index.html`)
   - Hero section with restaurant branding
   - About/Philosophy section
   - Menu preview with signature dishes
   - Locations showcase
   - Experience/Features section
   - Call-to-action for reservations
   - Work with us section

2. **Full Menu** (`pages/menu.html`)
   - Complete menu with categories
   - Raw Bar, Appetizers, Main Courses, Desserts
   - Elegant pricing display
   - Detailed dish descriptions

3. **Careers** (`pages/careers.html`)
   - Job listings with detailed descriptions
   - Benefits and perks showcase
   - Application process information
   - Team culture highlights

4.

### Interactive Elements
- **Smooth scroll navigation** between sections
- **Mobile-responsive hamburger menu**
- **Hover effects** on cards and buttons
- **Button click handlers** with placeholder functionality
- **Parallax effects** on hero section

## 🛠 Technical Implementation

### Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Interactive functionality
- **Font Awesome** - Icons throughout the site
- **Google Fonts** - Playfair Display and Inter typography

### File Structure
```
Restaurant/
├── index.html                 # Homepage
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       └── script.js         # Interactive functionality
├── pages/
│   ├── menu.html             # Full menu page
│   ├── careers.html          # Careers/jobs page
└── README.md                 # This file
```

### CSS Features
- **CSS Custom Properties** for consistent theming
- **CSS Grid & Flexbox** for responsive layouts
- **Smooth transitions** and hover effects
- **Mobile-first responsive design**
- **Accessibility-focused** styling with proper focus states

### JavaScript Functionality
- **Smooth scrolling** navigation
- **Mobile menu toggle** functionality
- **Scroll-based animations** using Intersection Observer
- **Active navigation highlighting**
- **Form interactions** and validation
- **Parallax effects** for enhanced visual appeal

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e3a8a` - Main brand color
- **Deep Blue**: `#1e40af` - Hover states and accents
- **Light Blue**: `#3b82f6` - Interactive elements
- **Accent Teal**: `#0891b2` - Sea-inspired highlights
- **White**: `#ffffff` - Clean backgrounds
- **Light Gray**: `#f8fafc` - Section backgrounds
- **Medium Gray**: `#64748b` - Text and subtle elements
- **Dark Gray**: `#334155` - Primary text color

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)
- **Responsive font sizing** with proper hierarchy

### Components
- **Buttons**: Primary, outline, and large variants
- **Cards**: Menu items, locations, team members
- **Forms**: Contact, applications
- **Navigation**: Desktop and mobile responsive

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adapted grid layouts)
- **Mobile**: <768px (stacked layouts, hamburger menu)

### Mobile Features
- **Hamburger menu** with smooth animations
- **Touch-friendly** button sizes and spacing
- **Optimized images** and loading performance
- **Readable typography** at all screen sizes

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Navigate through** the different pages using the menu
4. **Test responsiveness** by resizing the browser window

### Local Development
No build process required - this is a static HTML/CSS/JS website that runs directly in the browser.

For local development with live reload, you can use:
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Or simply open index.html directly in your browser
```

## 🎯 Key Features Demonstrated

### UI/UX Best Practices
- **Visual hierarchy** with proper typography scaling
- **Consistent spacing** using CSS custom properties
- **Intuitive navigation** with clear call-to-actions
- **Loading states** and smooth transitions
- **Accessibility considerations** with proper focus management

### Modern Web Development
- **Semantic HTML** structure
- **CSS Grid and Flexbox** for layouts
- **Mobile-first responsive design**
- **Progressive enhancement** approach
- **Performance optimization** with efficient CSS and JS

### Business Website Essentials
- **Clear value proposition** on homepage
- **Complete menu presentation**
- **Location information** and contact details
- **Career opportunities** section
- **Social media integration** placeholders

## 🔧 Customization

The website is built with customization in mind:

### Colors
Update CSS custom properties in `:root` to change the color scheme:
```css
:root {
    --primary-blue: #your-color;
    --deep-blue: #your-color;
    /* etc. */
}
```

### Content
- Replace placeholder text with actual restaurant information
- Update image URLs with real restaurant photos
- Modify menu items and pricing
- Customize location details

### Functionality
- Connect forms to actual backend services
- Integrate with reservation systems
- Connect social media links

## 📄 License

This is a UI prototype created for demonstration purposes. Images are sourced from Unsplash and are free to use. The code structure and design can be adapted for actual restaurant websites.

## 🤝 Contributing

This is a demonstration project, but suggestions for improvements are welcome:
- Enhanced animations and micro-interactions
- Additional page templates
- Improved accessibility features
- Performance optimizations

---

**Ocean Table** - Where fresh seafood meets elegant dining. This prototype showcases modern web design principles applied to the restaurant industry, demonstrating how to create engaging, responsive, and user-friendly dining experiences online.