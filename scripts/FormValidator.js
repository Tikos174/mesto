class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation(){
    const imputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    imputList.forEach((item) => {
      item.addEventListener("input", this._activeValidation.bind(this));
    });
  }
 
  _activeValidation(event){
    this._handleFormAddInput(event)
    this._disabledButtonSafe()
  }

  _handleFormAddInput(event) {
    const input = event.target;
    const inputId = input.id;
    const errorText = document.querySelector(`#${inputId}-error`);
  
    if (input.validity.valid) {
      input.classList.remove(this._config.errorClass);
      errorText.textContent = "";
    } else {
      input.classList.add(this._config.errorClass);
      errorText.textContent = input.validationMessage;
    }
  }

  _disabledButtonSafe () {
    const buttonClickSafe = this._form.querySelector(this._config.submitButtonSelector);
    const buttonSwitch = this._form.checkValidity();
  
    buttonClickSafe.disabled = !buttonSwitch;
  
    buttonClickSafe.classList.toggle(this._config.inactiveButtonClass, !buttonSwitch);
  }

}

export {FormValidator}