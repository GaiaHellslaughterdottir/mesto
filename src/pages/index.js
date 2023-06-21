import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as data from "../components/constants.js";
import '../pages/index.css';

let popupWithImage;
let userInfo;
let popupProfile;
let popupPlace;
let placeSection;

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
    const newCard = new Card(values, '#card-template', openCardCallback);
    placeSection.addItem(newCard.createCardElement());
    popupPlace.close();
  });
  popupPlace.setEventListeners();

  data.profileEditButton.addEventListener('click', function () {
    const userInfoValues = userInfo.getUserInfo();
    popupProfile.open(userInfoValues);
  });

  data.profileAddPlaceButton.addEventListener('click', function () {
    popupPlace.open();
  });

  const sectionParams = {
    items: data.initialCards,
    renderer: function (cardObject) {
      placeSection.addItem(cardObject.createCardElement());
    }
  };
  placeSection = new Section(sectionParams, '.elements');
  placeSection.generate(openCardCallback);
}

init();

