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
    return userInfo;
  }

  setUserInfo({name, vocation}) {
    this._userNameElement.textContent = name;
    this._userInfoElement.textContent = vocation;
  }

  getUserAvatar() {
    const userAvatar = {};
    userAvatar['avatar'] = this._userAvatarElement.style.backgroundImage
      .slice(4, -1).replace(/"/g, "");
    return userAvatar;
  }

  setUserAvatar({avatar}) {
    this._userAvatarElement.style.backgroundImage = `url("${avatar}")`;
  }
}