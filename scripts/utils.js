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

export function togglePopup(item, className) {
  if(item.classList.contains(className)) {
    item.classList.remove(className);
    // formReset();
  } else {
    item.classList.add(className);
  }
}

export function handlePopup(evt) {
  evt.preventDefault();

  togglePopup(popup, "popup_opened");

  window.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popup.classList.remove("popup_opened");
    }
  });

  const nome = document.querySelector(".form__input_type_name");
  const atividade = document.querySelector(".form__input_type_activity");

  if (nome.value == "" || atividade.value == "") {

    nome.value = profileName.textContent;
    atividade.value = profileActivity.textContent;
    }
}

export function handleSaveChanges(evt) {

  evt.preventDefault();

  const nome = document.querySelector(".form__input_type_name");
  const atividade = document.querySelector(".form__input_type_activity");

  profileName.textContent = nome.value;
  profileActivity.textContent = atividade.value;

  togglePopup(popup, "popup_opened");
}

export function handleNewCardPopup(evt) {
  evt.preventDefault();
  togglePopup(newCardPopup, "new-card-popup_opened");

  window.addEventListener("click", (evt) => {
    if (evt.target == newCardPopup) {
      newCardPopup.classList.remove("new-card-popup_opened");
    }
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key == "Escape") {
      newCardPopup.classList.remove("new-card-popup_opened");
    }
  });

  const titulo = document.querySelector(".form__input_type_title");
  const url = document.querySelector(".form__input_type_url");

  titulo.value = "";
  url.value = "";
}

export function handleImagePopup() {
  togglePopup(imagePopup, "image-popup_opened");

  window.addEventListener("click", (evt) => {
    if (evt.target == imagePopup) {
      imagePopup.classList.remove("image-popup_opened");
    }
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      imagePopup.classList.remove("image-popup_opened");
    }
  });
}

// export {togglePopup, handleSaveChanges, handleImagePopup, handleNewCardPopup, handlePopup};