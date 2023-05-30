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
    this._cardElement.querySelector('.element__place').textContent = this._name;
    this._cardElement.querySelector('.element__image').src = this._link;
    this._setEventListeners();
    return this._cardElement;
  }

  /**
   * Добавление слушателей
   * @private
   */
  _setEventListeners() {
    this._cardElement.querySelector('.element__image').addEventListener('click', this._handleOpenImagePopup.bind(this));
    this._cardElement.querySelector('.element__like').addEventListener('click', this._handleToggleLike.bind(this));
    this._cardElement.querySelector('.element__basket').addEventListener('click', this._handleRemoveCard.bind(this));
  }


  /**
   * Обработчик события открытия окна изображения места
   * @param evt - событие
   */
  _handleOpenImagePopup(evt) {
    evt.preventDefault();
    this._openCardCallback(evt.target.parentElement);
  }

  /**
   * Обработчик события удаления карточки из галереи
   * @param evt - событие
   */
  _handleRemoveCard(evt) {
    evt.target.closest('.element').remove();
  }

  /**
   * Обработчик события смены состояния кнопки лайк
   * @param evt - событие
   */
  _handleToggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }
}

