export default class FormValidator {
  /**
   * Конструктор класса
   * @param configFormSelector - массив с селекторами элементов формы
   * @param formElement - элемент формы
   */
  constructor(configFormSelector, formElement) {
    this._configFormSelector = configFormSelector;
    this._formElement = formElement;
    this._submitButtonElement = this._formElement.querySelector(this._configFormSelector.submitButtonSelector);
    formElement.formValidator = this;
    this._inputList = this._formElement.querySelectorAll(this._configFormSelector.inputSelector);
  }

  /**
   * Функция включения валидации в форме
   */
  enableValidation() {
    this._setEventListener();
  }

  /**
   * Функция приведения формы в исходное состояние
   */
  resetForm() {
    this._toggleButtonState(this._submitButtonElement,this._formElement.checkValidity());
    [...this._inputList].forEach((inputItem) => {
        this._hideError(inputItem, this._formElement.querySelector(`#${inputItem.name}-error`));
    })
  }

  /**
   * Обработчик событий для форм и для полей ввода
   */
  _setEventListener() {
    const submitButtonElement = this._submitButtonElement;

    this._toggleButtonState(submitButtonElement, this._formElement.checkValidity(), this._configFormSelector);

    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    }.bind(this));
    [...this._inputList].forEach((inputItem) => {
      inputItem.addEventListener('input', function () {
        this._toggleButtonState(submitButtonElement, this._formElement.checkValidity(), this._configFormSelector);
        this._checkInputValidity(inputItem, this._formElement, this._configFormSelector);
      }.bind(this))
    })
  }

  /**
   * Показать текст ошибки под полем ввода
   * @param inputElement - поле ввода
   * @param errorElement - строка с сообщением об ошибке
   */
  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._configFormSelector.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  /**
   * Убрать текст ошибки под полем ввода
   * @param inputElement - поле ввода
   * @param errorElement - строка с сообщением об ошибке
   */
  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._configFormSelector.inputErrorClass);
    errorElement.textContent = '';
  }

  /**
   * Блокировка кнопки сабмит
   * @param buttonElement - элемент кнопки
   */
  _disabledButton(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add(this._configFormSelector.inactiveButtonClass);
  }

  /**
   * Разблокировка кнопки сабмит
   * @param buttonElement - элемент кнопки
   */
  _enabledButton(buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(this._configFormSelector.inactiveButtonClass);
  }

  /**
   * Переключение активности кнопки сабмит
   * @param buttonElement
   * @param validity
   */
  _toggleButtonState(buttonElement, validity) {
    if (validity === false) {
      this._disabledButton(buttonElement);
    } else {
      this._enabledButton(buttonElement);
    }
  }

  /**
   * Проверка полей ввода на валидность
   * @param inputElement - поле ввода
   * @param formElement - форма
   */
  _checkInputValidity(inputElement, formElement) {
    const isInputValidity = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) {
      return;
    }
    if (!isInputValidity) {
      this._showError(inputElement, errorElement, this._configFormSelector);
    } else {
      this._hideError(inputElement, errorElement, this._configFormSelector);
    }
  }
}