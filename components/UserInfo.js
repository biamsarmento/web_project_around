export default class UserInfo {
  constructor({userName, userActivity}) {
    this._userName = document.querySelector(userName);
    this._userActivity = document.querySelector(userActivity);
  }

  getUserInfo() {

    return {
      nome: this._userName.textContent,
      atividade: this._userActivity.textContent
    };
  }

  setUserInfo({ nome, atividade }) {
    this._userName.textContent = nome;
    this._userActivity.textContent = atividade;
  }
}