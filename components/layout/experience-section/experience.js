class ExperienceSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.data) return;

    this.innerHTML = `
      <ui-wrapper>
        <div class="experience">
          <div class="experience__header">
            <span class="experience__icon"></span>
            <h2 class="experience__label">Recent Work</h2>
          </div>

          <div class="experience__list">
            ${this.data
              .map(
                (item) => `
                  <div class="experience__item">
                    <div class="experience__item-header">
                      <div class="experience__item-title">
                        <span class="experience__item-title-text">${item.title}</span>
                      </div>
                      <div class="experience__item-date">
                        <span class="experience__item-date-text">${item.date}</span>
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
