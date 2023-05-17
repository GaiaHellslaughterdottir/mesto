/**
 * Показать текст ошибки под полем ввода
 * @param inputElement - поле ввода
 * @param errorElement - строка с сообщением об ошибке
 * @param config - объект настроек
 */
function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

/**
 * Убрать текст ошибки под полем ввода
 * @param inputElement - поле ввода
 * @param errorElement - строка с сообщением об ошибке
 * @param config - объект настроек
 */
function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

/**
 * Блокировка кнопки сабмит
 * @param buttonElement - элемент кнопки
 * @param config - объект настроек
 */
function disabledButton(buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

/**
 * Разблокировка кнопки сабмит
 * @param buttonElement - элемент кнопки
 * @param config - объект настроек
 */
function enabledButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

/**
 * Переключение активности кнопки сабмит
 * @param buttonElement
 * @param isActive
 * @param config - объект настроек
 */
function toggleButtonState(buttonElement, validity, config) {
  if (validity === false) {
    disabledButton(buttonElement, config);
  } else {
    enabledButton(buttonElement, config);
  }
}

/**
 * Проверка полей ввода на валидность
 * @param inputElement - поле ввода
 * @param formElement - форма
 * @param config - объект настроек
 */
function checkInputValidity(inputElement, formElement, config) {
  const isInputValidity = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!errorElement) {
    return;
  }
  if (!isInputValidity) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
}

/**
 * Обработчик событий для форм и для полей ввода
 * @param formElement - форма
 * @param config - объект настроек
 */
function setEventListener(formElement, config) {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  [...inputsList].forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
      checkInputValidity(inputItem, formElement, config);
    })
  })
}

/**
 * Создание массива форм, перебор массива форм
 * @param config - объект настроек
 */
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  [...forms].forEach((formItem) => {
    setEventListener(formItem, config);
  })
}

enableValidation(configFormSelector);