class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ui-wrapper>
        <footer class="footer">
          <ui-capsule label="Available for job"></ui-capsule>

          <ul class="footer__list">
            <li><a href="https://instagram.com/adrhmdlz">Instagram</a></li>
            <li><a href="https://github.com/adrianahaz">GitHub</a></li>
            <li><a href="https://linkedin.com/in/adrhmdlz">LinkedIn</a></li>
          </ul>

          <span>&copy;2026 Adrianahaz</span>
        </footer>
      </ui-wrapper>
    `;
  }
}

customElements.define('footer-section', Footer);
