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
      .then(res => res.json())
      .then((res) => {
        renderCardItems(res);
      })
  }

  getUserProfileInfo(renderUserProfileInfo) {
    fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'GET',
    })
      .then(res => res.json())
      .then((res) => {
        renderUserProfileInfo({name: res.name, vocation: res.about, avatar: res.avatar});
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
      .then(res => res.json())
      .then((res) => {
        cardPosted(res._id);
      })
  }

  deletePlace(_id) {
    fetch(this._baseUrl + '/cards/' + _id, {
        headers: this._headers,
        method: 'DELETE'
      }
    )
  }

  addPlaceLike(_id, updateLikes) {
    fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'PUT'
      }
    )
      .then(res => res.json())
      .then((res) => {
        updateLikes(res._id, res.likes);
      })
  }

  removePlaceLike(_id, updateLikes) {
    fetch(this._baseUrl + '/cards/' + _id + '/likes', {
        headers: this._headers,
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then((res) => {
        updateLikes(res._id, res.likes);
      })
  }

}

