export default class Card {
  /**
   * Конструктор класса
   * @param data - объект с данными
   * @param templateSelector - селектор шаблона карточки
   * @param openCardCallback - функция открытия окна карточки с увеличенным изображением
   * @param removeCardCallback
   * @param toggleLike
   */
  constructor(data, templateSelector, openCardCallback, removeCardCallback, toggleLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._description = `Изображение ${data.name}`;
    this._templateSelector = templateSelector;
    this._openCardCallback = openCardCallback;
    this._removeCardCallback = removeCardCallback;
    this._toggleLike = toggleLike;
  }

  /**
   * Создание нового элемента на основе шаблона карточки
   * @returns {Node} - возвращает элемент карточки
   * @private
   */
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  /**
   * Функция заполнения созданного шаблона карточки
   */
  createCardElement() {
    this._cardElement = this._getTemplate();
    this._imageElement = this._cardElement.querySelector('.element__image');
    this._placeElement = this._cardElement.querySelector('.element__place');
    this._likeElement = this._cardElement.querySelector('.element__like');
    this._placeElement.textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._description;
    if (this._likes.length > 0) {
      this._likeElement.classList.add('element__like_active')
    }
    this._setEventListeners();
    return this._cardElement;
  }

  updateLikes(likes) {
    this._likes = likes;
    if (this._likes.length > 0) {
      this._likeElement.classList.add('element__like_active')
    } else {
      this._likeElement.classList.remove('element__like_active')
    }
  }

  /**
   * Добавление слушателей
   * @private
   */
  _setEventListeners() {
    this._imageElement.addEventListener('click', this._handleOpenImagePopup.bind(this));
    this._likeElement.addEventListener('click', this._handleToggleLike.bind(this));
    this._cardElement.querySelector('.element__basket').addEventListener('click', this._handleRemoveCard.bind(this));
  }

  /**
   * Обработчик события открытия окна изображения места
   * @param evt - событие
   */
  _handleOpenImagePopup(evt) {
    evt.preventDefault();
    const src = this._imageElement.src;
    const alt = this._imageElement.alt;
    const title = this._placeElement.textContent;
    this._openCardCallback({src, alt, title});
  }

  /**
   * Обработчик события удаления карточки из галереи
   */
  _handleRemoveCard() {
    this._removeCardCallback(this._id);
    this._cardElement.remove();
  }

  /**
   * Обработчик события смены состояния кнопки лайк
   */
  _handleToggleLike() {
    this._likeElement.classList.toggle('element__like_active');
    this._toggleLike(this._id, this._likeElement.classList.contains('element__like_active'));
  }
}