import PopupWithImage from './PopupWithImage.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';

// const content = document.querySelector(".content");

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {

    this._element.querySelector(".card__tag-like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__tag-like_liked");
    });

    this._element.querySelector(".card__image-link").addEventListener("click", () => {
      this.handleCardClick();
    });

    this._element.querySelector(".card__delete-button").addEventListener("click", () => {
      const popupConf = new PopupWithConfirmation("delete-popup");
      popupConf.open();
      popupConf.setEventListeners(this._id);
      // this._element.remove();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__tag-title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;

    return this._element;
  }

  handleCardClick() {
    const imagePopup = new PopupWithImage("image-popup");
    imagePopup.open(this._name, this._link);
    imagePopup.setEventListeners();
  }
}