class UiWrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="ui-wrapper">
        ${this.innerHTML}
      </section>
    `;
  }
}

customElements.define('ui-wrapper', UiWrapper);
