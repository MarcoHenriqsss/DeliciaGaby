export function renderHero() {
  const heroContainer = document.getElementById('hero');
  
  heroContainer.innerHTML = `
    <div class="hero-content">
      <h1 class="hero-title">Doces momentos, sabores inesquecíveis</h1>
      <p class="hero-description">
        Bem-vindo à Delícias da Gaby, onde cada doce é feito com amor e os melhores ingredientes.
        Experimente nossas criações artesanais que irão adoçar o seu dia!
      </p>
      <div class="hero-buttons">
        <a href="#products" class="btn">Ver Produtos</a>
        <a href="#contact" class="btn" style="background-color: transparent; color: var(--accent-color); border: 2px solid var(--accent-color);">Contato</a>
      </div>
    </div>
    <img src="assets/delicias.png" alt="Delícias da Gaby" class="hero-img">
  `;
}