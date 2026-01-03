import { getAllProjects, getAllAssignments } from '../../data/projects.js';

class AppProjects extends HTMLElement {
  connectedCallback() {
    this.projects = getAllProjects();
    this.assignments = getAllAssignments();
    this.data = {
      projects: this.projects,
      assignments: this.assignments,
    };
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="app-projects">
        ${this.innerHTML}
      </main>
    `;

    const projectListSection = this.querySelector('project-list-section');
    if (projectListSection) {
      projectListSection.data = this.data;
    }
  }
}

customElements.define('app-projects', AppProjects);
