class Validation {
  constructor(
    inputsArrError,
    inputErrorMessages,
    form,
    buttonForm,
    popUp,
    arrInputs
  ) {
    this.inputsArrError = inputsArrError;
    this._inputErrorMessages = inputErrorMessages;
    this.form = form;
    this.buttonForm = buttonForm; // -------------------------
    this.popUp = popUp;
    this.arrInputs = arrInputs;
  }

  setError = (input) => {
    const span = input.nextElementSibling;
    span.innerText = input.validationMessage;
  };

  checkValidity(item) {
    if (item.validity.patternMismatch && item.type === "tel") {
      //
      item.setCustomValidity(this._inputErrorMessages.telError);
      this.setError(item);
      return false;
    }

    if (item.validity.patternMismatch && item.type === "text") {
      //
      item.setCustomValidity(this._inputErrorMessages.textError);
      this.setError(item);
      return false;
    }

    if (item.validity.valueMissing) {
      //
      item.setCustomValidity(this._inputErrorMessages.emptyInputError);
      this.setError(item);

      return false;
    }
    if (item.validity.patternMismatch && item.type === "email") {
      //
      item.setCustomValidity(this._inputErrorMessages.emailError);
      this.setError(item);
      return false;
    }

    if (item.validity.tooShort || item.validity.tooLong) {
      //
      item.setCustomValidity(this._inputErrorMessages.inputErrorShortLong);
      this.setError(item);
      return false;
    }

    item.setCustomValidity("");
    this.setError(item);

    return true;
  }

  setEventListeners = (formButtonOpen) => {
    this.form.addEventListener("input", (event) => {
      this.button = event.currentTarget.querySelector("button");
      this.arrInputs.forEach((i) => {
        const item = i;
        if (event.target === item) {
          this.checkValidity(item);
        } else {
          item.textContent = "";
        }
      });

      if (this.arrInputs.every((item) => item.validity.valid)) {
        this.setSubmitButtonState(this.button, true);
      } else {
        this.setSubmitButtonState(this.button, false);
      }
    });

    formButtonOpen.addEventListener("click", () => {
      this.setSubmitButtonState(this.buttonForm, false);

      this.resetInputs(this.inputsArrError);
    });
  };

  resetInputs = (inputsArrError) => {
    if (this.popUp.classList.contains("popup_is-opened")) {
      inputsArrError.forEach((i) => {
        const item = i;
        item.innerText = "";
        this.form.reset();
      });
    }
  };

  setSubmitButtonState = (button, isValid) => {
    if (isValid) {
      button.removeAttribute("disabled");
      button.classList.add("popup__form-button_blue");
      button.classList.remove("popup__form-button_grey");
    } else {
      button.setAttribute("disabled", true);
      button.classList.remove("popup__form-button_blue");
      button.classList.add("popup__form-button_grey");
    }
  };
}
