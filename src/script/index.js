import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import * as data from "./constants.js";

import '../pages/index.css';

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
  data.formFieldName.value = data.profileInfoName.textContent;
  data.formFieldVocation.value = data.profileInfoVocation.textContent;
  openPopup(data.profilePopup);
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
 * Обработчик события сохрания информации профиля
 * @param evt - событие
 */
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  data.profileInfoName.textContent = data.formFieldName.value;
  data.profileInfoVocation.textContent = data.formFieldVocation.value;
  closePopup(data.profilePopup);
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
  data.elementPlaceInfoImage.src =
    cardElement.querySelector('.element__image').src;
  data.elementPlaceInfoImage.alt =
    cardElement.querySelector('.element__image').alt;
  data.elementPlaceInfoTitle.textContent =
    cardElement.querySelector('.element__place').textContent;
  openPopup(data.placeImagePopup);
}

/**
 * Инициализация сайта
 */
function init() {
  //Добавление слушателя на кнопки отправки форм
  data.profilePopupForm.addEventListener('submit', handleFormProfileSubmit);
  data.placePopupForm.addEventListener('submit', handleFormPlaceSubmit);

  //Добавление слушателя на поля ввода
  data.profileEditButton.addEventListener('click', handleOpenProfilePopup);
  data.profileAddPlaceButton.addEventListener('click', handlerOpenPlaceEditPopup);

  //Добавление слушателя на иконку закрытия окна
  data.popupCloseIconList.forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  //Добавление слушателя на оверлей окон
  data.popups.forEach(popup => {
    popup.addEventListener('click', handleOverlayClick);
  });

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

