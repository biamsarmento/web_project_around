import * as Popups from './utils.js';
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-button");
const profileName = content.querySelector(".profile__info-title");
const profileActivity = content.querySelector(".profile__info-activity");
const submitButton = content.querySelector(".popup__submit-button");
const closePopupButton = content.querySelector(".popup__close-button");
export const popup = content.querySelector(".popup");
const likes = content.querySelectorAll(".card__tag-like");
const form = content.querySelector(".form");
const newCard = content.querySelector(".profile__add-button");
export const newCardPopup = content.querySelector(".new-card-popup");
const closeNewCardPopupButton = content.querySelector(".new-card-popup__close-button");
const formNewCard = content.querySelector(".form-new-card");
const novoCard = content.querySelector(".new-card-popup");
const formSubmitButton = novoCard.querySelector(".form__submit-button");
const cards = content.querySelector(".elements");
const deleteCard = content.querySelector(".card__delete-button");
const imagePopup = content.querySelector(".image-popup");
const closeImagePopup = content.querySelector(".image-popup__close-button");
const popup1 = content.querySelector(".popup");
const popup2 = content.querySelector(".new-card-popup");
const submitButton1 = popup1.querySelector(".form");
const submitButton2 = popup2.querySelector(".form");


const initialCards = [
  {
    title: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    title: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    title: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function inicio() {
  initialCards.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();
    document.querySelector(".elements").prepend(cardElement);
  });
}

inicio();


editButton.addEventListener('click', Popups.handlePopup);
closePopupButton.addEventListener('click', Popups.handlePopup);
submitButton1.addEventListener('submit', Popups.handleSaveChanges)
newCard.addEventListener('click', Popups.handleNewCardPopup);
closeNewCardPopupButton.addEventListener('click', Popups.handleNewCardPopup);
closeImagePopup.addEventListener('click', Popups.handleImagePopup);
// submitButton2.addEventListener('submit', handleNewCard);
submitButton2.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const title = document.querySelector('.form__input_type_title').value;
  const url = document.querySelector('.form__input_type_url').value;

  const cardData = {
    title: title,
    link: url,
  };

  const card = new Card(cardData);
  const cardElement = card.generateCard();
  document.querySelector(".elements").prepend(cardElement);
  Popups.handleNewCardPopup(evt);
});

function pressedEnter(evt) {

  if (evt.key === "Enter") {
    evt.preventDefault();
  }
}

document.querySelector(".form__input_type_name").addEventListener("keydown", pressedEnter);
document.querySelector(".form__input_type_activity").addEventListener("keydown", pressedEnter);
document.querySelector(".form__input_type_title").addEventListener("keydown", pressedEnter);
document.querySelector(".form__input_type_url").addEventListener("keydown", pressedEnter);

const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  errorClass: 'form__input-error_active'
};

const formList = Array.from(document.querySelectorAll(".form"));

formList.forEach((item) => {
  const form = new FormValidator(formConfig, item);
  form.enableValidation();
});