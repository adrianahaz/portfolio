class UiWrapper extends HTMLElement {
  connectedCallback() {
    const padding = this.getAttribute("padding") || "20";
    const size = this.getAttribute("size");

    const style = `--ui-padding: ${padding}px; ${size ? `--ui-size: ${size}px` : ""}`;

    this.innerHTML = `
      <div class="ui-wrapper ${size ? "ui-wrapper--square" : ""}" style="${style}">
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define("ui-wrapper", UiWrapper);
