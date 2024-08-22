export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
      console.log(inputElement.validity.valid);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid)};

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {

    // const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    // const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // this._toggleButtonState(inputList, buttonElement);
    });

    this._setEventListeners();
  };

}