import Popup from "./Popup";
import * as data from "./constants";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super();
    this._popupForm = this._popupElement.querySelector('.form');
    this._callbackSubmitForm = callbackSubmitForm;
  }

  _getInputValues() {
    const values = {};
    this._popupForm.elements.forEach((element) => {
      values[element.name] = element.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', function () {
      const allValues = this._getInputValues();
      this._callbackSubmitForm(allValues);
    }.bind(this));
  }

  close() {
    super.close();
  }
}