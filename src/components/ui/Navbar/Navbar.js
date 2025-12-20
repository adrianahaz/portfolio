class UiNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.styleSheets

    this.shadowRoot.innerHTML = `
      <nav>
        <div></div>
        <div>

        </div>
        <div></div>
      </nav>
    `;
  }
}

customElements.define('ui-navbar', UiNavbar);
