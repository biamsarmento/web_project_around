let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__info-edit-button");
let profileName = content.querySelector(".profile__info-title");
let profileActivity = content.querySelector(".profile__info-activity");
let submitButton = content.querySelector(".popup__submit-button");
let closePopupButton = content.querySelector(".popup__close-button");
let popup = content.querySelector(".popup");

function handlePopup() {
  popup.classList.toggle("popup_disabled");
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
    console.log("Campos vazios");
  }
}

// function handleEditProfile() {

//   handlePopup();

//   let nome = document.querySelector(".form__input_type_name");
//   let atividade = document.querySelector("form__input_type_activity");

//   handleSaveChanges();
//   if (nome != "" && atividade != "") {
//     profileName.textContent = nome.value;
//     profileActivity.textContent = atividade.value;
//   }
//   else {

//   }


//   submitButton.addEventListener('click', handleClosePopup);

//   nome.value = "";
//   atividade.value = "";
// }

// function addSong() {
//   let artist = document.querySelector('.input__text_type_artist');
//   let song = document.querySelector('.input__text_type_song');

//   songscontent.insertAdjacentHTML('beforeend', `
// 		<div class="song">
//       <h4 class="song__artist">${artist.value}</h4>
//       <p class="song__title">${song.value}</p>
// 		  <button class="song__like"></button>
// 		</div>
//   `);

//   artist.value = "";
//   song.value = "";
//   renderAdded();
// }

editButton.addEventListener('click', handlePopup);
closePopupButton.addEventListener('click', handlePopup);
submitButton.addEventListener('click', handleSaveChanges);

