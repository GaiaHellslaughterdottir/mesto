// Находим все формы и перебираем их
// Вешаем обработчик события submit на каждую форму в переборе
// Внутри каждой формы ищем инпуты
// Перебираем список инпутов конкретной формы и вешаем на каждый инпут обработчик события input
// При наступлении события ввода в инпут проверяем его валидность
// Если инпут не валиден, выводи сообщение об ошибке в элемент ошибки и добавляем класс невалидности
// В противном случае удаляем класс и очищаем сообшение

/**
 *
 * @param inputElement
 * @param formElement
 */
function checkInputValidity(inputElement, formElement) {
  console.log(inputElement.validationMessage);
  const isInputValidity = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  console.log(errorElement);
}

/**
 * Обработчик событий для форм и для полей ввода
 * @param formElement -
 */
function setEventListener(formElement) {
  const inputsList = formElement.querySelectorAll('.form__field');
  const submitButtonElement = formElement.querySelector('form__button-submit');

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('Форма отправлена');
  });
    [...inputsList].forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        checkInputValidity(inputItem, formElement);
      })
    })
}


/**
 * Создание массива форм, перебор массива форм
 */
function enableValidation() {
  const forms = document.querySelectorAll('.form');
  [...forms].forEach((formItem) => {
    setEventListener(formItem);
  })
}

enableValidation();


/*
function enableValidation({
                            formSelector: '',
                            inputSelector: '',
                            submitButtonSelector: '',
                            inactiveButtonClass: '',
                            inputErrorClass: '',
                            errorClass: ''
                          }) {

}*/
