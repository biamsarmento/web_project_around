export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose() {
    window.addEventListener("keydown", (evt) => {
      if (evt.key == "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {

    window.addEventListener("click", (evt) => {
      if (evt.target == document.querySelector(`.${this._popupSelector}`) || evt.target == document.querySelector(`.${this._popupSelector}__close-button`)) {
        this.close();
      }
    });

    this._handleEscClose();
  }

  open() {
    document.querySelector(`.${this._popupSelector}`).classList.add(`${this._popupSelector}_opened`);
  }

  close() {
    document.querySelector(`.${this._popupSelector}`).classList.remove(`${this._popupSelector}_opened`);
  }
}