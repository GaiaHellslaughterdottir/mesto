export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    const promise = new Promise(function (resolve, reject) {
      fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: 'GET',
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject(`Ошибка получения карточек галереи: ${res.status}`);
          }
        })
        .then((res) => {
          resolve(res);
        })
    }.bind(this));
    return promise;
  }

  getUserProfileInfo() {
    const promise = new Promise(function (resolve, reject) {
      fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'GET',
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject(`Ошибка получения информации профиля пользователя: ${res.status}`);
          }
        })
        .then((res) => {
          resolve({name: res.name, vocation: res.about, avatar: res.avatar, _id: res._id});
        })
    }.bind(this));
    return promise;
  }

  postUserProfileInfo({name, vocation}) {
    const promise = new Promise(function (resolve, reject) {
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
            reject(`Ошибка сохранения информации профиля пользователя: ${res.status}`);
          } else {
            resolve();
          }
        })
    }.bind(this));
    return promise;
  }

  postUserProfileAvatar({avatar}) {
    const promise = new Promise(function (resolve, reject) {
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
            reject(`Ошибка сохранения аватара пользователя: ${res.status}`);
          } else {
            resolve();
          }
        })
    }.bind(this));
    return promise;
  }

  postPlace({name, link}) {
    const promise = new Promise(function (resolve, reject) {
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
            reject(`Ошибка сохранения карточки места: ${res.status}`);
          }
        })
        .then((res) => {
          resolve(res._id);
        })
    }.bind(this));
    return promise;
  }

  deletePlace(_id) {
    const promise = new Promise(function (resolve, reject) {
      fetch(this._baseUrl + '/cards/' + _id, {
          headers: this._headers,
          method: 'DELETE'
        }
      )
        .then((res) => {
          if (res.ok) {
            resolve();
          } else {
            reject(`Ошибка удаления карточки места: ${res.status}`);
          }
        })
    }.bind(this));
    return promise;
  }

  addPlaceLike(_id) {
    const promise = new Promise(function (resolve, reject) {
      fetch(this._baseUrl + '/cards/' + _id + '/likes', {
          headers: this._headers,
          method: 'PUT'
        }
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject(`Ошибка добавления лайка карточке места: ${res.status}`);
          }
        })
        .then((res) => {
          resolve(res.likes);
        })
    }.bind(this));
    return promise;
  }

  removePlaceLike(_id) {
    const promise = new Promise(function (resolve, reject) {
      fetch(this._baseUrl + '/cards/' + _id + '/likes', {
          headers: this._headers,
          method: 'DELETE'
        }
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject(`Ошибка удаления лайка карточке места: ${res.status}`);
          }
        })
        .then((res) => {
          resolve(res.likes);
        })
    }.bind(this));
    return promise;
  }
}

