// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
  
        sections.forEach(section => {
          section.classList.add('hidden');
        });
  
        targetSection.classList.remove('hidden');
      });
    });
  });
  
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });
  