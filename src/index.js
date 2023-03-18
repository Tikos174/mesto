
import '../src/index.css'; // добавьте импорт главного файла стилей
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { Popup } from "../scripts/Popup.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { UserInfo } from "../scripts/UserInfo.js";

console.log('работает')
const buttonOpenEditProfile = document.querySelector(".profile__button");
const buttonCloseEditProfile = document.querySelector(".popup__close");

const inputNameUser = document.querySelector(".popup__input-save");
const inputNameProfession = document.querySelector(
  ".popup__input-save_type_about"
);

const buttonOpenEditCard = document.querySelector(".profile__button-add");
const buttonSaveEditCard = document.querySelector(".popup__safe-New");
const buttonCloseEditCard = document.querySelector(".popup__element-close");

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

const handleCardClick = (parameters) => {
  const newPopupCardImage = new PopupWithImage(".popup_image-window");
  newPopupCardImage.open(parameters);
};


function addСards(card) {
  const newCard = new Card(card, ".element__list", handleCardClick);
  return newCard.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      cardSection.addItem(addСards(card));
    },
  },
  ".element"
);

cardSection.renderItems();

// добавление карточки
const newPopupAddCard = new PopupWithForm(".popup_add-card", {
  handleFormSubmit: (input) => {
    cardSection.addItem(addСards(input.name, input.link));
  },
});
newPopupAddCard.setEventListeners();

// добавление профиля
const newPopupAddProfil = new PopupWithForm(".popup_edit-profile", {
  handleFormSubmit: ({prof, job}) => {
    newUserInfo.setUserInfo({prof, job});
  }
})

newPopupAddProfil.setEventListeners()

const newUserInfo = new UserInfo({
  nameProfil: ".profile__name",
  profilText: ".profile__text",
});

newUserInfo.getUserInfo();

const newPopupProfil = new Popup(".popup_edit-profile");
buttonOpenEditProfile.addEventListener("click", () => {
  newPopupProfil.open(".popup_edit-profile");
  inputNameUser.value = newUserInfo.getUserInfo().nameProfil;
  inputNameProfession.value = newUserInfo.getUserInfo().nameJob;
});

newPopupProfil.setEventListeners()

buttonCloseEditProfile.addEventListener("click", () =>
  newPopupProfil.close(".popup_edit-profile")
);

const newPopupCard = new Popup(".popup_add-card");
buttonOpenEditCard.addEventListener("click", () => {
  buttonSaveEditCard.disabled = true;
  newPopupCard.open(".popup_add-card");
});

buttonCloseEditCard.addEventListener("click", () => {
  newPopupCard.close(".popup_add-card");
});


// Валидацию
const forms = document.querySelectorAll(".popup__input");
const nodeForms = Array.from(forms);

nodeForms.forEach((form) => {
  const validationInput = new FormValidator(enableValidation, form);

  validationInput.enableValidation();
});

