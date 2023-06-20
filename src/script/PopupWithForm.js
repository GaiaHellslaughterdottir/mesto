import Popup from "./Popup";
import * as data from "./constants";
import FormValidator from "./FormValidator";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector('.form');
    this._callbackSubmitForm = callbackSubmitForm;
    this._validator = new FormValidator(data.configFormSelector, this._popupForm);
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

  open(values) {
    if (values !== undefined) {
      for (const [key, value] of Object.entries(values)) {
        this._popupForm.elements[key].value = value;
      }
    }
    super.open();
    this._validator.enableValidation();
  }

  close() {
    super.close();
  }

  reset() {
    this._popupForm.reset();
    this._validator.resetForm();
  }
}