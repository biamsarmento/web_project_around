import {Card} from "../../components/Card.js";
import {FormValidator} from "../../components/FormValidator.js";
import PopupWithForm from '../../components/PopupWithForm.js';
import Section from '../../components/Section.js';
import UserInfo from '../../components/UserInfo.js';
import UserProfilePic from '../../components/UserProfilePic.js';
import "./index.css";
import Api from "../../components/API.js";

const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-button");
export const popup = content.querySelector(".profile-popup");
const newCard = content.querySelector(".profile__add-button");
const elements = ".elements";
const editProfilePicButton = content.querySelector(".profile__avatar_button");


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

const firstCards = new Section({ items: initialCards, renderer: (item) => {

  const card = new Card(item);
  const cardElement = card.generateCard();
  firstCards.addItem(cardElement);

} }, elements);

firstCards.renderer();

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-13",
  headers: {
    authorization: "4fe5fb1a-9a42-4631-9f7e-39eb49951a0f",
    "Content-Type": "application/json"
  }
});

api.getInitialCards()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err); // registra o erro no console
  });

const userInfo = new UserInfo({userName: '.profile__info-title', userActivity: '.profile__info-activity'});
const userProfilePicInfo = new UserProfilePic('.profile__avatar');

const profilePopup = new PopupWithForm("profile-popup", (inputValues) => {

  userInfo.setUserInfo(inputValues);

  return true;
});

const newCardPopup = new PopupWithForm("new-card-popup", (inputValues) => {

  const card = new Card(inputValues);
  const cardElement = card.generateCard();

  firstCards.addItem(cardElement);

  return true;
});

const editProfilePicPopup = new PopupWithForm("edit-profile-pic-popup", (inputValue) => {

  console.log(inputValue);
  userProfilePicInfo.setUserProfilePic(inputValue);

  return true;
});

profilePopup.setEventListeners();
newCardPopup.setEventListeners();
editProfilePicPopup.setEventListeners();

editButton.addEventListener('click', () => {

  profilePopup.open();
  const novosValores = userInfo.getUserInfo();
  document.querySelector(".form__input_type_name").value = novosValores.nome;
  document.querySelector(".form__input_type_activity").value = novosValores.atividade;
});

newCard.addEventListener('click', () => {

  newCardPopup.open();
});

editProfilePicButton.addEventListener('click', () => {

  editProfilePicPopup.open();
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
