//Всплывающее окно редактирования профиля
const profilePopUp = document.querySelector('#profile-popup');
//Всплывающее окно добавления места
const placePopUp = document.querySelector('#place-popup');
//Всплывающее окно изображения места
const placeImagePopup = document.querySelector('#place-image-popup');

//Поле формы для имени в профиле
const formFieldName = document.querySelector('#form__field-name');
//Поле формы для профессии в профиле
const formFieldVocation = document.querySelector('#form__field-vocation');
//Имя в профиле
const profileInfoName = document.querySelector('.profile__info-name');
//Профессия в профиле
const profileInfoVocation = document.querySelector('.profile__info-vocation');

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

/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_visible');
  popup.classList.remove('popup_invisible');
}

/**
 * Закрытие всплывающего окна
 * @param popup - всплывающее окно
 */
function closePopup(popup) {
  popup.classList.add('popup_invisible');
  popup.classList.remove('popup_visible');
}

/**
 * Обработчик события открытия окна редактирования профиля
 */
function handleOpenProfilePopup() {
  formFieldName.value = profileInfoName.textContent;
  formFieldVocation.value = profileInfoVocation.textContent;
  openPopup(profilePopUp);
}

/**
 * Обработчик события открытия окна добавления места
 */
function handlerOpenPlaceEditPopup() {
  placeFieldName.value = '';
  placeFieldImage.value = '';
  openPopup(placePopUp);
}

/**
 * Обработчик события открытия окна изображения места
 * @param evt - событие
 */
function handleOpenImagePopup(evt) {
  evt.preventDefault();
  placeInfoImage.src = evt.target.src;
  placeInfoTitle.textContent = evt.target.closest('.element').querySelector('.element__place').textContent;
  openPopup(placeImagePopup);
}

/**
 * Обработчик события закрытия всплывающего окна по крестику
 * @param evt - событие
 */
function handleClosePopup(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

/**
 * Обработчик события сохрания информации профиля
 * @param evt - событие
 */
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = formFieldName.value;
  profileInfoVocation.textContent = formFieldVocation.value;
  closePopup(profilePopUp);
}

/**
 * Обработчик события создания карточки
 * @param evt - событие
 */
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  addCard(placeFieldName.value, placeFieldImage.value);
  closePopup(placePopUp);
}

/**
 * Обработчик события смены состояния кнопки лайк
 * @param evt - событие
 */
function handleToggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

//Шаблон карточки места
const cardTemplate = document.querySelector('#card-template').content;

/**
 * Функция добавления новой карточки в галерею
 * @param name - наименование места
 * @param link - ссылка на изображение места
 */
function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__place').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__like').addEventListener('click', handleToggleLike);
  cardElement.querySelector('.element__basket').addEventListener('click', handleRemoveCard);
  cardElement.querySelector('.element__image').addEventListener('click', handleOpenImagePopup);
  sectionPlaces.prepend(cardElement);
}

/**
 * Обработчик события удаления карточки из галереи
 * @param evt - событие
 */
function handleRemoveCard(evt) {
  evt.target.closest('.element').remove();
}

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

/**
 * Инициализация сайта
 */
function init() {
  profilePopUp.querySelector('.form').addEventListener('submit', handleFormProfileSubmit);
  placePopUp.querySelector('.form').addEventListener('submit', handleFormPlaceSubmit);

  document.querySelector('.profile__edit-button').addEventListener('click', handleOpenProfilePopup);
  document.querySelector('.profile__add-place-button').addEventListener('click', handlerOpenPlaceEditPopup);

  document.querySelectorAll('.popup__close-icon').forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  initialCards.forEach(card => {
    addCard(card.name, card.link);
  })
}

init();