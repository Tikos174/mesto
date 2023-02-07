
const enableValidation = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-save",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
};

function formValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    formIputAdd(form, config);
    form.addEventListener("input", () => {
      buttonSafe(form, config);
    });
  });
}

function formHandleInput(event, config) {
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

function buttonSafe(form, config) {
  const buttonClickSafe = form.querySelector(config.submitButtonSelector);
  const buttonSwitch = form.checkValidity();

  buttonClickSafe.disabled = !buttonSwitch;

  buttonClickSafe.classList.toggle(config.inactiveButtonClass, !buttonSwitch);
}

function formIputAdd(form, config) {
  const imputList = Array.from(form.querySelectorAll(config.inputSelector));

  imputList.forEach(function (item) {
    item.addEventListener("input", (event) => {
      formHandleInput(event, config);
    });
  });
}

formValidation(enableValidation);
