  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  // const setEventListeners = (formElement) => {
  //   const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  //   inputList.forEach((inputElement) => {
  //     inputElement.addEventListener("input", function () {
  //       checkInputValidity(formElement, inputElement);
  //     });
  //   });
  // };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__submit-button_inactive");
      console.log(buttonElement);
    } else {
      buttonElement.classList.remove("form__submit-button_inactive");
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__submit-button");
    console.log(buttonElement);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(formElement.querySelectorAll(".form__fieldset"));
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });

      // setEventListeners(formElement);
    });
  };

  // Não sei pq não funciona... :(
  export function formReset(thisForm) {

    form1 = document.querySelector("#form1");
    form2 = document.querySelector("#form2");

    form1.reset();
    form2.reset();
  }

  // module.exports = formReset;

  enableValidation();

  // enableValidation({
  //   formSelector: ".popup__form",
  //   inputSelector: ".popup__input",
  //   submitButtonSelector: ".popup__button",
  //   inactiveButtonClass: "popup__button_disabled",
  //   inputErrorClass: "popup__input_type_error",
  //   errorClass: "popup__error_visible"
  // });

  // export { formReset };