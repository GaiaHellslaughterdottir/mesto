/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

/**
 * Закрытие всплывающего окна
 * @param popup - всплывающее окно
 */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
}

/**
 * Обработчик события открытия окна изображения места
 * @param evt - событие
 */
function handleOpenImagePopup(evt) {
  evt.preventDefault();
  placeInfoImage.src = evt.target.src;
  placeInfoImage.alt = evt.target.alt;
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
  closePopup(profilePopup);
}

/**
 * Обработчик события создания карточки
 * @param evt - событие
 */
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard(placeFieldName.value, placeFieldImage.value);
  addCard(cardElement);
  closePopup(placePopup);
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
 * Функция создания новой карточки
 * @param name - наименование места
 * @param link - ссылка на изображение места
 */
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__place').textContent = name;
  elementImage.src = link;
  elementImage.addEventListener('click', handleOpenImagePopup);
  cardElement.querySelector('.element__like').addEventListener('click', handleToggleLike);
  cardElement.querySelector('.element__basket').addEventListener('click', handleRemoveCard);
  return cardElement;
}

/**
 * Функция добавления новой карточки в галерею
 * @param cardElement - добавляемая карточка
 */
function addCard(cardElement) {
  sectionPlaces.prepend(cardElement);
}

/**
 * Обработчик события удаления карточки из галереи
 * @param evt - событие
 */
function handleRemoveCard(evt) {
  evt.target.closest('.element').remove();
}

/**
 * Инициализация сайта
 */
function init() {
  profilePopupForm.addEventListener('submit', handleFormProfileSubmit);
  placePopupForm.addEventListener('submit', handleFormPlaceSubmit);

  profileEditButton.addEventListener('click', handleOpenProfilePopup);
  profileAddPlaceButton.addEventListener('click', handlerOpenPlaceEditPopup);

  popupCloseIconList.forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  initialCards.forEach(card => {
    const cardElement = createCard(card.name, card.link);
    addCard(cardElement);
  })
}

init();