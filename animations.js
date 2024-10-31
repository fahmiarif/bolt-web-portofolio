// Typing animation
const text = "John Doe";
const typingText = document.querySelector('.typing-text');
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    }
}

// Start typing animation after a delay
setTimeout(type, 1000);

// Reveal animations on scroll
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', reveal);

// Particle animation
const particlesContainer = document.querySelector('.particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(37, 99, 235, ${Math.random() * 0.5 + 0.5});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        border-radius: 50%;
        animation: float ${Math.random() * 3 + 2}s infinite linear;
    `;
    particlesContainer.appendChild(particle);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(-20px) translateX(10px);
        }
        100% {
            transform: translateY(0) translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});