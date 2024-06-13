const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-button");
const profileName = content.querySelector(".profile__info-title");
const profileActivity = content.querySelector(".profile__info-activity");
const submitButton = content.querySelector(".popup__submit-button");
const closePopupButton = content.querySelector(".popup__close-button");
const popup = content.querySelector(".popup");
const likes = content.querySelectorAll(".card__tag-like");
const form = content.querySelector(".form");

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

editButton.addEventListener('click', handlePopup);
closePopupButton.addEventListener('click', handlePopup);
form.addEventListener('submit', handleSaveChanges)

likes.forEach(like => {
  like.addEventListener('click', () => {
      like.classList.toggle("card__tag-like_liked");
  });
});

