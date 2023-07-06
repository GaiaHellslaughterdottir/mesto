export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers,
      method: 'GET',
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
  };


  getUserProfileInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'GET',
    })
      .then(this._checkResponse)
      .then((res) => {
        return {name: res.name, vocation: res.about, avatar: res.avatar, _id: res._id};
      })
  }

  postUserProfileInfo({name, vocation}) {
    return fetch(this._baseUrl + '/users/me', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          name: name,
          about: vocation
        })
      }
    )
      .then(this._checkResponse);
  }

  postUserProfileAvatar({avatar}) {
    return fetch(this._baseUrl + '/users/me/avatar', {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar: avatar
        })
      }
    )
      .then(this._checkResponse);
  }

  postPlace({name, link}) {
    return fetch(this._baseUrl + '/cards', {
        headers: this._headers,
        method: 'POST',
        body: JSON.stringify({
          name: name,
          link: link
        })
      }
    )
      .then(this._checkResponse)
      .then((res) => {
        return res._id;
      })
  }

  deletePlace(_id) {
    return fetch(this._baseUrl + '/cards/' + _id, {
        headers: this._headers,
        method: 'DELETE'
      }
    )
      .then(this._checkResponse)
  }

  addPlaceLike(_id) {
    return fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'PUT'
      }
    )
      .then(this._checkResponse)
      .then((res) => {
        return res.likes;
      })
  }

  removePlaceLike(_id) {
    return fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'DELETE'
      }
    )
      .then(this._checkResponse)
      .then((res) => {
        return res.likes;
      })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка выполнения запроса: ${res.status}`);
    }
  }
}

