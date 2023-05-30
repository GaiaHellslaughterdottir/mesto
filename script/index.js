import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//Всплывающее окно редактирования профиля
const profilePopup = document.querySelector('#profile-popup');
//Всплывающее окно добавления места
const placePopup = document.querySelector('#place-popup');
//Иконки закрытия всплывающих окон
const popupCloseIconList = document.querySelectorAll('.popup__close-icon');
//Окна popup
const popups = document.querySelectorAll('.popup');
//
const keyEscCode = 27;

//Поле формы для имени в профиле
const formFieldName = document.querySelector('#form__field-name');
//Поле формы для профессии в профиле
const formFieldVocation = document.querySelector('#form__field-vocation');
//Имя в профиле
const profileInfoName = document.querySelector('.profile__info-name');
//Профессия в профиле
const profileInfoVocation = document.querySelector('.profile__info-vocation');
//Кнопка редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
//Форма редактирования профиля
const profilePopupForm = profilePopup.querySelector('.form');

//Кнопка создания новой карточки места
const profileAddPlaceButton = document.querySelector('.profile__add-place-button');
//Поле формы для названия места
const placeFieldName = document.querySelector('#form__field-place-name');
//Поле формы для изображения места
const placeFieldImage = document.querySelector('#form__field-place-image');
//Форма создания карточки места
const placePopupForm =  placePopup.querySelector('.form');

//Массив с содержимым галереи
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const configFormSelector = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__field_invalid'
};




/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.onkeydown = function (evt) {
    if (evt.keyCode === keyEscCode) {
      const openedPopup = document.querySelector('.popup_opened');
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  };
}

/**
 * Закрытие всплывающего окна
 * @param popup - всплывающее окно
 */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.onkeydown = null;
}

/**
 * Обработчик события открытия окна редактирования профиля
 */
function handleOpenProfilePopup() {
  formFieldName.value = profileInfoName.textContent;
  formFieldVocation.value = profileInfoVocation.textContent;
  openPopup(profilePopup);
}

/**
 * Обработчик события открытия окна добавления места
 */
function handlerOpenPlaceEditPopup() {
  placeFieldName.closest('.form').reset();
  openPopup(placePopup);
  placePopupForm.formValidator.resetForm();
}

/**
 * Обработчик события закрытия всплывающего окна по крестику
 * @param evt - событие
 */
function handleClosePopup(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

/**
 * Обработчик события сохрания информации профиля
 * @param evt - событие
 */
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = formFieldName.value;
  profileInfoVocation.textContent = formFieldVocation.value;
  closePopup(profilePopup);
}

/**
 * Обработчик события создания карточки
 * @param evt - событие
 */
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const name = placeFieldName.value;
  const link = placeFieldImage.value;
  const card = new Card({name, link}, '#card-template', openCardCallback);
  document.querySelector('.elements').prepend(card.createCardElement());
  closePopup(placePopup);
}

/**
 * Обработчик события клика мышкой на оверлей окна
 * @param evt - событие
 */
function handleOverlayClick(evt) {
  if (!evt.target.classList.contains('popup__container')) {
    closePopup(evt.target);
  }
}

/**
 * Функция открытия окна карточки с увеличенным изображением
 * @param cardElement
 */
function openCardCallback(cardElement) {
  document.querySelector('.place-info__image').src =
    cardElement.querySelector('.element__image').src;
  document.querySelector('.place-info__image').alt =
    cardElement.querySelector('.element__image').alt;
  document.querySelector('.place-info__title').textContent =
    cardElement.querySelector('.element__place').textContent;
  openPopup(document.querySelector('#place-image-popup'));
}


/**
 * Инициализация сайта
 */
function init() {
  //Добавление слушателя на кнопки отправки форм
  profilePopupForm.addEventListener('submit', handleFormProfileSubmit);
  placePopupForm.addEventListener('submit', handleFormPlaceSubmit);

  //Добавление слушателя на поля ввода
  profileEditButton.addEventListener('click', handleOpenProfilePopup);
  profileAddPlaceButton.addEventListener('click', handlerOpenPlaceEditPopup);

  //Добавление слушателя на иконку закрытия окна
  popupCloseIconList.forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  //Добавление слушателя на оверлей окон
  popups.forEach(popup => {
    popup.addEventListener('click', handleOverlayClick);
  });

  //Создание галереи предустановленным набором карточек
  initialCards.forEach(card => {
    const cardElement = new Card(card, '#card-template', openCardCallback).createCardElement();
    document.querySelector('.elements').prepend(cardElement);
  });

  //Включение валидации всех форм
  [...document.querySelectorAll(configFormSelector.formSelector)].forEach((formItem) => {
    new FormValidator(configFormSelector, formItem).enableValidation();
  })
}

init();

