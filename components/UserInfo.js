export default class UserInfo {
  constructor({userName, userActivity}) {
    this._userName = document.querySelector(userName);
    this._userActivity = document.querySelector(userActivity);
  }

  getUserInfo() {

    return {
      name: this._userName.textContent,
      about: this._userActivity.textContent
    };
  }

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userActivity.textContent = about;
  }
}