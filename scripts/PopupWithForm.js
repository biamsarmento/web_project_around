import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(`.${popupSelector}`);
  }

  close() {
    if(this._popupSelector == "new-card-popup") {
      const form = this._popup.querySelector(".form");
      form.reset();
    }

    document.querySelector(`.${this._popupSelector}`).classList.remove(`${this._popupSelector}_opened`);

    // Isso tá funcionando? Acho que tem algo aqui
  }

  setEventListeners() {

    window.addEventListener("click", (evt) => {
      if (evt.target == document.querySelector(`.${this._popupSelector}`) || evt.target == document.querySelector(`.${this._popupSelector}__close-button`)) {
        this.close();
      }
    });

    window.addEventListener("keydown", (evt) => {
      if (evt.key == "Escape") {
        this.close();
      }
    });

    const submitButton = this._popup.querySelector(".form");
    submitButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const worked = this._handleFormSubmit(this._getInputValues());

      if(worked) {
        this.close();
      }
    });
  }

  _getInputValues() {

    const inputs = this._popup.querySelectorAll(".form__input");

    const values = {};

    inputs.forEach(input => {
      values[input.name] = input.value;
    });

    return values;
  }
}