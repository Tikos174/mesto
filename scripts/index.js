let openPopUp = document.querySelector(".profile__button");
let popUp = document.querySelector(".popup");
let closepopUp = document.querySelector(".popup__close");

let nameUser = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__text");
let formElement = document.querySelector(".popup__input");
let nameInput = document.querySelector(".popup__input-save_type_name");
let jobInput = document.querySelector(".popup__input-save_type_about");

openPopUp.addEventListener("click", handleOpen);
function handleOpen() {
  popUp.classList.add("popup_display-open");
  nameInput.value = nameUser.textContent;
  jobInput.value = profession.textContent;
}

closepopUp.addEventListener("click", handleClose);
function handleClose() {
  popUp.classList.remove("popup_display-open");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  handleClose();
}

formElement.addEventListener("submit", handleFormSubmit);
