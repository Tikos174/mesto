const buttonOpenEditProfile = document.querySelector(".profile__button");
const buttonSafeCard = document.querySelector(".popup__safe-New");

const inputNameUser = document.querySelector(".popup__input-save");
const inputNameProfession = document.querySelector(
  ".popup__input-save_type_about"
);

const buttonOpenEditCard = document.querySelector(".profile__button-add");
const buttonOpenPopupAvatar = document.querySelector(".profile__img");

const nameProfilUSS = document.querySelector(".profile__name");
const profilTextUSS = document.querySelector(".profile__text");

const buttonSafeAvatar = document.querySelector(".popup__button-delete")

const enableValidation = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-save",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
};

const profil = document.querySelector(".popup__input");
const addCard = document.querySelector(".popup__input-New");
const addAvatar = document.querySelector(".popup__input-Avatar");

export {buttonOpenEditProfile, buttonSafeCard, inputNameUser, inputNameProfession, buttonOpenEditCard, buttonOpenPopupAvatar,
enableValidation, buttonSafeAvatar, profil, addCard, addAvatar}