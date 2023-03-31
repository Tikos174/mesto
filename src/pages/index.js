import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const inputTextCard = document.querySelector(".popup__input-save_type_nameNew");
const inputImageCard = document.querySelector(
  ".popup__input-save_type_aboutNew"
);

const buttonOpenEditProfile = document.querySelector(".profile__button");
const buttonSafeCard = document.querySelector(".popup__safe-New");

const inputNameUser = document.querySelector(".popup__input-save");
const inputNameProfession = document.querySelector(
  ".popup__input-save_type_about"
);

const buttonOpenEditCard = document.querySelector(".profile__button-add");
const buttonOpenPopupAvatar = document.querySelector(".profile__img");

// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const nameProfilUSS = document.querySelector(".profile__name");
const profilTextUSS = document.querySelector(".profile__text");

const enableValidation = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-save",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
};

// Путь до сервера
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62/",
  headers: {
    "Content-Type": "application/json",
    authorization: "0c87e813-0908-4dae-acb9-98879f391c4e",
  },
});

// Promise.all([api.getinfoProfil(), api.getInitialCards()]).then(
//   ([data, card]) => {
//     userId = data;
//     newUserInfo.setUserInfo(data);
//     section.renderItems(card);
//   }
// );

// Вынос данных в глобальную область
let cards;
let userId;

const createСard = (data) => {
  const newCard = new Card(".element__list", data, userId, {
    handleCardClick: () => {
      newPopupCardImage.open(data.name, data.link);
    },
    handlePopupDeleteCard: () => {
      PopupDeteleCard.open();
      PopupDeteleCard.functionSubmit(() => {
        api.deleteCard(data._id)
        .then(() => {
          newCard.handleDeleteCard()
          PopupDeteleCard.close()
        })
      })
    },
    handleLike: () => {
      if (newCard.cardLike()) {
        api.deleteLike(data._id)
        .then((data) => {
          newCard.handleDeleteLike()
          newCard.numberLike(data.likes)
        })
        .catch((err) => console.log(err))
      } else {
        api.addLike(data._id)
        .then((data) => {
          newCard.handleAddLike()
          newCard.numberLike(data.likes)
        })
        .catch((err) => console.log(err))
      }
    }
  });
  
  return newCard.generateCard();
};

// Поп-ап Удаления карточки
const PopupDeteleCard = new PopupWithConfirmation(".popup_delete")

PopupDeteleCard.setEventListeners();

function initSection({ items, renderer }, selectorContainer) {
  const section = new Section({ items, renderer }, selectorContainer);

  return section;
}

// Обработка карточек с сервера
const dataCard = api.getInitialCards();
dataCard.then((data) => {
  cards = initSection(
    {
      items: data,
      renderer: (card) => {
        cards.addItem(createСard(card));
      },
    },
    ".element"
  );

  cards.renderItems();
})
.catch((err) => console.log(err))

const newPopupCardImage = new PopupWithImage(".popup_image-window");

newPopupCardImage.setEventListeners();

const buttonCloseImg = document.querySelector(".popup__closeImg");
buttonCloseImg.addEventListener("click", () => {
  newPopupCardImage.close();
});

// Поп-ап добавление карточек на сервер
const newPopupAddCard = new PopupWithForm(".popup_add-card", {
  handleFormSubmit: (data) => {
    newPopupAddCard.loadingData()
    api.addCard(data)
    .then((inputdata) => {
      cards.addItem(createСard(inputdata));
    })
    .catch((err) => console.log(err))
    .finally(() => {
      newPopupAddCard.endLoadingData()
    })
  },
});

buttonOpenEditCard.addEventListener("click", () => {
  newPopupAddCard.open();
  buttonSafeCard.setAttribute("disabled", true);
  inputTextCard.value = "";
  inputImageCard.value = "";
});

newPopupAddCard.setEventListeners();

// Инициализация профиля
const newUserInfo = new UserInfo({
  nameProfil: ".profile__name",
  profilText: ".profile__text",
  profilAvatar: ".profile__img"
});

// получение данных профиля
api.getinfoProfil()
.then((data) => {
  userId = data._id
  nameProfilUSS.textContent = data.name;
  profilTextUSS.textContent = data.about;
  buttonOpenPopupAvatar.src = data.avatar;
}) .catch((err) => console.log(err))

const newPopupAddProfil = new PopupWithForm(".popup_edit-profile", {
  handleFormSubmit: ({ prof, job }) => {
    newUserInfo.setUserInfo({ prof, job });
    newPopupAddProfil.loadingData()
    api.patchProfil(prof, job)
    .catch((err) => console.log(err))
    .finally(() => {
      newPopupAddProfil.endLoadingData()
    })
  },
});

// Значение инпутов профиля
buttonOpenEditProfile.addEventListener("click", () => {
  newPopupAddProfil.open(),
  inputNameUser.value = newUserInfo.getUserInfo().nameProfil;
  inputNameProfession.value = newUserInfo.getUserInfo().nameJob;
});

newPopupAddProfil.setEventListeners();

// редактирование аватара
const newPopupAvatar = new PopupWithForm(".popup_avatar", {
  handleFormSubmit: ({avatar}) => {
    newUserInfo.setUserAvatar({avatar});
    newPopupAvatar.loadingData()
    api.editProfilAvatar(avatar)
    .catch((err) => console.log(err))
    .finally(() => {
      newPopupAvatar.endLoadingData()
    })
  },
  });

buttonOpenPopupAvatar.addEventListener("click", () => {
  newPopupAvatar.open();
});

newPopupAvatar.setEventListeners();

// Валидацию
const forms = document.querySelectorAll(".popup__input");
const nodeForms = Array.from(forms);

nodeForms.forEach((form) => {
  const validationInput = new FormValidator(enableValidation, form);

  validationInput.enableValidation();
});
