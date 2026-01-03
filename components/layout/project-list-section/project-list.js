class ProjectListSection extends HTMLElement {
  constructor() {
    super();
    this.currentTab = 'assignments';
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  get data() {
    return this._data;
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleTabClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleTabClick);
  }

  handleTabClick(e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const newTab = btn.getAttribute('data-tab');
    if (this.currentTab !== newTab) {
      this.currentTab = newTab;
      this.render();
    }
  }

  render() {
    if (!this.data) return;

    const displayData =
      this.currentTab === 'assignments'
        ? this.data.assignments
        : this.data.projects;

    this.innerHTML = `
      <div class="project-list">
          <div class="project-list__tabs">
            <div class="tabs-slider" style="transform: translateX(${this.currentTab === 'assignments' ? '0' : '100%'})"></div>
            <button type="button" class="tab-btn ${this.currentTab === 'assignments' ? 'active' : ''}" data-tab="assignments">Assignments</button>
            <button type="button" class="tab-btn ${this.currentTab === 'projects' ? 'active' : ''}" data-tab="projects">Projects</button>
          </div>

        <div class="project-list__content ${this.currentTab === 'projects' ? 'p-active' : ''}">
          ${
            displayData && displayData.length > 0
              ? displayData.map((item) => this.renderCard(item)).join('')
              : '<ui-wrapper><p style="color: white; text-align: center;">No data available</p></ui-wrapper>'
          }
        </div>
      </div>
    `;
  }

  renderCard(item) {
    return `
      <ui-wrapper>
        <h2 class="project-list__week">${item.meeting || 'Project'}</h2>
        <div class="project-list__wrapper">
          <div class="project-list__item">
            <h3 class="project-list__title">${item.title}</h3>
            ${item.description ? `<p class="project-list__description">${item.description}</p>` : ''}
            <div class="project-list__actions">
              <a href="${item.repo}" class="project-list__action repo" target="_blank">Repository</a>
              <a href="${item.link}" class="project-list__action demo" target="_blank">Live Demo</a>
            </div>
          </div>
          ${
            item.practice
              ? item.practice
                  .map(
                    (p) => `
            <div class="project-list__item">
              <h3 class="project-list__title">${p.title}</h3>
              <div class="project-list__actions">
                <a href="${p.repo}" class="project-list__action repo" target="_blank">Repository</a>
                <a href="${p.link}" class="project-list__action demo" target="_blank">Live Demo</a>
              </div>
            </div>
          `
                  )
                  .join('')
              : ''
          }
        </div>
      </ui-wrapper>
    `;
  }
}

customElements.define('project-list-section', ProjectListSection);
