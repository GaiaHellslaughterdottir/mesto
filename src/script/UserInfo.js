export default class UserInfo {
  constructor(userNameSelector, userInfoSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['name'] = this._userNameElement.textContent;
    userInfo['vocation'] = this._userInfoElement.textContent;
    return userInfo;
  }

  setUserInfo({name, vocation}) {
    this._userNameElement.textContent = name;
    this._userInfoElement.textContent = vocation;
  }
}