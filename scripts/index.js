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

const cardTemplate = document.querySelector("#element-li").content;
const container = document.querySelector(".element");
const popupEditImage = document.querySelector(".popup_image-window");

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

// Создание карточек из массива
function createCard(card) {
  const elementBlockCard = cardTemplate.cloneNode(true);
  const elementImage = elementBlockCard.querySelector(".element__image");
  const elementText = elementBlockCard.querySelector(".element__text");
  const elementike = elementBlockCard.querySelector(".element__like");
  const elementDeletClick = elementBlockCard.querySelector(".element__delite");

  // значение из массива
  elementImage.src = card.link;
  elementText.textContent = card.name;
  elementImage.alt = card.name;

  elementike.addEventListener("click", clickLike);
  elementDeletClick.addEventListener("click", deleteCard);
  elementImage.addEventListener("click", clickOpenImage);

  return elementBlockCard;
}

// Функция лайков
function clickLike(event) {
  const element = event.target;
  if (element.classList.contains("element__like-active")) {
    element.classList.remove("element__like-active");
  } else {
    element.classList.add("element__like-active");
  }
}

initialCards.forEach(function (element) {
  const card = createCard(element);
  container.prepend(card);
});

// Внесение новых данных
function submitAddCardForm(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTextCard.value,
    link: inputImageCard.value,
  };

  const card = createCard(newCard);
  container.prepend(card);
  closePopup(popupEditCard);
}

formElementCard.addEventListener("submit", submitAddCardForm);

function clickOpenImage(event) {
  const element = event.target;
  popupImage.alt = element.alt;
  popupImage.src = element.src;
  popupText.textContent = element.alt;

  openPopup(popupEditImage);
}

// Функция удаление
function deleteCard(event) {
  const element = event.target;
  if (element.className === "element__delite") {
    const item = element.closest(".element__list");
    item.remove();
  }
}

buttonOpenEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  inputProfile();
});

buttonOpenEditCard.addEventListener("click", () => {
  openPopup(popupEditCard);
  resetAddCardFormInputs();
});

function openPopup(popupEdit) {
  popupEdit.classList.add("popup_display-open");
}

function inputProfile() {
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

buttonCloseEditCard.addEventListener("click", () => closePopup(popupEditCard));

buttonSaveEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

buttonClosePopupImage.addEventListener("click", () =>
  closePopup(popupEditImage)
);

function closePopup(popupEdit) {
  popupEdit.classList.remove("popup_display-open");
}
