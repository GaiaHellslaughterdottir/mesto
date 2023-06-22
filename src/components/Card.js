export default class Card {
  /**
   * Конструктор класса
   * @param data - объект с данными
   * @param templateSelector - селектор шаблона карточки
   * @param openCardCallback - функция открытия окна карточки с увеличенным изображением
   */
  constructor(data, templateSelector, openCardCallback) {
    this._name = data.name;
    this._link = data.link;
    this._description = `Изображение ${data.name}`;
    this._templateSelector = templateSelector;
    this._openCardCallback = openCardCallback;
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
    this._setEventListeners();
    return this._cardElement;
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
    this._cardElement.remove();
  }

  /**
   * Обработчик события смены состояния кнопки лайк
   */
  _handleToggleLike() {
    this._likeElement.classList.toggle('element__like_active');
  }
}