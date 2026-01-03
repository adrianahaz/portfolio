class AboutSection extends HTMLElement {
  constructor() {
    super();
    this.roleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typingSpeed = 150;
  }

  connectedCallback() {
    this.render();

    if (this.data && this.data.roles) {
      this.typeEffect();
    }
  }

  typeEffect() {
    const roles = this.data.roles;
    const currentRoles = roles[this.roleIndex];
    const targetElement = this.querySelector('.about__roles');

    if (!targetElement) return;

    if (this.isDeleting) {
      this.charIndex--;
      this.typingSpeed = 50;
    } else {
      this.charIndex++;
      this.typingSpeed = 150;
    }

    targetElement.textContent = currentRoles.substring(0, this.charIndex);

    if (!this.isDeleting && this.charIndex === currentRoles.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      this.typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), this.typingSpeed);
  }

  render() {
    if (!this.data) return;

    this.innerHTML = `
      <ui-wrapper>
        <div class="about">
          ${this.renderHeader()}
          ${this.renderContent()}
        </div>
      </ui-wrapper>
    `;
  }

  renderHeader() {
    return `
      <div class="about__header">
        <ui-capsule label="available for job"></ui-capsule>
        <h2 class="about__roles"></h2>
      </div>
    `;
  }

  renderContent() {
    return `
      <div class="about__content">
        <div class="about__avatar">
          <img src="${this.data.avatarImg}" alt="Avatar"></img>
        </div>

        <div class="about__detail">
          <div class="about__info">
            <h3 class="about__name">${this.data.name}</h3>
            <p class="about__description">${this.data.description}</p>
          </div>

          <div class="about__cta">
            <ui-button bg-color="E63E21" stroke-color="000000" label="Hire me" icon="plus"></ui-button>
            <ui-button label="Copy Email" icon="copy"></ui-button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('about-section', AboutSection);
