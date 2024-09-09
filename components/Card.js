import PopupWithImage from './PopupWithImage.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';
import Api from './Api.js';

// const content = document.querySelector(".content");

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    // this._numberOfLikes = data.likes.length ? data.likes.length : 0;
    this._numberOfLikes = Array.isArray(data.likes) ? data.likes.length : 0;
    this._isLiked = this._numberOfLikes > 0 ? true : false;
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

    const api = new Api({
      baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-13",
      headers: {
        authorization: "4fe5fb1a-9a42-4631-9f7e-39eb49951a0f",
        "Content-Type": "application/json"
      }
    });

    this._element.querySelector(".card__tag-like").addEventListener("click", (evt) => {

      if(evt.target.classList.contains("card__tag-like_liked")) {
        evt.target.classList.remove("card__tag-like_liked");
        api.removeLike(this._id)
          .then((result) => {
            console.log("ResultadoRemLikes:", result);
            this._likes = result.likes;
            this._numberOfLikes = Array.isArray(result.likes) ? result.likes.length : 0;
            console.log("Result after update: ", this._numberOfLikes);
            location.reload(true);
          })
          .catch((err) => {
            console.error("Erro ao obter cartões iniciais:", err);
          });

      } else {
        evt.target.classList.add("card__tag-like_liked");
        api.addLike(this._id)
          .then((result) => {
            console.log("ResultadoAddLikes:", result);
            this._likes = result.likes;
            this._numberOfLikes = Array.isArray(result.likes) ? result.likes.length : 0;
            console.log("Result after update: ", this._numberOfLikes);
            location.reload(true);
          })
          .catch((err) => {
            console.error("Erro ao obter cartões iniciais:", err);
          });
      }

    });

    this._element.querySelector(".card__image-link").addEventListener("click", () => {
      this.handleCardClick();
    });

    this._element.querySelector(".card__delete-button").addEventListener("click", () => {
      const popupConf = new PopupWithConfirmation("delete-popup");
      popupConf.open();
      console.log("ThisId: ", this._id);
      popupConf.setEventListeners(this._id);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__tag-title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__tag-like-count").textContent = this._numberOfLikes;
    if(this._numberOfLikes > 0) {
      this._element.querySelector(".card__tag-like").classList.add("card__tag-like_liked");
    } else {
      this._element.querySelector(".card__tag-like").classList.remove("card__tag-like_liked");
    }

    return this._element;
  }

  handleCardClick() {
    const imagePopup = new PopupWithImage("image-popup");
    imagePopup.open(this._name, this._link);
    imagePopup.setEventListeners();
  }

  // reloadLikes() {
  //   this._element.querySelector(".card__tag-like-count").textContent = this._numberOfLikes;
  // }

  // addLike() {
  //   this._element.querySelector(".card__tag-like-count").textContent = this._numberOfLikes + 1;
  // }

  // removeLike() {

  //   if(this._numberOfLikes <= 0) {
  //     return
  //   } else if(this._numberOfLikes > 0) {
  //     this._numberOfLikes -= 1;
  //     this._element.querySelector(".card__tag-like-count").textContent = this._numberOfLikes;
  //   }
  // }
}