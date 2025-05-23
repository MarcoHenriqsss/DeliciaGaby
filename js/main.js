import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderProducts } from './components/products.js';
import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { setupAnimations } from './utils/animations.js';
import { createBgPattern } from './utils/bgPattern.js';

// Product data
const products = [
  {
    id: 1,
    name: 'Pudim de Leite',
    description: 'Delicioso pudim de leite condensado com calda de caramelo.',
    price: 'Disponivel',
    image: 'pudim.jpg',
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Bolo de Limão',
    description: 'Bolo de limão com cobertura.',
    price: 'Disponivel',
    image: 'bolo.jpg',
    isBestSeller: false
  },
  {
    id: 3,
    name: 'Palha Italiana',
    description: 'Palha italiana tradicional feita com chocolate belga.',
    price: 'Disponivel',
    image: 'palha.jpg',
    isBestSeller: false
  },
  {
    id: 4,
    name: 'Mousse de Maracujá',
    description: 'Mousse de maracujá com calda e sementes frescas.',
    price: 'Disponivel',
    image: 'mousse.jpg',
    isBestSeller: false
  },
  {
    id: 5,
    name: 'Bolo de Cenoura',
    description: 'Clássico e fofinho, com cobertura de chocolate irresistível.',
    price: 'Disponivel',
    image: 'bolo2.jpg',
    isBestSeller: true
  },
  {
    id: 6,
    name: 'Bolo no pote',
    description: 'Camadas de sabor e cremosidade em cada colherada.',
    price: 'Disponivel',
    image: 'bolo3.jpg',
    isBestSeller: false
  },
  {
    id: 7,
    name: 'Bolo de Milharina',
    description: 'Fofinho, dourado e com sabor de milho que encanta',
    price: 'Disponivel',
    image: 'bolo4.jpg',
    isBestSeller: false
  },
  {
    id: 8,
    name: 'Cookies Artesanais',
    description: 'Cookies de chocolate com gotas de chocolate belga.',
    price: 'Disponivel',
    image: 'cookies.jpg',
    isBestSeller: false
  }
];

// Initialize the application
function initApp() {
  const appContainer = document.querySelector('#app');
  
  // Create SVG background pattern
  createBgPattern();
  
  // Build the page structure
  appContainer.innerHTML = `
    <header id="header"></header>
    <main>
      <section id="hero" class="hero"></section>
      <section id="products" class="products section"></section>
      <section id="about" class="about section"></section>
      <section id="contact" class="contact section"></section>
    </main>
    <footer id="footer" class="footer"></footer>
  `;
  
  // Render components
  renderHeader();
  renderHero();
  renderProducts(products);
  renderAbout();
  renderContact();
  renderFooter();
  
  // Setup animations and interactions
  setupAnimations();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);