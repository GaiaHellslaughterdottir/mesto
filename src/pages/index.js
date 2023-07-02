import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as data from "../utils/constants.js";
import '../pages/index.css';
import FormValidator from "../components/FormValidator";
import Api from "../components/Api";

let api;
let popupWithImage;
let userInfo;
let popupProfile;
let popupPlace;
let placeSection;
let profileFormValidator;
let placeFormValidator;
let cards = [];

/**
 * Функция открытия окна карточки с увеличенным изображением
 * @param imageInfo - информация об изображении
 */
function openCardCallback(imageInfo) {
  popupWithImage.open(imageInfo);
}

function removeCardCallback(_id) {
  api.deletePlace(_id);
}

function toggleLike(_id, likeState) {
  if (likeState) {
    api.addPlaceLike(_id, function (likes) {
      cards[_id].updateLikes(likes);
    })
  } else {
    api.removePlaceLike(_id, function (likes) {
      cards[_id].updateLikes(likes);
    })
  }
}

/**
 * Инициализация сайта
 */
function init() {
  api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
    headers: {
      authorization: 'e4b06db3-40f1-486d-92cb-ac0fc2cec497',
      'Content-Type': 'application/json'
    }
  });


  popupWithImage = new PopupWithImage('#place-image-popup');
  popupWithImage.setEventListeners();

  userInfo = new UserInfo('.profile__info-name', '.profile__info-vocation', '.avatar');
  api.getUserProfileInfo(function (res) {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
  });

  popupProfile = new PopupWithForm('#profile-popup', function (values) {
    userInfo.setUserInfo(values);
    popupProfile.close();
    profileFormValidator.resetForm();
    api.postUserProfileInfo(values);
  });
  profileFormValidator = new FormValidator(data.configFormSelector, popupProfile.getFormElement());
  profileFormValidator.enableValidation();
  popupProfile.setEventListeners();

  popupPlace = new PopupWithForm('#place-popup', function (values) {
    const card = {name: values['place-name'], link: values.image};
    api.postPlace(card, function (id) {
      card._id = id;
      placeSection.renderCard(card);
      popupPlace.close();
      placeFormValidator.resetForm();
    });
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


  api.getInitialCards(function (res) {
    const sectionParams = {
      items: res,
      renderer: function (card) {
        const cardObject = new Card(card, '#card-template', openCardCallback, removeCardCallback, toggleLike);
        cards[card._id] = cardObject;
        placeSection.addItem(cardObject.createCardElement());
      }
    };
    placeSection = new Section(sectionParams, '.elements');
    placeSection.generateInitialCard();
  })


}

init();

