import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.onkeydown = function (evt) {
    if (evt.keyCode === keyEscCode) {
      const openedPopup = document.querySelector('.popup_opened');
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  };
}

/**
 * Закрытие всплывающего окна
 * @param popup - всплывающее окно
 */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.onkeydown = null;
}

/**
 * Обработчик события открытия окна редактирования профиля
 */
function handleOpenProfilePopup() {
  formFieldName.value = profileInfoName.textContent;
  formFieldVocation.value = profileInfoVocation.textContent;
  openPopup(profilePopup);
}

/**
 * Обработчик события открытия окна добавления места
 */
function handlerOpenPlaceEditPopup() {
  placeFieldName.closest('.form').reset();
  openPopup(placePopup);
  placePopupForm.formValidator.resetForm();
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
  closePopup(profilePopup);
}

/**
 * Функция создания новой карточки
 * @param name
 * @param link
 * @returns {Card}
 */
function createCard(name, link) {
  return new Card({name, link}, '#card-template', openCardCallback);
}

/**
 * Обработчик события создания карточки
 * @param evt - событие
 */
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const name = placeFieldName.value;
  const link = placeFieldImage.value;
  const card = createCard(name, link);
  cardsContainer.prepend(card.createCardElement());
  closePopup(placePopup);
}

/**
 * Обработчик события клика мышкой на оверлей окна
 * @param evt - событие
 */
function handleOverlayClick(evt) {
  if (!evt.target.classList.contains('popup__container')) {
    closePopup(evt.target);
  }
}

/**
 * Функция открытия окна карточки с увеличенным изображением
 * @param cardElement
 */
function openCardCallback(cardElement) {
  elementPlaceInfoImage.src =
    cardElement.querySelector('.element__image').src;
  elementPlaceInfoImage.alt =
    cardElement.querySelector('.element__image').alt;
  elementPlaceInfoTitle.textContent =
    cardElement.querySelector('.element__place').textContent;
  openPopup(placeImagePopup);
}

/**
 * Инициализация сайта
 */
function init() {
  //Добавление слушателя на кнопки отправки форм
  profilePopupForm.addEventListener('submit', handleFormProfileSubmit);
  placePopupForm.addEventListener('submit', handleFormPlaceSubmit);

  //Добавление слушателя на поля ввода
  profileEditButton.addEventListener('click', handleOpenProfilePopup);
  profileAddPlaceButton.addEventListener('click', handlerOpenPlaceEditPopup);

  //Добавление слушателя на иконку закрытия окна
  popupCloseIconList.forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  //Добавление слушателя на оверлей окон
  popups.forEach(popup => {
    popup.addEventListener('click', handleOverlayClick);
  });

  //Создание галереи предустановленным набором карточек
  initialCards.forEach(card => {
    const cardObject = createCard(card.name, card.link);
    const cardElement = cardObject.createCardElement();
    cardsContainer.prepend(cardElement);
  });

  //Включение валидации всех форм
  [...document.querySelectorAll(configFormSelector.formSelector)].forEach((formItem) => {
    new FormValidator(configFormSelector, formItem).enableValidation();
  })
}

init();