import { Popup } from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFormDelete = this._popup.querySelector(".popup__formDelete");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormDelete.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  setSubmitHandler(submitHandler) {
    this._handleSubmit = submitHandler;
  }
}

export { PopupWithConfirmation };
