import { getIcons } from '../../../utils/getIcons.js';

class DetailsSection extends HTMLElement {
  connectedCallback() {
    this.render();
    getIcons();
  }

  render() {
    this.innerHTML = `
      <div class="details">
        <ui-wrapper>
          <div class="details__item">
            <h2 class="details__item-title">
              <i data-lucide="cloudy" class="details__item-icon"></i>
              <span>Last Year Commits</span>
            </h2>
            <span class="details__item-value">177</span>
          </div>
        </ui-wrapper>
        <ui-wrapper>
          <div class="details__item">
            <h2 class="details__item-title">
              <i data-lucide="atom" class="details__item-icon"></i>
              <span>Project Completed</span>
            </h2>
            <span class="details__item-value">5+</span>
          </div>
        </ui-wrapper>
      </div>
    `;
  }
}

customElements.define('details-section', DetailsSection);
