export default class Card {
  /**
   * Конструктор класса
   * @param data - объект с данными
   * @param templateSelector - селектор шаблона карточки
   * @param userId - идентификатор пользователя
   * @param openCardCallback - функция открытия окна карточки с увеличенным изображением
   * @param removeCardCallback - функция обратного вызова удаления карточки
   * @param setLikeCallback - функция установки лайка на карточку места
   * @param removeLikeCallback - функция удаления лайка на карточку места
   */
  constructor(data, templateSelector, userId, openCardCallback, removeCardCallback, setLikeCallback, removeLikeCallback) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._description = `Изображение ${data.name}`;
    this._templateSelector = templateSelector;
    this._openCardCallback = openCardCallback;
    this._removeCardCallback = removeCardCallback;
    this._setLikeCallback = setLikeCallback;
    this._removeLikeCallback = removeLikeCallback;
    this._userId = userId;
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
    this._likeNumber = this._cardElement.querySelector('.element__likes-number');
    this._placeElement.textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._description;
    if (this._likes !== undefined) {
      let obj = this._likes.find(o => o._id === this._userId);
      if (obj !== undefined) {
        this._likeElement.classList.add('element__like_active')
      }
      this._likeNumber.textContent = this._likes.length;
    }

    this._setEventListeners();
    return this._cardElement;
  }

  updateLikes(likes) {
    this._likes = likes;
    if (this._likes !== undefined) {
      let obj = this._likes.find(o => o._id === this._userId);
      if (obj !== undefined) {
        this._likeElement.classList.add('element__like_active')
      } else {
        this._likeElement.classList.remove('element__like_active')
      }
      this._likeNumber.textContent = this._likes.length;
    }
  }

  /**
   * Добавление слушателей
   * @private
   */
  _setEventListeners() {
    this._imageElement.addEventListener('click', this._handleOpenImagePopup.bind(this));
    this._likeElement.addEventListener('click', this._handleToggleLike.bind(this));
    this._cardElement.querySelector('.element__basket').addEventListener('click', function () {
      this._removeCardCallback(this._id);
    }.bind(this));
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
  removeCard() {
    this._cardElement.remove();
  }

  /**
   * Обработчик события смены состояния кнопки лайк
   */
  _handleToggleLike() {
    if (this._likeElement.classList.contains('element__like_active')) {
      this._removeLike()
    } else {
      this._setLike();
    }
  }

  _setLike() {
    this._likeElement.classList.add('element__like_active');
    this._setLikeCallback(this._id);
  }

  _removeLike() {
    this._likeElement.classList.remove('element__like_active');
    this._removeLikeCallback(this._id);
  }
}