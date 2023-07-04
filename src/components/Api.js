export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards(renderCardItems) {
    fetch(this._baseUrl + '/cards', {
      headers: this._headers,
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Ошибка получения карточек галереи: ${res.status}`);
        }
      })
      .then((res) => {
        renderCardItems(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getUserProfileInfo(renderUserProfileInfo) {
    fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Ошибка получения информации профиля пользователя: ${res.status}`);
        }
      })
      .then((res) => {
        renderUserProfileInfo({name: res.name, vocation: res.about, avatar: res.avatar, _id: res._id});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  postUserProfileInfo({name, vocation}) {
    fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          name: name,
          about: vocation
        })
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.log(`Ошибка сохранения информации профиля пользователя: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  postUserProfileAvatar({avatar}) {
    fetch(this._baseUrl + '/users/me/avatar', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar: avatar
        })
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.log(`Ошибка сохранения аватара пользователя: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  postPlace({name, link}, cardPosted) {
    fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: 'POST',
        body: JSON.stringify({
          name: name,
          link: link
        })
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Ошибка сохранения карточки места: ${res.status}`);
        }
      })
      .then((res) => {
          cardPosted(res._id);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deletePlace(_id, cardDeleted) {
    fetch(this._baseUrl + '/cards/' + _id, {
        headers: this._headers,
        method: 'DELETE'
      }
    )
      .then((res) => {
        if (res.ok) {
          cardDeleted();
        } else {
          console.log(`Ошибка удаления карточки места: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addPlaceLike(_id, updateLikes) {
    fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'PUT'
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Ошибка добавления лайка карточке места: ${res.status}`);
        }
      })
      .then((res) => {
          updateLikes(res.likes);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  removePlaceLike(_id, updateLikes) {
    fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'DELETE'
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Ошибка удаления лайка карточке места: ${res.status}`);
        }
      })
      .then((res) => {
          updateLikes(res.likes);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

