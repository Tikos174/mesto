let openPopUp = document.querySelector(".profile__button");
let popUp = document.querySelector(".popup");
let closepopUp = document.querySelector(".popup__close");

let nameUser = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__text");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__name_input_save");
let jobInput = document.querySelector(".popup__about_input_save");

openPopUp.addEventListener("click", handleOpen);
function handleOpen() {
  popUp.classList.add("popup__display_open");
  nameInput.value = nameUser.textContent;
  jobInput.value = profession.textContent;
}

closepopUp.addEventListener("click", handleClose);
function handleClose() {
  popUp.classList.remove("popup__display_open");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  handleClose();
}

formElement.addEventListener("submit", handleFormSubmit);
