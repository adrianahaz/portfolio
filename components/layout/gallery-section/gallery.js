class GallerySection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.data) return;

    this.innerHTML = `
      <div class="gallery">
        ${this.data
          .map(
            (item) => `
              <ui-wrapper>
                <div class="gallery__item">
                  <img src="${item.image}" alt="${item.title}" class="gallery__image">

                  <div class="gallery__content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                  </div>
                </div>
              </ui-wrapper>
            `
          )
          .join('')}
      </div>
    `;
  }
}

customElements.define('gallery-section', GallerySection);
