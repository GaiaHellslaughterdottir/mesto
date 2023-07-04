export default class UserInfo {
  constructor(userNameSelector, userInfoSelector, userAvatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['name'] = this._userNameElement.textContent;
    userInfo['vocation'] = this._userInfoElement.textContent;
    userInfo['avatar'] = this._userAvatarElement.style.backgroundImage
      .slice(4, -1).replace(/"/g, "");
    userInfo['_id'] = this._id;
    return userInfo;
  }

  setUserInfo({name, vocation, _id}) {
    this._userNameElement.textContent = name;
    this._userInfoElement.textContent = vocation;
    this._id = _id;
  }

  setUserAvatar({avatar}) {
    this._userAvatarElement.style.backgroundImage = `url("${avatar}")`;
  }

  getId() {
    return this._id;
  }
}