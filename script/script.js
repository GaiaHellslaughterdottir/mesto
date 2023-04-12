let popUp = document.querySelector('#popup');

let popupFieldName = document.querySelector('#popup__field-name');
let popupFieldVocation = document.querySelector('#popup__field-vocation');

let profileInfoName = document.querySelector('#profile__info-name');
let profileInfoVocation = document.querySelector('#profile__info-vocation');


function openPopUp() {
  popUp.classList.add('popup_opened');
}

function closePopUp() {
  popUp.classList.remove('popup_opened');
}

function saveProfile() {
  profileInfoName.textContent = popupFieldName.value;
  profileInfoVocation.textContent = popupFieldVocation.value;
  closePopUp();
}