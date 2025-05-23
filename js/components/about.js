export function renderAbout() {
  const aboutContainer = document.getElementById('about');
  
  aboutContainer.innerHTML = `
    <div class="container about-container">
      <div class="about-content">
        <h2 class="about-title">Sobre a Delícias da Gaby</h2>
        <p class="about-description">
          A Delícias da Gaby nasceu da paixão pela confeitaria e do desejo de transformar momentos comuns em experiências especiais através de sabores únicos.
        </p>
        <p class="about-description">
          Cada produto é feito artesanalmente, com ingredientes selecionados e muito carinho, para garantir que você tenha uma experiência inesquecível com nossos doces.
        </p>
        <ul class="values-list">
          <li class="value-item">
            <span class="value-icon">
              <i class="fas fa-heart"></i>
            </span>
            <span class="value-text">Produtos feitos com amor e dedicação</span>
          </li>
          <li class="value-item">
            <span class="value-icon">
              <i class="fas fa-leaf"></i>
            </span>
            <span class="value-text">Ingredientes frescos e de qualidade</span>
          </li>
          <li class="value-item">
            <span class="value-icon">
              <i class="fas fa-star"></i>
            </span>
            <span class="value-text">Receitas exclusivas e saborosas</span>
          </li>
        </ul>
      </div>
      <div class="about-image">
        <img src="assets/bolo.jpg" alt="Confeitaria Delícias da Gaby">
      </div>
    </div>
  `;
}