import { Card } from "./Card.js";
import {FormValidator} from "./FormValidator.js"

const buttonOpenEditProfile = document.querySelector(".profile__button");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const buttonCloseEditProfile = document.querySelector(".popup__close");
const buttonSaveEditProfile = document.querySelector(".popup__safe");

const nameUser = document.querySelector(".profile__name");
const nameProfession = document.querySelector(".profile__text");
const formElement = document.querySelector(".popup__input");
const formElementCard = document.querySelector(".popup__input-New");
const inputNameUser = document.querySelector(".popup__input-save_type_name");
const inputNameProfession = document.querySelector(
  ".popup__input-save_type_about"
);

const buttonOpenEditCard = document.querySelector(".profile__button-add");
const popupEditCard = document.querySelector(".popup_add-card");
const buttonSaveEditCard = document.querySelector(".popup__safe-New");
const buttonCloseEditCard = document.querySelector(".popup__element-close");
const inputTextCard = document.querySelector(".popup__input-save_type_nameNew");
const inputImageCard = document.querySelector(
  ".popup__input-save_type_aboutNew"
);

const popupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__text-profil");
const buttonClosePopupImage = document.querySelector(".popup__closeImg");

// const cardTemplate = document.querySelector("#element-li").content;
const container = document.querySelector(".element");
const popupEditImage = document.querySelector(".popup_image-window");

const popupList = document.querySelectorAll(".popup");

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

const enableValidation = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-save",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
};

function addСards (card) {
  const newCard = new Card (card, ".element__list");
  return newCard.generateCard();
}

initialCards.forEach((card) => {
  container.append(addСards(card));
});

// Внесение новых данных в профиль
function submitAddCardForm(evt) {
  evt.preventDefault();
  const inputnewCard = {
    name: inputTextCard.value,
    link: inputImageCard.value,
  };

  container.prepend(addСards(inputnewCard));
  closePopup(popupEditCard);
}

formElementCard.addEventListener("submit", submitAddCardForm);

buttonOpenEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  dataInputProfile();
});

buttonOpenEditCard.addEventListener("click", () => {
  buttonSaveEditCard.disabled = true;
  openPopup(popupEditCard);
  resetAddCardFormInputs();
});

function openPopup(popupEdit) {
  popupEdit.classList.add("popup_display-open");
  document.addEventListener("keydown", handleClosePopup);
}

function dataInputProfile() {
  inputNameUser.value = nameUser.textContent;
  inputNameProfession.value = nameProfession.textContent;
}

function resetAddCardFormInputs() {
  inputTextCard.value = "";
  inputImageCard.value = "";
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameUser.textContent = inputNameUser.value;
  nameProfession.textContent = inputNameProfession.value;

  closePopup(popupEditProfile);
}

formElement.addEventListener("submit", submitEditProfileForm);

buttonCloseEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

buttonCloseEditCard.addEventListener("click", () => {
  closePopup(popupEditCard);
});

buttonSaveEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

buttonClosePopupImage.addEventListener("click", () =>
  closePopup(popupEditImage)
);

function closePopup(popupEdit) {
  popupEdit.classList.remove("popup_display-open");
  document.removeEventListener("keydown", handleClosePopup);
}

popupList.forEach((popupOverlayClose) => {
  popupOverlayClose.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_display-open")) {
      closePopup(popupOverlayClose);
    }
  });
});

function handleClosePopup (evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".popup_display-open");
    closePopup(openModal);
  }
}

// Валидацию
const forms = document.querySelectorAll(".popup__input");
const nodeForms = Array.from(forms)

nodeForms.forEach(form => {
  const validationInput = new FormValidator(enableValidation, form)

  validationInput.enableValidation()
})

export {popupText, popupImage, popupEditImage, openPopup};