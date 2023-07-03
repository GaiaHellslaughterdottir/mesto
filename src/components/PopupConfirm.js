import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
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
}