let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__info-edit-button");
let profileName = content.querySelector(".profile__info-title");
let profileActivity = content.querySelector(".profile__info-activity");
let submitButton = content.querySelector(".popup__submit-button");
let closePopupButton = content.querySelector(".popup__close-button");
let popup = content.querySelector(".popup");
let likes = content.querySelectorAll(".card__tag-like");

function handlePopup() {
  popup.classList.toggle("popup_opened");

  let nome = document.querySelector(".form__input_type_name");
  let atividade = document.querySelector(".form__input_type_activity");

  if (nome.value == "" || atividade.value == "") {

    nome.value = profileName.textContent;
    atividade.value = profileActivity.textContent;
  }
}

function handleSaveChanges() {

  let nome = document.querySelector(".form__input_type_name");
  let atividade = document.querySelector(".form__input_type_activity");

  if (nome.value != "" && atividade.value != "") {
    profileName.textContent = nome.value;
    profileActivity.textContent = atividade.value;
    handlePopup();
  }
  else {
    alert("Preencha os campos!");
  }
}

editButton.addEventListener('click', handlePopup);
closePopupButton.addEventListener('click', handlePopup);
submitButton.addEventListener('click', handleSaveChanges);

likes.forEach(like => {
  like.addEventListener('click', () => {
      like.classList.toggle("card__tag-like_liked");
  });
});

