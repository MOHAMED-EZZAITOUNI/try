// Mobile Menu Functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';

// Clone the navigation links for mobile
const navLinks = document.querySelector('.nav-links').cloneNode(true);
navLinks.classList.add('mobile-nav-links');
mobileMenu.appendChild(navLinks);

// Add close button
const closeButton = document.createElement('span');
closeButton.className = 'menu-close';
closeButton.innerHTML = '&times;';
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
mobileMenu.appendChild(closeButton);

document.body.appendChild(mobileMenu);

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuToggle) {
        mobileMenu.classList.remove('active');
    }
});

// Hardware card animations
const hardwareCards = document.querySelectorAll('.hardware-card');
hardwareCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const header = card.querySelector('.card-header');
        header.style.background = 'rgba(179, 7, 7, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        const header = card.querySelector('.card-header');
        header.style.background = 'rgba(179, 7, 7, 0.2)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
        }
    });
});

// Add scroll animation
window