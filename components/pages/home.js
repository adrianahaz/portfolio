import {
  getAboutData,
  getExperienceData,
  getProjectsData,
  getEducationData,
  getStackData,
} from '../../data/home.js';

class AppHome extends HTMLElement {
  connectedCallback() {
    this.aboutData = getAboutData();
    this.experienceData = getExperienceData();
    this.projectsData = getProjectsData();
    this.educationData = getEducationData();
    this.stackData = getStackData();
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

    const projectsSection = this.querySelector('project-section');
    if (projectsSection) {
      projectsSection.data = this.projectsData;
    }

    const educationSection = this.querySelector('education-section');
    if (educationSection) {
      educationSection.data = this.educationData;
    }

    const stackSection = this.querySelector('stack-section');
    if (stackSection) {
      stackSection.data = this.stackData;
    }
  }
}

customElements.define('app-home', AppHome);
