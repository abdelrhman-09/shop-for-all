// === MOBILE MENU TOGGLE ===
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
  
    // Toggle menu on small screens
    logo.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  
    // Gallery image zoom effect
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        img.classList.toggle('zoom');
      });
    });
});

// === ANIMATE HERO TEXT ON LOAD ===
window.onload = () => {
  const heroText = document.querySelector('.hero h1');
  heroText.style.animation = 'bounce 1s ease';
};

// Add bounce animation via JS (optional)
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;
document.head.appendChild(style);
