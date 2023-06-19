import * as data from "./constants";
import Card from "./Card";

export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._containerElement = document.querySelector(this._containerSelector);
  }

  generate() {
    this._items.forEach(card => {
      const cardObject = new Card(card, '#card-template', openCardCallback);
      this._renderer(cardObject);
    });
  }

  addItem(cardElement) {
    this._containerElement.prepend(cardElement);
  }
}