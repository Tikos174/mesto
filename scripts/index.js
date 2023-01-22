const buttonOpenEditProfile = document.querySelector(".profile__button");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const buttonCloseEditProfile = document.querySelector(".popup__close");
const buttonSaveEditProfile = document.querySelector(".popup__safe");

const nameUser = document.querySelector(".profile__name");
const nameProfession = document.querySelector(".profile__text");
const formElement = document.querySelector(".popup__input");
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

const PopupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__text-profil");
const buttonClosePopupImage = document.querySelector(".popup__closeImg");

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

// Создание карточек из массива
function createCard(card) {
  const elementBlockCard = elementLi.cloneNode(true);
  const elementImage = elementBlockCard.querySelector(".element__image");
  const elementText = elementBlockCard.querySelector(".element__text");

  // значение из массива
  elementImage.src = card.link;
  elementText.textContent = card.name;
  elementImage.alt = card.name;

  container.addEventListener("click", clickLike);
  container.addEventListener("click", clickDeleteLike);
  container.addEventListener("click", clickOpenImage);
  return elementBlockCard;
}

initialCards.forEach(function (element) {
  const card = createCard(element)
  container.prepend(card)
});

// Внесение новых данных
function handleFormProfil(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTextCard.value,
    link: inputImageCard.value,
  };

  const card = createCard(newCard);
  container.prepend(card)
}

buttonSaveEditCard.addEventListener("click", handleFormProfil);


// Функция лайков
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

// Функция удаление
function clickDeleteLike(event) {
  const element = event.target;
  if (element.className === "element__delite") {
    const item = element.closest(".element__list");
    item.remove();
  }
}

function clickOpenImage(event) {
  const element = event.target;
  PopupImage.alt = element.alt;
  PopupImage.src = element.src;
  popupText.textContent = element.alt;
}

const popUpOpenImage = document.querySelector(".popup_image");
const buttonOpenImage = document.querySelectorAll(".element__image");

buttonOpenEditProfile.addEventListener("click", () => openPopup("profile"))
buttonOpenEditCard.addEventListener("click", () => openPopup("card"))
buttonOpenImage.forEach((PopupImage) => {
  PopupImage.addEventListener("click", () => openPopup("img"))
});

// Функция открытия попап
function openPopup(modal){
   if (modal === "profile"){
    popupEditProfile.classList.add("popup_display-open");
    inputProfile()
    return 
   }   
   if (modal === "card"){
    popupEditCard.classList.add("popup_display-open");
    handleOpenCard()
    return 
   }
   if (modal === "img"){
    popUpOpenImage.classList.add("popup_display-open");
    return 
   }
}

function inputProfile() {
  inputNameUser.value = nameUser.textContent;
  inputNameProfession.value = nameProfession.textContent;
}

function handleOpenCard() {
  inputTextCard.value = '';
  inputImageCard.value = '';
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameUser.textContent = inputNameUser.value;
  nameProfession.textContent = inputNameProfession.value;
}

buttonSaveEditProfile.addEventListener("click", handleFormSubmit);

buttonCloseEditProfile.addEventListener("click", () => closePopup("profileclose"))
buttonCloseEditCard.addEventListener("click", () => closePopup("cardclose"))
buttonSaveEditProfile.addEventListener("click", () => closePopup("profilsave"))
buttonSaveEditCard.addEventListener("click", () => closePopup("cardsave"))
buttonClosePopupImage.addEventListener("click", () => closePopup ("imageclose"))

// Функция закрытия попап
function closePopup(modal){
  if (modal === "profileclose"){
    popupEditProfile.classList.remove("popup_display-open"); 
   }   
   if (modal === "cardclose"){
    popupEditCard.classList.remove("popup_display-open");
   }
   if (modal === "profilsave"){
    popupEditProfile.classList.remove("popup_display-open");
   }
   if (modal === "cardsave"){
    popupEditCard.classList.remove("popup_display-open");
   }
   if (modal === "imageclose"){
    popUpOpenImage.classList.remove("popup_display-open");
   }
}