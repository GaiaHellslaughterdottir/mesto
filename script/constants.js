//Всплывающее окно редактирования профиля
const profilePopup = document.querySelector('#profile-popup');
//Всплывающее окно добавления места
const placePopup = document.querySelector('#place-popup');
//Всплывающее окно изображения места
const placeImagePopup = document.querySelector('#place-image-popup');
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

//Шаблон карточки места
const cardTemplate = document.querySelector('#card-template').content;
//Кнопка создания новой карточки места
const profileAddPlaceButton = document.querySelector('.profile__add-place-button');
//Секция с карточками
const sectionPlaces = document.querySelector('.elements');
//Поле формы для названия места
const placeFieldName = document.querySelector('#form__field-place-name');
//Поле формы для изображения места
const placeFieldImage = document.querySelector('#form__field-place-image');
//Название места
const placeInfoImage = document.querySelector('.place-info__image');
//Изображение места
const placeInfoTitle = document.querySelector('.place-info__title');
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
  inputErrorClass: 'form__field_invalid',
};