export function renderContact() {
  const contactContainer = document.getElementById('contact');
  
  contactContainer.innerHTML = `
    <div class="container contact-container">
      <div class="contact-info">
        <h2 class="contact-title">Entre em Contato</h2>
        <p class="contact-text">
          Estamos ansiosos para adoçar seus momentos especiais! Entre em contato para fazer seu pedido ou tirar dúvidas.
        </p>
        <ul class="contact-details">
          <li class="contact-item">
            <span class="contact-icon">
              <i class="fab fa-whatsapp"></i>
            </span>
            <span>
              <strong>WhatsApp:</strong><br>
              <a href="https://wa.me/556282436530" target="_blank">+55 62 8243-6530</a>
            </span>
          </li>
          <li class="contact-item">
            <span class="contact-icon">
              <i class="fab fa-instagram"></i>
            </span>
            <span>
              <strong>Instagram:</strong><br>
              <a href="https://instagram.com/delicias_gaby0" target="_blank">@delicias_gaby0</a>
            </span>
          </li>
          <li class="contact-item">
            <span class="contact-icon">
              <i class="far fa-clock"></i>
            </span>
            <span>
              <strong>Horário de Atendimento:</strong><br>
              Segunda a Sexta: 9h às 18h<br>
              Sábado: 9h às 13h
            </span>
          </li>
        </ul>
        <div class="social-links">
          <a href="https://instagram.com/delicias_gaby0" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/556282436530" target="_blank" class="social-link">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div class="contact-form">
        <form id="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Nome</label>
            <input type="text" id="name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">Telefone</label>
            <input type="tel" id="phone" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Mensagem</label>
            <textarea id="message" class="form-control" required></textarea>
          </div>
          <button type="submit" class="btn">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  `;
  
  // Add form submission event
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    // For this example, we'll just show an alert
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
  });
}
