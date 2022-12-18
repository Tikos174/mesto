let openPopUp = document.querySelector(".profile__button");
let popUp = document.querySelector(".popup");
let closepopUp = document.querySelector(".popup__close");
let nameDefault = document.querySelector(".popup__name").value = "Жак-Ив Кусто";
let profDefault = document.querySelector(".popup__block").value = "Исследователь океана";

openPopUp.addEventListener("click", handleOpen);
function handleOpen() {
  popUp.classList.add("popup__open");
}

closepopUp.addEventListener("click", handleClose);
function handleClose() {
  popUp.classList.remove("popup__open");
}

let nameUser = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__text");
let saveImput = document.querySelector(".popup__safe");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__block");

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameUser.innerHTML = nameInput.value;
  profession.innerHTML = jobInput.value;
  handleClose();
}

formElement.addEventListener("submit", handleFormSubmit);
