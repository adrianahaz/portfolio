class EducationSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.data) return;

    this.innerHTML = `
      <ui-wrapper>
        <div class="education">
        <div class="education__header">
        <span class="education__icon"></span>
        <h2 class="education__label">Education</h2>
          </div>

          <div class="education__list">
            ${this.data
              .map(
                (item) => `
                  <div class="education__item">
                    <div class="education__item-header">
                      <div class="education__item-title">
                        <span class="education__item-title-text">${item.title}</span>
                      </div>
                      <div class="education__item-title">
                        <span class="education__item-title-text">${item.institution}</span>
                      </div>
                      <div class="education__item-date">
                        <span class="education__item-date-text">${item.date}</span>
                      </div>
                    </div>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </ui-wrapper>
    `;
  }
}

customElements.define('education-section', EducationSection);
