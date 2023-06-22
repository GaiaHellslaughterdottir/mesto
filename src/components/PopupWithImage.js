import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector('.place-info__image');
    this._titleElement = this._popupElement.querySelector('.place-info__title');
  }

  open({src, alt, title}) {
    this._imageElement.src = src;
    this._imageElement.alt = alt;
    this._titleElement.textContent = title;
    super.open();
  }
}