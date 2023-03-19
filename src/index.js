
import '../src/index.css';
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { Popup } from "./components/Popup.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";

const inputTextCard = document.querySelector(".popup__input-save_type_nameNew");
const inputImageCard = document.querySelector(
  ".popup__input-save_type_aboutNew"
);

const buttonOpenEditProfile = document.querySelector(".profile__button");

const inputNameUser = document.querySelector(".popup__input-save");
const inputNameProfession = document.querySelector(
  ".popup__input-save_type_about"
);

const buttonOpenEditCard = document.querySelector(".profile__button-add");

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

const newPopupCardImage = new PopupWithImage(".popup_image-window");

const handleCardClick = (parameters) => {
  newPopupCardImage.open(parameters);
};

const buttonCloseImg = document.querySelector('.popup__closeImg')
buttonCloseImg.addEventListener('click', () => {
  newPopupCardImage.close()
})

function createСards(card) {
  const newCard = new Card(card, ".element__list", handleCardClick);
  return newCard.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      cardSection.addItem(createСards(card));
    },
  },
  ".element"
);

cardSection.renderItems();

// добавление карточки
const newPopupAddCard = new PopupWithForm(".popup_add-card", {
  handleFormSubmit: (data) => {
    cardSection.addItem(createСards({name:data.name, link:data.link}));
  },
});

buttonOpenEditCard.addEventListener("click", () => {
  newPopupAddCard.open()
  inputTextCard.value = "";
  inputImageCard.value = "";
});

// добавление профиля
const newPopupAddProfil = new PopupWithForm(".popup_edit-profile", {
  handleFormSubmit: ({prof, job}) => {
    newUserInfo.setUserInfo({prof, job});
  }
})

buttonOpenEditProfile.addEventListener("click", () => {
  newPopupAddProfil.open(),
  inputNameUser.value = newUserInfo.getUserInfo().nameProfil;
  inputNameProfession.value = newUserInfo.getUserInfo().nameJob;
});

const newUserInfo = new UserInfo({
  nameProfil: ".profile__name",
  profilText: ".profile__text",
});

// Валидацию
const forms = document.querySelectorAll(".popup__input");
const nodeForms = Array.from(forms);

nodeForms.forEach((form) => {
  const validationInput = new FormValidator(enableValidation, form);

  validationInput.enableValidation();
});

