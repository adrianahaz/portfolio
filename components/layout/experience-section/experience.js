class ExperienceSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.data) return;

    this.innerHTML = `
      <ui-wrapper>
        <div class="experience-section">
          <div class="section-title">
            <span class="section-title__icon"></span>
            <span class="section-title__label">Recent Work</span>
          </div>

          <div class="experience-section__list">
            ${this.data
              .map(
                (item) => `
              <div class="experience-item">
                <div class="experience-item-header">
                  <div class="experience-item-title">
                    <span>${item.title}</span>
                  </div>
                  <div class="experience-item-date">
                    <span>${item.date}</span>
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

customElements.define('experience-section', ExperienceSection);
