class PopupForm extends Popup {
  constructor(popUp, popupButton, body, form, requestButton) {
    super(popUp, popupButton, body, form, requestButton);
  }

  setEventListeners(addButton) {
    addButton.addEventListener("click", () => {
      super.openEvent();
      this.removeEventListeners();
    });
  }

  setEventListenersNext() {
    this.popUpNextButton.addEventListener("click", () => {
      super.openCloseEventNext();
      this.closeForm();

      this.removeEventListeners();
    });
  }

  closeForm() {
    super.closeNext();
  }
}
