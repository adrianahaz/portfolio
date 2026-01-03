import { getIcons } from '../../../utils/getIcons.js';

class UiNavbar extends HTMLElement {
  connectedCallback() {
    this.location = window.location.pathname;
    const pageTitle = this.location.split('/').pop().replace('.html', '');

    this.render(pageTitle);
    getIcons();

    const menuButton = this.querySelector('.menu-button');
    const menuList = this.querySelector('.menu-list');
    menuButton.addEventListener('click', () => {
      menuList.classList.toggle('open');
    });
  }

  render(pageTitle) {
    this.innerHTML = `
      <nav class="ui-navbar">
        ${this.renderIcon()}

        <div class="ui-navbar--item">
          <span class="ui-navbar--item-label">${this.location === '/' ? 'Home' : pageTitle}</span>

          <button class="menu-button">
            <i data-lucide="menu"></i>
          </button>

          <div class="menu-list">
            <a href="/">Home</a>
            <a href="/projects.html">Projects</a>
            <a href="/gallery.html">Gallery</a>
          </div>
        </div>

      </nav>
    `;
  }

  renderIcon() {
    return `
      <div class="ui-navbar--icon">
        <i data-lucide="grip" class="icon"></i>
      </div>
    `;
  }
}

customElements.define('ui-navbar', UiNavbar);
