let openPopUp = document.querySelector(".profile__button");
let popUp = document.querySelector(".popup");
let closepopUp = document.querySelector(".popup__close");

let nameUser = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__text");
let formElement = document.querySelector(".popup__input");
let nameInput = document.querySelector(".popup__input-save_type_name");
let jobInput = document.querySelector(".popup__input-save_type_about");

let openPopUpProfil = document.querySelector(".profile__button-add");
let popUpProfil = document.querySelector(".popup__element");
let popUpProfilSave = document.querySelector(".popup__safe");
let popUpSaveNew = document.querySelector(".popup__safe-New");
let closePopUpProfil = document.querySelector(".popup__element-close");
const popBlockTextProfil = document.querySelector(".popup__input-save_type_nameNew");
const popBlockImgProfil = document.querySelector(".popup__input-save_type_aboutNew");

const imageBlock = document.querySelector(".popup__image");
const textBlock = document.querySelector(".popup__text-profil");
const closepop = document.querySelector(".popup__closeImg");

const elementLi = document.querySelector("#element-li").content;
const container = document.querySelector(".element");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

popUpProfilSave.addEventListener("click", handleFormSubmit);

openPopUpProfil.addEventListener("click", handleOpenProfil);
function handleOpenProfil() {
  popUpProfil.classList.add("popup_display-openNew");
}

closePopUpProfil.addEventListener("click", handleCloseProfil);
function handleCloseProfil() {
  popUpProfil.classList.remove("popup_display-openNew");
}

function createCard(card) {
  const elementBlock = elementLi.cloneNode(true);
  elementBlock.querySelector(".element__image").src = card.link;
  elementBlock.querySelector(".element__text").textContent = card.name;
  elementBlock.querySelector(".element__image").alt = card.name;

  container.prepend(elementBlock);
}

initialCards.forEach(function (element) {
  createCard(element);
});

function handleFormProfil(evt) {
  evt.preventDefault();
  const newCard = {
    name: popBlockTextProfil.value,
    link: popBlockImgProfil.value,
  };

  createCard(newCard);
  handleCloseProfil();
};

popUpSaveNew.addEventListener("click", handleFormProfil);

function clickLike(event) {
  const element = event.target;
  if (element.classList.contains("element__like")) {
    if (element.classList.contains("element__like-active")) {
      element.classList.remove("element__like-active");
    } else {
      element.classList.add("element__like-active");
    }
  }
}

function clickDelete(event) {
  const element = event.target;
  if (element.className === "element__delite") {
    let item = element.closest(".element__list");
    item.remove();
  }
}

function clickOpenModel(event) {
  const element = event.target;
  imageBlock.alt = element.alt;
  imageBlock.src = element.src;
  textBlock.textContent = element.alt;
}

container.addEventListener("click", clickLike);
container.addEventListener("click", clickDelete);
container.addEventListener("click", clickOpenModel);

const openImage = document.querySelectorAll(".element__image");
const popUpOpenImage = document.querySelector(".popup__Img");

openImage.forEach(function (button) {
  button.addEventListener("click", imgOpen);
  function imgOpen() {
    popUpOpenImage.classList.add("popup_display-openImg");
  }
});

closepop.addEventListener("click", handleclosepop);
function handleclosepop() {
  popUpOpenImage.classList.remove("popup_display-openImg");
}