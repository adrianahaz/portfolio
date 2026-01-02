import { getAboutData, getExperienceData } from '../../data/home.js';

class AppHome extends HTMLElement {
  connectedCallback() {
    this.aboutData = getAboutData();
    this.experienceData = getExperienceData();
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="app-home">
        ${this.innerHTML}
      </main>
    `;

    const aboutSection = this.querySelector('about-section');
    if (aboutSection) {
      aboutSection.data = this.aboutData;
    }

    const experienceSection = this.querySelector('experience-section');
    if (experienceSection) {
      experienceSection.data = this.experienceData;
    }
  }
}

customElements.define('app-home', AppHome);
