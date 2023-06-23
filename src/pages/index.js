import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as data from "../utils/constants.js";
import '../pages/index.css';
import FormValidator from "../components/FormValidator";

let popupWithImage;
let userInfo;
let popupProfile;
let popupPlace;
let placeSection;
let profileFormValidator;
let placeFormValidator;

/**
 * Функция открытия окна карточки с увеличенным изображением
 * @param imageInfo - информация об изображении
 */
function openCardCallback(imageInfo) {
  popupWithImage.open(imageInfo);
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
    profileFormValidator.resetForm();
  });
  profileFormValidator = new FormValidator(data.configFormSelector, popupProfile.getFormElement());
  profileFormValidator.enableValidation();
  popupProfile.setEventListeners();

  popupPlace = new PopupWithForm('#place-popup', function (values) {
    placeSection.renderCard({name: values['place-name'], link: values.image});
    popupPlace.close();
    placeFormValidator.resetForm();
  });
  placeFormValidator = new FormValidator(data.configFormSelector, popupPlace.getFormElement());
  placeFormValidator.enableValidation();
  popupPlace.setEventListeners();

  data.profileEditButton.addEventListener('click', function () {
    const userInfoValues = userInfo.getUserInfo();
    popupProfile.fillFormValue(userInfoValues);
    profileFormValidator.resetForm();
    popupProfile.open();
  });

  data.profileAddPlaceButton.addEventListener('click', function () {
    placeFormValidator.resetForm();
    popupPlace.open();
  });

  const sectionParams = {
    items: data.initialCards,
    renderer: function (card) {
      const cardObject = new Card(card, '#card-template', openCardCallback);
      placeSection.addItem(cardObject.createCardElement());
    }
  };
  placeSection = new Section(sectionParams, '.elements');
  placeSection.generateInitialCard();
}

init();

