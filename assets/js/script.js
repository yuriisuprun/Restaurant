// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initSmoothScrolling();
    initAnimations();
    initMobileMenu();
    
    // Initialize language system after a short delay to ensure translations.js is loaded
    setTimeout(() => {
        if (window.languageManager) {
            window.languageManager.init();
        }
    }, 100);
});

// Navbar functionality
function initNavbar() {
    const header = document.getElementById('header');
    const navbar = document.querySelector('.navbar');
    
    // Handle scroll effects
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const hamburger = document.getElementById('hamburger');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-card, .location-card, .feature, .about-text, .about-image, .work-text, .work-image');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Button interactions
document.addEventListener('click', function(e) {
    // Book Now buttons
    if (e.target.textContent === 'Book Now' || e.target.closest('.btn')?.textContent === 'Book Now') {
        e.preventDefault();
        showBookingModal();
    }
    
    // Delivery button
    if (e.target.textContent === 'Delivery' || e.target.closest('.btn')?.textContent === 'Delivery') {
        e.preventDefault();
        showDeliveryModal();
    }
    
    // View Full Menu button
    if (e.target.textContent === 'View Full Menu') {
        e.preventDefault();
        showMenuModal();
    }
    
    // View Details buttons
    if (e.target.textContent === 'View Details') {
        e.preventDefault();
        const locationCard = e.target.closest('.location-card');
        const locationName = locationCard.querySelector('.location-name').textContent;
        showLocationDetails(locationName);
    }
    
    // View Opportunities button
    if (e.target.textContent === 'View Opportunities') {
        e.preventDefault();
        showCareersModal();
    }
});

// Modal functions (placeholder implementations)
function showBookingModal() {
    alert('Booking system would open here. This is a UI prototype.');
}

function showDeliveryModal() {
    alert('Delivery ordering system would open here. This is a UI prototype.');
}

function showMenuModal() {
    alert('Full menu would be displayed here. This is a UI prototype.');
}

function showLocationDetails(locationName) {
    alert(`Details for ${locationName} location would be shown here. This is a UI prototype.`);
}

function showCareersModal() {
    alert('Career opportunities page would open here. This is a UI prototype.');
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
initLazyLoading();

// Form validation (for future contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Newsletter signup (placeholder)
function handleNewsletterSignup(email) {
    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

// Social media sharing (placeholder)
function shareOnSocialMedia(platform, url, text) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        instagram: '#' // Instagram doesn't support direct URL sharing
    };
    
    if (shareUrls[platform] && shareUrls[platform] !== '#') {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization - debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    
    // Update progress indicator if exists
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console message for developers
console.log('🐟 Ocean Table - Premium Seafood Restaurant');
console.log('This is a UI prototype showcasing modern web design principles.');
console.log('Built with vanilla HTML, CSS, and JavaScript.');

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Initialize tooltips (if needed in future)
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}