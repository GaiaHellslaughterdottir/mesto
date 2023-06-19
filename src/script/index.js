import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import * as data from "./constants.js";

import '../pages/index.css';

let popupWithImage;
let userInfo;

/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.onkeydown = function (evt) {
    if (evt.keyCode === data.keyEscCode) {
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
  const userInfoValues = userInfo.getUserInfo();
  data.formFieldName.value = userInfoValues.name;
  data.formFieldVocation.value = userInfoValues.info;
  openPopup(data.profilePopup);
}

/**
 * Обработчик события сохрания информации профиля
 * @param evt - событие
 */
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  const userInfoValues = {};
  userInfoValues.name = data.formFieldName.value;
  userInfoValues.info = data.formFieldVocation.value;
  userInfo.setUserInfo(userInfoValues);
  closePopup(data.profilePopup);
}


/**
 * Обработчик события открытия окна добавления места
 */
function handlerOpenPlaceEditPopup() {
  data.placeFieldName.closest('.form').reset();
  openPopup(data.placePopup);
  data.placePopupForm.formValidator.resetForm();
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
 * Функция создания новой карточки
 * @param name
 * @param link
 * @returns {Card}
 */
function createCard(name, link) {
  return new Card({name, link}, '#card-template', openCardCallback);
}

/**
 * Обработчик события создания карточки
 * @param evt - событие
 */
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const name = data.placeFieldName.value;
  const link = data.placeFieldImage.value;
  const card = createCard(name, link);
  data.cardsContainer.prepend(card.createCardElement());
  closePopup(data.placePopup);
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
  const src = cardElement.querySelector('.element__image').src;
  const alt = cardElement.querySelector('.element__image').alt;
  const title = cardElement.querySelector('.element__place').textContent;
  popupWithImage.open({src, alt, title});
}

/**
 * Инициализация сайта
 */
function init() {
  popupWithImage = new PopupWithImage('#place-image-popup');
  popupWithImage.setEventListeners();

  userInfo = new UserInfo('.profile__info-name', '.profile__info-vocation');

  //Добавление слушателя на кнопки отправки форм
  data.profilePopupForm.addEventListener('submit', handleFormProfileSubmit);
  data.placePopupForm.addEventListener('submit', handleFormPlaceSubmit);

  //Добавление слушателя на поля ввода
  data.profileEditButton.addEventListener('click', handleOpenProfilePopup);
  data.profileAddPlaceButton.addEventListener('click', handlerOpenPlaceEditPopup);

  //Создание галереи предустановленным набором карточек
  data.initialCards.forEach(card => {
    const cardObject = createCard(card.name, card.link);
    const cardElement = cardObject.createCardElement();
    data.cardsContainer.prepend(cardElement);
  });

  //Включение валидации всех форм
  [...document.querySelectorAll(data.configFormSelector.formSelector)].forEach((formItem) => {
    new FormValidator(data.configFormSelector, formItem).enableValidation();
  })
}

init();

