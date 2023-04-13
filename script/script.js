let popUp = document.querySelector('#popup');

let formElement = document.querySelector('#popup__form');


let popupFieldName = document.querySelector('#popup__form-field-name');
let popupFieldVocation = document.querySelector('#popup__form-field-vocation');

let profileInfoName = document.querySelector('.profile__info-name-and-button');
let profileInfoVocation = document.querySelector('#profile__info-vocation');


function openPopUp() {
  popUp.classList.add('popup_opened');
}

function closePopUp() {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = popupFieldName.value;
  profileInfoVocation.textContent = popupFieldVocation.value;
  closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);




/*
function openPopUp() {
  formElement.classList.add('popup_opened');
}

function closePopUp() {
  formElement.classList.remove('popup_opened');
}

function handleFormSubmit() {
  profileInfoName.textContent = popupFieldName.value;
  profileInfoVocation.textContent = popupFieldVocation.value;
  closePopUp();
}*/
