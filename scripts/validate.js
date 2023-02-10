
const enableValidation = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-save",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
};

function enableValidationCheck(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    enableValidationInput(form, config);
    form.addEventListener("input", () => {
      disabledButtonSafe(form, config);
    });
  });
}

// проверка валидации 
function handleFormAddInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorText = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorText.textContent = "";
  } else {
    input.classList.add(config.errorClass);
    errorText.textContent = input.validationMessage;
  }
}

function disabledButtonSafe(form, config) {
  const buttonClickSafe = form.querySelector(config.submitButtonSelector);
  const buttonSwitch = form.checkValidity();

  buttonClickSafe.disabled = !buttonSwitch;

  buttonClickSafe.classList.toggle(config.inactiveButtonClass, !buttonSwitch);
}

function enableValidationInput(form, config) {
  const imputList = Array.from(form.querySelectorAll(config.inputSelector));

  imputList.forEach(function (item) {
    item.addEventListener("input", (event) => {
      handleFormAddInput(event, config);
    });
  });
}

enableValidationCheck(enableValidation);
