import { getNavigationItems, getSocialItems } from "../../data/navbar.js";
import { getIcons } from "../../helpers/getIcons.js";

class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.path = window.location.pathname;

    this.navigationItems = getNavigationItems();
    this.socialItems = getSocialItems();

    this.render();
    getIcons();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar">
        ${this.renderTop()}
        ${this.renderMiddle()}
      </nav>
    `;
  }

  renderTop() {
    return `
      <ui-wrapper size="80">
        <a href="/" class="navbar-item">
          <i data-lucide="moon"></i>
        </a>
      </ui-wrapper>
    `;
  }

  renderMiddle() {
    return `
      <ui-wrapper>
        <div class="navbar-group">
          ${this.renderList(this.navigationItems)}

          <hr class="navbar-divider" />

          ${this.renderList(this.socialItems)}
        </div>
      </ui-wrapper>
    `;
  }

  renderList(items) {
    return `
      <ul class="navbar-list">
        ${items.map(this.renderItem).join("")}
      </ul>
    `;
  }

  renderItem(item) {
    return `
      <li>
        <a href="${item.href}" class="navbar-item">
          <i data-lucide="${item.icon}"></i>
        </a>
      </li>
    `;
  }
}

customElements.define("app-navbar", AppNavbar);
