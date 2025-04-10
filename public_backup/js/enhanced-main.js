// Enhanced JavaScript for Vantage Notary Website with animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                this.classList.toggle('active');
                const answer = this.nextElementSibling;
                answer.classList.toggle('show');
            });
        });
    }
    
    // Initialize Simple Map if map container exists
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        createSimpleMap();
    }
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add hover effects to service cards
    addCardHoverEffects();
});

// Simple Map creation function that doesn't require Google Maps API
function createSimpleMap() {
    const mapContainer = document.getElementById('map');
    
    // Create a simple map representation
    mapContainer.innerHTML = `
        <div class="simple-map">
            <div class="map-background">
                <div class="service-area-circle"></div>
                <div class="map-marker bluffton-marker" title="Bluffton">
                    <div class="marker-pin"></div>
                    <div class="marker-label">Bluffton</div>
                </div>
                <div class="map-marker fort-wayne-marker" title="Fort Wayne">
                    <div class="marker-pin"></div>
                    <div class="marker-label">Fort Wayne</div>
                </div>
                <div class="map-roads">
                    <div class="road road-1"></div>
                    <div class="road road-2"></div>
                </div>
            </div>
            <div class="map-legend">
                <div class="legend-item">
                    <div class="legend-marker"></div>
                    <div class="legend-text">Service Locations</div>
                </div>
                <div class="legend-item">
                    <div class="legend-circle"></div>
                    <div class="legend-text">30-mile Service Area</div>
                </div>
            </div>
        </div>
    `;
    
    // Add CSS for the simple map
    const mapStyle = document.createElement('style');
    mapStyle.textContent = `
        .simple-map {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            background: linear-gradient(145deg, #f0f0f5, #e8eaf6);
        }
        
        .map-background {
            width: 100%;
            height: 100%;
            position: relative;
        }
        
        .service-area-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            border-radius: 50%;
            border: 2px solid #1A365D;
            background-color: rgba(201, 169, 92, 0.2);
            box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.05),
                        inset -3px -3px 6px rgba(255, 255, 255, 0.5);
        }
        
        .map-marker {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
            animation: pulse 2s infinite alternate;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
        }
        
        .marker-pin {
            width: 16px;
            height: 16px;
            background-color: #1A365D;
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .marker-label {
            margin-top: 5px;
            font-weight: bold;
            color: #1A365D;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 2px 5px;
            border-radius: 3px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .bluffton-marker {
            bottom: 40%;
            left: 35%;
        }
        
        .fort-wayne-marker {
            top: 30%;
            right: 35%;
        }
        
        .map-roads {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .road {
            position: absolute;
            background: linear-gradient(to right, #C9A95C, #d8c08f);
            height: 4px;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .road-1 {
            width: 40%;
            top: 45%;
            left: 30%;
            transform: rotate(30deg);
        }
        
        .road-2 {
            width: 30%;
            bottom: 35%;
            right: 25%;
            transform: rotate(-15deg);
        }
        
        .map-legend {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 10px;
            border-radius: 5px;
            z-index: 20;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }
        
        .legend-marker {
            width: 12px;
            height: 12px;
            background-color: #1A365D;
            border: 2px solid white;
            border-radius: 50%;
            margin-right: 8px;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .legend-circle {
            width: 12px;
            height: 12px;
            border: 2px solid #1A365D;
            background-color: rgba(201, 169, 92, 0.2);
            border-radius: 50%;
            margin-right: 8px;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .legend-text {
            font-size: 12px;
            color: #1A365D;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .map-marker {
                animation: none;
            }
        }
    `;
    
    document.head.appendChild(mapStyle);
}

// Add animation classes to elements
function addAnimationClasses() {
    // Add fade-in class to key elements
    const elementsToAnimate = [
        '.hero h1',
        '.hero p',
        '.hero-buttons',
        '.section h2',
        '.service-card',
        '.about-content',
        '.contact-form',
        '.contact-info',
        '.faq-container',
        '.service-detail h2',
        '.service-info-card'
    ];
    
    elementsToAnimate.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('fade-in');
            // Add visible class with a delay based on index
            setTimeout(() => {
                element.classList.add('visible');
            }, 100 + (index * 100));
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Add animate-on-scroll class to elements
    const scrollElements = [
        '.service-card',
        '.service-info-card',
        '.about-content > div',
        '.contact-grid > div',
        '.faq-item'
    ];
    
    scrollElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('animate-on-scroll');
        });
    });
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Handle scroll animation
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger once on load
    handleScrollAnimation();
}

// Add hover effects to service cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.service-card, .service-info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '12px 12px 20px rgba(0, 0, 0, 0.15), -12px -12px 20px rgba(255, 255, 255, 0.9)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Form validation
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Validate name
    if (name.trim() === '') {
        displayError('name', 'Please enter your name');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (message.trim() === '') {
        displayError('message', 'Please enter your message');
        isValid = false;
    }
    
    return isValid;
}

// Display error message
function displayError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}
