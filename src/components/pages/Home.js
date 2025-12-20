import '../ui/Navbar/Navbar.js';

class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<ui-navbar></ui-navbar>`;
  }
}

customElements.define('home-page', HomePage);
