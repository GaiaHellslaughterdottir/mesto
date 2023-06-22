export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  generateInitialCard() {
    this._items.forEach(card => {
      this.renderCard(card);
    });
  }

  addItem(cardElement) {
    this._containerElement.prepend(cardElement);
  }

  renderCard(card) {
    this._renderer(card);
  }
}