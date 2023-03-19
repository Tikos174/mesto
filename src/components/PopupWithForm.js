import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSubmit = this._popup.querySelector(".popup__input");
    this._formSafeSubmit = this._popup.querySelector(".popup__safe");
    this._formListInput = this._popup.querySelectorAll(".popup__input-save");
  }

  _getInputValues() {
    this._formValues = {};

    this._formListInput.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  setEventListeners() {
    this._formSubmit.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      super.close()
    });
    super.setEventListeners();

  }
}
export { PopupWithForm };
