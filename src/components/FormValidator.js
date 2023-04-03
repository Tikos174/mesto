class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;

    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
  }

  enableValidation(){
    this._inputList.forEach((item) => {
      item.addEventListener("input", this._activeValidation.bind(this));
    });
    this.toggleButtonState()
  }
 
  _activeValidation(event){
    this._handleFormAddInput(event)
    this.toggleButtonState()
  }

  _handleFormAddInput(event) {
    const input = event.target;
    const inputId = input.id;
    this._errorText = this._form.querySelector(`#${inputId}-error`);
  
    if (input.validity.valid) {
      input.classList.remove(this._config.errorClass);
      this._errorText.textContent = "";
    } else {
      input.classList.add(this._config.errorClass);
      this._errorText.textContent = input.validationMessage;
    }
  }

  toggleButtonState () {
    const buttonSwitch = this._form.checkValidity();
  
    this._submitButton.disabled = !buttonSwitch;
  
    this._submitButton.classList.toggle(this._config.inactiveButtonClass, !buttonSwitch);
  }

}

export {FormValidator}