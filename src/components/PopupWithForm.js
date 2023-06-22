import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector('.form');
    this._callbackSubmitForm = callbackSubmitForm;
  }

  _getInputValues() {
    const values = {};
    [...this._popupForm.elements].forEach((element) => {
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

  fillFormValue(values) {
    if (values !== undefined) {
      for (const [key, value] of Object.entries(values)) {
        this._popupForm.elements[key].value = value;
      }
    }
  }

  close(closeCallback) {
    super.close();
    this._popupForm.reset();
    if (closeCallback !== undefined) {
      closeCallback();
    }
  }

  getFormElement() {
    return this._popupForm;
  }
}