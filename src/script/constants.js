//Всплывающее окно редактирования профиля
export const profilePopup = document.querySelector('#profile-popup');
//Всплывающее окно добавления места
export const placePopup = document.querySelector('#place-popup');
//Иконки закрытия всплывающих окон
export const popupCloseIconList = document.querySelectorAll('.popup__close-icon');
//Окна popup
export const popups = document.querySelectorAll('.popup');
//
export const keyEscCode = 27;

//Поле формы для имени в профиле
export const formFieldName = document.querySelector('#form__field-name');
//Поле формы для профессии в профиле
export const formFieldVocation = document.querySelector('#form__field-vocation');
//Имя в профиле
export const profileInfoName = document.querySelector('.profile__info-name');
//Профессия в профиле
export const profileInfoVocation = document.querySelector('.profile__info-vocation');
//Кнопка редактирования профиля
export const profileEditButton = document.querySelector('.profile__edit-button');
//Форма редактирования профиля
export const profilePopupForm = profilePopup.querySelector('.form');

//Селектор контейнера с карточками
export const cardsContainer = document.querySelector('.elements');
//Селектор изображения места
export const elementPlaceInfoImage = document.querySelector('.place-info__image');
//Селектор названия места
export const elementPlaceInfoTitle = document.querySelector('.place-info__title');
// Окно увеличенного изображения места
export const placeImagePopup = document.querySelector('#place-image-popup');

//Кнопка создания новой карточки места
export const profileAddPlaceButton = document.querySelector('.profile__add-place-button');
//Поле формы для названия места
export const placeFieldName = document.querySelector('#form__field-place-name');
//Поле формы для изображения места
export const placeFieldImage = document.querySelector('#form__field-place-image');
//Форма создания карточки места
export const placePopupForm =  placePopup.querySelector('.form');

//Массив с содержимым галереи
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

export const configFormSelector = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__field_invalid'
};