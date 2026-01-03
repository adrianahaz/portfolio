class StackSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.data) return;

    const stackCards = this.data
      .map(
        (stack) => `
          <span class="stack__item">${stack}</span>
        `
      )
      .join('');

    this.innerHTML = `
      <ui-wrapper>
        <div class="stack">
          <div class="stack__header">
            <h2 class="stack__title">Stack Used</h2>
          </div>

          <div class="stack__carousel">
            <div class="stack__track">
              ${stackCards}
            </div>
            <div class="stack__track" aria-hidden="true">
              ${stackCards}
            </div>
          </div>
        </div>
      </ui-wrapper>
    `;
  }
}

customElements.define('stack-section', StackSection);
