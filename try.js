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
        header.style.background = 'rgba(255, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        const header = card.querySelector('.card-header');
        header.style.background = 'rgba(94, 0, 0, 0.3)';
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
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    if (scrollPosition > 100) {
        navbar.style.background = 'rgba(26, 10, 58, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #1a0a3a, #3a0a0a)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
    }
});

// Animate hardware cards when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.animation = 'float 3s ease-in-out infinite';
        }
    });
}, observerOptions);

hardwareCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add magic particle effect
document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#ffcc00', '#ffffff'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 5 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.zIndex = '998';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-10px';
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        document.body.appendChild(particle);
        
        let posY = -10;
        const speed = Math.random() * 2 + 1;
        const sway = Math.random() * 4 - 2;
        let posX = parseFloat(particle.style.left);
        
        function animate() {
            posY += speed;
            posX += sway * 0.1;
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            
            if (posY < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }
        
        animate();
    }
    
    setInterval(createParticle, 100);
});