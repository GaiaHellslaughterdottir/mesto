import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
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
let popupAvatarEdit;
let popupPlaceDelete;
let placeSection;
let profileFormValidator;
let placeFormValidator;
let avatarFormValidator;
let cardArray = [];

/**
 * Функция открытия окна карточки с увеличенным изображением
 * @param imageInfo - информация об изображении
 */
function openCardCallback(imageInfo) {
  popupWithImage.open(imageInfo);
}

function removeCardCallback(_id) {
  popupPlaceDelete.open(function () {
    popupPlaceDelete.disableSubmitButton();
    api.deletePlace(_id)
      .then(function () {
        popupPlaceDelete.close();
        cardArray[_id].removeCard();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPlaceDelete.enableSubmitButton();
      })
    ;
  });
}

function setLike(_id) {
  api.addPlaceLike(_id)
    .then(function (likes) {
      cardArray[_id].updateLikes(likes);
    })
    .catch((err) => {
      console.log(err);
    })
}

function removeLike(_id) {
  api.removePlaceLike(_id)
    .then(function (likes) {
      cardArray[_id].updateLikes(likes);
    })
    .catch((err) => {
      console.log(err);
    })
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

  Promise.all([api.getUserProfileInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      userInfo.setUserInfo(userData);
      userInfo.setUserAvatar(userData);
      const sectionParams = {
        items: cards,
        renderer: function (card) {
          const cardObject = new Card(card, '#card-template', userInfo.getId(), openCardCallback, removeCardCallback, setLike, removeLike);
          cardArray[card._id] = cardObject;
          placeSection.addItem(cardObject.createCardElement());
        }
      };
      placeSection = new Section(sectionParams, '.elements');
      placeSection.generateInitialCard();
    })
    .catch(err => {
      console.log(err);
    });

  popupProfile = new PopupWithForm('#profile-popup', function (values) {
    userInfo.setUserInfo(values);
    popupProfile.disableSubmitButton();
    api.postUserProfileInfo(values)
      .then(function () {
        popupProfile.close();
        profileFormValidator.resetForm();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfile.enableSubmitButton();
      });
  });

  profileFormValidator = new FormValidator(data.configFormSelector, popupProfile.getFormElement());
  profileFormValidator.enableValidation();
  popupProfile.setEventListeners();

  popupAvatarEdit = new PopupWithForm('#edit-avatar-popup', function (values) {
    userInfo.setUserAvatar(values);
    popupAvatarEdit.disableSubmitButton();
    api.postUserProfileAvatar(values)
      .then(function () {
        popupAvatarEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatarEdit.enableSubmitButton();
      });
  });
  avatarFormValidator = new FormValidator(data.configFormSelector, popupAvatarEdit.getFormElement());
  avatarFormValidator.enableValidation();
  popupAvatarEdit.setEventListeners();

  popupPlaceDelete = new PopupConfirm('#place-delete-popup');
  popupPlaceDelete.setEventListeners();

  popupPlace = new PopupWithForm('#place-popup', function (values) {
    const card = {name: values['place-name'], link: values.image};
    popupPlace.disableSubmitButton();
    api.postPlace(card)
      .then(function (id) {
        card._id = id;
        placeSection.renderCard(card);
        popupPlace.close();
        placeFormValidator.resetForm();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPlace.enableSubmitButton();
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

  data.avatarEditButton.addEventListener('click', function () {
    const userInfoValues = userInfo.getUserInfo();
    popupAvatarEdit.fillFormValue(userInfoValues);
    avatarFormValidator.resetForm();
    popupAvatarEdit.open();
  });

  data.profileAddPlaceButton.addEventListener('click', function () {
    placeFormValidator.resetForm();
    popupPlace.open();
  });
}

init();

