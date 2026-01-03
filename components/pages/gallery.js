import { getGalleryList } from '../../data/gallery.js';

class AppGallery extends HTMLElement {
  connectedCallback() {
    this.galleryList = getGalleryList();
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="app-gallery">
        ${this.innerHTML}
      </main>
    `;

    const gallerySection = this.querySelector('gallery-section');
    if (gallerySection) {
      gallerySection.data = this.galleryList;
    }
  }
}

customElements.define('app-gallery', AppGallery);
