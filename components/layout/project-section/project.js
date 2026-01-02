import { getIcons } from '../../../utils/getIcons.js';

class ProjectSection extends HTMLElement {
  connectedCallback() {
    this.render();
    getIcons();
  }

  render() {
    if (!this.data) return;

    const projectCards = this.data
      .map(
        (project) => `
        <a href="${project.url}" target="_blank" class="project-wrapper">
          <img src="${project.image}" alt="${project.title}">
            <span class="project-title">${project.title}</span>
          </img>
        </a>
      `
      )
      .join('');

    this.innerHTML = `
      <ui-wrapper>
        <div class="project">
          <div class="project__header">
            <h2 class="project__title">Projects</h2>
            <a href="/projects.html" class="project__header-link">
              <i data-lucide="arrow-up-right" class="project__header-icon"></i>
            </a>
          </div>

          <div class="project__carousel">
            <div class="project__track">
              ${projectCards}
            </div>
            <div class="project__track" aria-hidden="true">
              ${projectCards}
            </div>
          </div>
        </div>
      </ui-wrapper>
    `;
  }
}

customElements.define('project-section', ProjectSection);
