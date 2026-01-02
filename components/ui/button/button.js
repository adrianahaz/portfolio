import { getIcons } from '../../../utils/getIcons.js';

class UiButton extends HTMLElement {
  connectedCallback() {
    const bgColor = this.getAttribute('bg-color') || '161616';
    const strokeColor = this.getAttribute('stroke-color') || '262626';
    const label = this.getAttribute('label') || 'Button';
    const icon = this.getAttribute('icon') || 'plus';

    this.render(bgColor, strokeColor, label, icon);
    getIcons();
  }

  render(bgColor, strokeColor, label, icon) {
    this.innerHTML = `
      <div class="ui-button" style="--bg-button-color: #${bgColor}; --stroke-button-color: #${strokeColor};">
        <span>${label}</span>
        <button class="ui-button__icon">
          <i data-lucide="${icon}" class="button-icon"></i>
        </button>
      </div>
    `;
  }
}

customElements.define('ui-button', UiButton);
