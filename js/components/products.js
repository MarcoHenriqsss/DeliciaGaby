export function renderProducts(products) {
  const productsContainer = document.getElementById('products');
  
  productsContainer.innerHTML = `
    <div class="container">
      <h2 class="section-title">Nossos Produtos</h2>
      <div class="products-grid">
        ${products.map(product => renderProductCard(product)).join('')}
      </div>
    </div>
  `;
  
  // Add animation on scroll
  const productCards = document.querySelectorAll('.product-card');
  
  function checkVisibility() {
    productCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8);
      
      if (isVisible) {
        card.classList.add('fadeIn');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check on initial load
}

function renderProductCard(product) {
  return `
    <div class="product-card">
      ${product.isBestSeller ? '<span class="product-badge">Mais Vendido</span>' : ''}
      <div class="product-img-container">
        <img src="assets/${product.image}" alt="${product.name}" class="product-img">
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
      </div>
    </div>
  `;
}