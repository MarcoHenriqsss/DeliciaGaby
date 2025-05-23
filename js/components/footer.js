export function renderFooter() {
  const footerContainer = document.getElementById('footer');
  
  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-container">
        <div class="footer-section">
          <h3 class="footer-title">Delícias da Gaby</h3>
          <p>
            Transformando momentos comuns em experiências especiais através de sabores únicos e irresistíveis.
          </p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Links Rápidos</h3>
          <ul class="footer-links">
            <li class="footer-link"><a href="#">Início</a></li>
            <li class="footer-link"><a href="#products">Produtos</a></li>
            <li class="footer-link"><a href="#about">Sobre</a></li>
            <li class="footer-link"><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Horário de Funcionamento</h3>
          <ul class="opening-hours">
            <li>
              <span class="day">Segunda:</span>
              <span>9h - 18h</span>
            </li>
            <li>
              <span class="day">Terça:</span>
              <span>9h - 18h</span>
            </li>
            <li>
              <span class="day">Quarta:</span>
              <span>9h - 18h</span>
            </li>
            <li>
              <span class="day">Quinta:</span>
              <span>9h - 18h</span>
            </li>
            <li>
              <span class="day">Sexta:</span>
              <span>9h - 18h</span>
            </li>
            <li>
              <span class="day">Sábado:</span>
              <span>9h - 13h</span>
            </li>
            <li>
              <span class="day">Domingo:</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">
          &copy; ${new Date().getFullYear()} Delícias da Gaby. Todos os direitos reservados. Feito com <span class="heart">❤</span>
        </p>
      </div>
    </div>
  `;
}