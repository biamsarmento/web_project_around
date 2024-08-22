import PopupWithImage from './PopupWithImage.js';

const content = document.querySelector(".content");

export class Card {
  constructor(data) {
    this._title = data.title;
    this._link = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Continuar aqui
  _setEventListeners() {

    this._element.querySelector(".card__tag-like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__tag-like_liked");
    });

    this._element.querySelector(".card__image-link").addEventListener("click", () => {
      this.handleCardClick();
    });

    this._element.querySelector(".card__delete-button").addEventListener("click", () => {
      this._element.remove();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__tag-title").textContent = this._title;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._title;

    return this._element;
  }

  handleCardClick() {
    const imagePopup = new PopupWithImage("image-popup");
    imagePopup.open(this._title, this._link);
    imagePopup.setEventListeners();
  }
}