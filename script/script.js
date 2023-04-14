let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseIcon = document.querySelector('.popup__close-icon');
let formFieldName = document.querySelector('#form__field-name');
let formFieldVocation = document.querySelector('#form__field-vocation');
let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoVocation = document.querySelector('.profile__info-vocation');

function openPopUp() {
  formFieldName.value = profileInfoName.textContent;
  formFieldVocation.value = profileInfoVocation.textContent;
  popUp.classList.add('popup_opened');
}

function closePopUp() {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = formFieldName.value;
  profileInfoVocation.textContent = formFieldVocation.value;
  closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);
profileEditButton.addEventListener('click', openPopUp);
popupCloseIcon.addEventListener('click', closePopUp);


