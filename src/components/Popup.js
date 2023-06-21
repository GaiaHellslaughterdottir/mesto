import * as data from "./constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeIcon = this._popupElement.querySelector('.popup__close-icon');
  }

  open() {
    document.onkeydown = this._handleEscClose.bind(this);
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    document.onkeydown = null;
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
    this._popupElement.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }.bind(this));

  }
}