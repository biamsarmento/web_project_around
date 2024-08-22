import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupselector) {
    super(popupselector);
  }

  // Arrumar
  open(name, link) {
    super.open();
    const image = document.querySelector(".image-popup__picture");
    image.src = link;
    const title = document.querySelector(".image-popup__title");
    title.textContent = name;
  }
}