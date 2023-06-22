import {keyEscCode} from "../utils/constants";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeIcon = this._popupElement.querySelector('.popup__close-icon');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === keyEscCode) {
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