import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".popup__input");
    this._formSafeSubmit = this._popup.querySelector(".popup__safe");
    this._formListInput = this._popup.querySelectorAll(".popup__input-save");
    this._formSafeSubmitText = this._formSafeSubmit.textContent

  }

  _getInputValues() {
    this._formValues = {};

    this._formListInput.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  close() {
    super.close()
    this._formElement.reset()
  }

  loadingData(){
    this._formSafeSubmit.textContent = 'Сохранение...'
  }

  endLoadingData(){
    this._formSafeSubmit.textContent = this._formSafeSubmitText
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();

  }
}
export { PopupWithForm };
