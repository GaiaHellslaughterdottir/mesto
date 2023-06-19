import * as data from "./constants";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeIcon = this._popupElement.querySelector('.popup__close-icon');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.keyCode === data.keyEscCode) {
      if (this._popupElement.classList.contains('popup_opened')) {
        this.close();
      }
    }
  }

  setEventListeners() {
    this._closeIcon.addEventListener('click', function () {
      this.close();
    }.bind(this));
    this._popupElement.addEventListener('click', function () {
      this.close();
    }.bind(this));
    document.onkeydown = this._handleEscClose.bind(this);
  }
}