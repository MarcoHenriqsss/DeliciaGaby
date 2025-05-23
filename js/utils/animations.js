export function setupAnimations() {
  // Add fade-in animations to elements when they come into view
  const animateElements = document.querySelectorAll('.section-title, .about-content, .contact-info, .contact-form');
  
  function checkVisibility() {
    animateElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8);
      
      if (isVisible) {
        element.classList.add('fadeIn');
      }
    });
  }
  
  // Add CSS animation classes
  const style = document.createElement('style');
  style.innerHTML = `
    .fadeIn {
      animation: fadeInAnimation 1s ease forwards;
    }
    
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .section-title, .about-content, .contact-info, .contact-form, .product-card {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
  
  // Check element visibility on scroll and on page load
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
}