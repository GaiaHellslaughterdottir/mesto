import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import * as data from "./constants.js";

import '../pages/index.css';

let popupWithImage;
let userInfo;
let popupProfile;
let popupPlace;

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

  popupProfile = new PopupWithForm('#profile-popup', function (values) {
    userInfo.setUserInfo(values);
    popupProfile.close();
  });
  popupProfile.setEventListeners();

  popupPlace = new PopupWithForm('#place-popup', function (values) {
    //userInfo.setUserInfo(values);
    popupPlace.close();
  });
  popupPlace.setEventListeners();

  data.profileEditButton.addEventListener('click', function () {
    const userInfoValues = userInfo.getUserInfo();
    popupProfile.open(userInfoValues);
  });

  data.profileAddPlaceButton.addEventListener('click', function () {
    popupPlace.reset();
    popupPlace.open();
  });

  //Создание галереи предустановленным набором карточек
  data.initialCards.forEach(card => {
    const cardObject = createCard(card.name, card.link);
    const cardElement = cardObject.createCardElement();
    data.cardsContainer.prepend(cardElement);
  });
}

init();

