class Popup {
  constructor(popUp, popupButton, body, form, requestButton) {
    this.popupButton = popupButton;
    this.popup = popUp;
    this.body = body;
    this.form = form;
    this.requestButton = requestButton;
  }

  closeEvent() {
    this.popupButton.addEventListener("click", () => {
      this.close();
    });
    this.closeEsc();
    this.body.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup_is-opened")) {
        this.close();
      }
    });
  }

  openEvent() {
    this.popup.classList.toggle("popup_is-opened");
    this.clearContent();
    if (this.requestButton.classList.contains("popup__form-button_blue")) {
      this.requestButton.classList.remove("popup__form-button_blue");
      this.requestButton.classList.add("popup__form-button_grey");
    }
  }

  closeEsc() {
    this.body.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
  }

  clearContent() {
    this.form.reset();
  }

  close() {
    this.popup.classList.remove("popup_is-opened");
    this.clearContent();
    this.removeEventListeners();
  }

  removeEventListeners() {
    this.body.removeEventListener("keydown", this.closeEsc);
    this.popupButton.removeEventListener("click", this.close);
  }
}
