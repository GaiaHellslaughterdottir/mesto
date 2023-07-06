import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButtonElement = this._popupElement.querySelector('.form__button-submit');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector('.form__button-submit').addEventListener('click', function () {
      this._callbackConfirm();
    }.bind(this));
  }

  open(callbackConfirm) {
    this._callbackConfirm = callbackConfirm;
    super.open();
  }

  startLoading() {
    this._submitButtonTitle = this._submitButtonElement.textContent;
    this._submitButtonElement.textContent = 'Сохранение...';
  }

  stopLoading() {
    this._submitButtonElement.textContent = this._submitButtonTitle;
  }
}