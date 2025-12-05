// Hero Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-play carousel
let carouselInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

// Pause carousel on hover
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

heroSection.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
});

// Initialize first slide
showSlide(0);

// Toggle Offer Sections
function toggleOffer(sectionId) {
    const category = document.querySelector(`#${sectionId}`).closest('.offer-category');
    const isActive = category.classList.contains('active');
    
    // Close all other sections
    document.querySelectorAll('.offer-category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Toggle current section
    if (!isActive) {
        category.classList.add('active');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-links li a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.parentElement.classList.add('active');
            }
        }
    });
});

// Testimonial popup functionality (if needed)
// You can add click handlers to show/hide the popup image

// Scroll to top functionality
document.querySelector('.scroll-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});