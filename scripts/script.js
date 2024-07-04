const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-button");
const profileName = content.querySelector(".profile__info-title");
const profileActivity = content.querySelector(".profile__info-activity");
const submitButton = content.querySelector(".popup__submit-button");
const closePopupButton = content.querySelector(".popup__close-button");
const popup = content.querySelector(".popup");
const likes = content.querySelectorAll(".card__tag-like");
const form = content.querySelector(".form");
const newCard = content.querySelector(".profile__add-button");
const newCardPopup = content.querySelector(".new-card-popup");
const closeNewCardPopupButton = content.querySelector(".new-card-popup__close-button");
const formNewCard = content.querySelector(".form-new-card");
const cards = content.querySelector(".elements");
const deleteCard = content.querySelector(".card__delete-button");
const imagePopup = content.querySelector(".image-popup");
const closeImagePopup = content.querySelector(".image-popup__close-button");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function handlePopup() {
  popup.classList.toggle("popup_opened");

  const nome = document.querySelector(".form__input_type_name");
  const atividade = document.querySelector(".form__input_type_activity");

  if (nome.value == "" || atividade.value == "") {

    nome.value = profileName.textContent;
    atividade.value = profileActivity.textContent;
  }
}

function handleSaveChanges(evt) {

  evt.preventDefault();

  const nome = document.querySelector(".form__input_type_name");
  const atividade = document.querySelector(".form__input_type_activity");

  profileName.textContent = nome.value;
  profileActivity.textContent = atividade.value;

  handlePopup();
}

function handleNewCardPopup() {
  newCardPopup.classList.toggle("new-card-popup_opened");

  const titulo = document.querySelector(".form-new-card__input_type_title");
  const url = document.querySelector(".form-new-card__input_type_url");

  titulo.value = "";
  url.value = "";
}

function handleImagePopup() {
  imagePopup.classList.toggle("image-popup_opened");
}

function handleNewCard(evt) {

  evt.preventDefault();

  const titulo = document.querySelector(".form-new-card__input_type_title");
  const url = document.querySelector(".form-new-card__input_type_url");

  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = url.value;
  cardElement.querySelector(".card__image").alt = titulo.value;
  cardElement.querySelector(".card__tag-title").textContent = titulo.value;

  cardElement.querySelector(".card__tag-like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__tag-like_liked");
  });

  cardElement.querySelector(".card__image-link").addEventListener("click", function() {
    handleImagePopup();
    const image = content.querySelector(".image-popup__picture");
    image.src = cardElement.querySelector(".card__image").src;
    const title = content.querySelector(".image-popup__title");
    title.textContent = cardElement.querySelector(".card__tag-title").textContent;
  });

  cardElement.querySelector(".card__delete-button").addEventListener("click", function () {
    cardElement.remove();
  });

  cards.prepend(cardElement);

  handleNewCardPopup();
}

function loadInitialCards(initialCards) {
  initialCards.forEach(card => {

    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    cardElement.querySelector(".card__image").src = card.link;
    cardElement.querySelector(".card__image").alt = card.name;
    cardElement.querySelector(".card__tag-title").textContent = card.name;

    cardElement.querySelector(".card__tag-like").addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__tag-like_liked");
    });

    cardElement.querySelector(".card__image-link").addEventListener("click", function() {
      handleImagePopup();
      const image = content.querySelector(".image-popup__picture");
      image.src = card.link;
      const title = content.querySelector(".image-popup__title");
      title.textContent = card.name;
    });

    cardElement.querySelector(".card__delete-button").addEventListener("click", function () {
      cardElement.remove();
    });

    cards.append(cardElement);
  });
}

loadInitialCards(initialCards);

editButton.addEventListener('click', handlePopup);
closePopupButton.addEventListener('click', handlePopup);
form.addEventListener('submit', handleSaveChanges)
newCard.addEventListener('click', handleNewCardPopup);
closeNewCardPopupButton.addEventListener('click', handleNewCardPopup);
formNewCard.addEventListener('submit', handleNewCard);
closeImagePopup.addEventListener('click', handleImagePopup);
