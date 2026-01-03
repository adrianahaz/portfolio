class UiCapsule extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    this.render(label);
  }

  render(label) {
    this.innerHTML = `
      <div class="ui-capsule">
        <span class="ui-capsule--icon"></span>
        <span class="ui-capsule--label">${label}</span>
      </div>
    `;
  }
}

customElements.define('ui-capsule', UiCapsule);
