import Popup from './Popup.js';
import Api from './Api.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(`.${popupSelector}`);
  }

  setEventListeners(cardId) {

    window.addEventListener("click", (evt) => {
      if (evt.target == document.querySelector(`.${this._popupSelector}`) || evt.target == document.querySelector(`.${this._popupSelector}__close-button`)) {
        this.close();
      }
    });

    window.addEventListener("keydown", (evt) => {
      if (evt.key == "Escape") {
        this.close();
      }
    });

    const submitButton = this._popup.querySelector(".form");
    submitButton.addEventListener("submit", (evt) => {
      // evt.preventDefault();

      const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-13",
        headers: {
          authorization: "4fe5fb1a-9a42-4631-9f7e-39eb49951a0f",
          "Content-Type": "application/json"
        }
      });

      console.log("CardId: ", cardId);

      api.deleteCard(cardId);

      this.close();
    });
  }

}


// export default class PopupWithConfirmation extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._popup = document.querySelector(`.${popupSelector}`);

//     // Adiciona uma propriedade para armazenar as funções de event listener
//     this._handleClick = this._handleClick.bind(this);
//     this._handleKeyDown = this._handleKeyDown.bind(this);
//   }

//   _handleClick(evt) {
//     if (evt.target === this._popup || evt.target === this._popup.querySelector(`.${this._popupSelector}__close-button`)) {
//       this.close();
//     }
//   }

//   _handleKeyDown(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//   setEventListeners(evento) {
//     window.addEventListener("click", this._handleClick);
//     window.addEventListener("keydown", this._handleKeyDown);

//     const submitButton = this._popup.querySelector(".form");
//     submitButton.addEventListener("submit", (evt) => {
//       evt.preventDefault();

//       evento.remove();

//       super.close();
//     });
//   }

//   close() {
//       // Remove os event listeners
//     window.removeEventListener("click", this._handleClick);
//     window.removeEventListener("keydown", this._handleKeyDown);

//     super.close(); // Chama o método original `close` da classe `Popup`

//     // Remove o popup do DOM (opcional, se necessário)

//     // Exclui a instância do popup (opcional)
//     delete this._popup;
//   }
// }
