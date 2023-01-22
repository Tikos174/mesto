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
const popupEditCard = document.querySelector(".popup_edit-card");
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
  
  // значение из массива
  elementBlockCard.querySelector(".element__image").src = card.link;
  elementBlockCard.querySelector(".element__text").textContent = card.name;
  elementBlockCard.querySelector(".element__image").alt = card.name;

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

const popUpOpenImage = document.querySelector(".popup_edit-image");
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







// buttonOpenEditProfile.addEventListener("click", handleOpen);
// function handleOpen() {
//   popupEditProfile.classList.add("popup_display-open");
//   inputNameUser.value = nameUser.textContent;
//   inputNameProfession.value = nameProfession.textContent;
// }

// buttonCloseEditProfile.addEventListener("click", handleClose);
// function handleClose() {
//   popupEditProfile.classList.remove("popup_display-open");
// }

// function handleFormSubmit(evt) {
//   evt.preventDefault();
//   nameUser.textContent = inputNameUser.value;
//   nameProfession.textContent = inputNameProfession.value;
//   handleClose();
// }

// buttonSaveEditProfile.addEventListener("click", handleFormSubmit);

// // Открытие 2 pop-up окна
// buttonOpenEditCard.addEventListener("click", handleOpenCard);
// function handleOpenCard() {
//   popupEditCard.classList.add("popup_display-openNew");
//   inputTextCard.value = '';
//   inputImageCard.value = '';
// }

// // Закрытие 2 pop-up окна
// buttonCloseEditCard.addEventListener("click", handleCloseCard);
// function handleCloseCard() {
//   popupEditCard.classList.remove("popup_display-openNew");
// }

// // Создание карточек из массива
// function createCard(card) {
//   const elementBlockCard = elementLi.cloneNode(true);
  
//   // значение из массива
//   elementBlockCard.querySelector(".element__image").src = card.link;
//   elementBlockCard.querySelector(".element__text").textContent = card.name;
//   elementBlockCard.querySelector(".element__image").alt = card.name;

//   container.prepend(elementBlockCard);
//   container.addEventListener("click", clickLike);
//   container.addEventListener("click", clickDeleteLike);
//   container.addEventListener("click", clickOpenImage);
// }

// initialCards.forEach(function (element) {
//   createCard(element);
// });

// function handleFormProfil(evt) {
//   evt.preventDefault();
//   const newCard = {
//     name: inputTextCard.value,
//     link: inputImageCard.value,
//   };

//   createCard(newCard);
//   handleCloseCard();
// }

// buttonSaveEditCard.addEventListener("click", handleFormProfil);

// function clickLike(event) {
//   const element = event.target;
//   if (element.classList.contains("element__like")) {
//     if (element.classList.contains("element__like-active")) {
//       element.classList.remove("element__like-active");
//     } else {
//       element.classList.add("element__like-active");
//     }
//   }
// }

// function clickDeleteLike(event) {
//   const element = event.target;
//   if (element.className === "element__delite") {
//     const item = element.closest(".element__list");
//     item.remove();
//   }
// }

// function clickOpenImage(event) {
//   const element = event.target;
//   PopupImage.alt = element.alt;
//   PopupImage.src = element.src;
//   popupText.textContent = element.alt;
// }

// const openImage = document.querySelectorAll(".element__image");
// const popUpOpenImage = document.querySelector("#popup__Img");

// openImage.forEach(function (buttonPopupImage) {
//   buttonPopupImage.addEventListener("click", OpenPopupImage);
//   function OpenPopupImage() {
//     popUpOpenImage.classList.add("popup_display-openImg");
//   }
// });

// buttonClosePopupImage.addEventListener("click", ClosePopupImage);
// function ClosePopupImage() {
//   popUpOpenImage.classList.remove("popup_display-openImg");
// }
