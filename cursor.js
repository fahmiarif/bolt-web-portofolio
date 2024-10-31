// Custom cursor
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
});