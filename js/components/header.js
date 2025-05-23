export function renderHeader() {
  const headerContainer = document.getElementById('header');
  
  headerContainer.classList.add('header');
  
  headerContainer.innerHTML = `
    <div class="nav-container">
      <a href="#" class="logo">
        <img src="assets/delicias.png" alt="Delícias da Gaby Logo" />
        <span class="logo-text">Delícias da Gaby</span>
      </a>
      <nav>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
          <li class="nav-item"><a href="#products" class="nav-link">Produtos</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">Sobre</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contato</a></li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
  `;
  
  // Add event listeners
  const hamburger = headerContainer.querySelector('.hamburger');
  const navMenu = headerContainer.querySelector('.nav-menu');
  const navLinks = headerContainer.querySelectorAll('.nav-link');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Add scroll event for header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerContainer.classList.add('scrolled');
    } else {
      headerContainer.classList.remove('scrolled');
    }
  });
}