import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import {
  buttonOpenEditProfile,
  buttonSafeCard,
  inputNameUser,
  inputNameProfession,
  buttonOpenEditCard,
  buttonOpenPopupAvatar,
  enableValidation,
  buttonSafeAvatar,
  profil,
  addCard,
  addAvatar,
} from "../utils/constants.js";

// Путь до сервера
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62/",
  headers: {
    "Content-Type": "application/json",
    authorization: "0c87e813-0908-4dae-acb9-98879f391c4e",
  },
});

// получение данных профиля и карточек
Promise.all([api.getinfoProfil(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;
    newUserInfo.setUserInfo(userInfo);
    buttonOpenPopupAvatar.src = userInfo.avatar;
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));

// Вынос данных в глобальную область
let userId;

const createСard = (data) => {
  const newCard = new Card(".element__list", data, userId, {
    templateSelector: "#element-li",
    handleCardClick: () => {
      newPopupCardImage.open(data.name, data.link);
    },
    handlePopupDeleteCard: () => {
      popupDeteleCard.open();
      popupDeteleCard.setSubmitHandler(() => {
        api
          .deleteCard(data._id)
          .then(() => {
            newCard.handleDeleteCard();
            popupDeteleCard.close();
          })
          .catch((err) => console.log(err));
      });
    },
    handleLike: () => {
      if (newCard.cardLike()) {
        api
          .deleteLike(data._id)
          .then((data) => {
            newCard.handleDeleteLike();
            newCard.setLikesNumber(data.likes);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .addLike(data._id)
          .then((data) => {
            newCard.handleAddLike();
            newCard.setLikesNumber(data.likes);
          })
          .catch((err) => console.log(err));
      }
    },
  });

  return newCard.generateCard();
};

// Поп-ап Удаления карточки
const popupDeteleCard = new PopupWithConfirmation(".popup_delete");

popupDeteleCard.setEventListeners();

// Обработка карточек с сервера

const cardList = new Section(
  {
    renderer: (cards) => {
      cardList.addItem(createСard(cards));
    },
  },
  ".element"
);

const newPopupCardImage = new PopupWithImage(".popup_image-window");

newPopupCardImage.setEventListeners();

// Поп-ап добавление карточек на сервер
const newPopupAddCard = new PopupWithForm(".popup_add-card", {
  handleFormSubmit: (data) => {
    newPopupAddCard.loadingData();
    api
      .addCard(data)
      .then((inputdata) => {
        cardList.addItem(createСard(inputdata));
        newPopupAddCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        newPopupAddCard.endLoadingData();
      });
  },
});

buttonOpenEditCard.addEventListener("click", () => {
  newPopupAddCard.open();
  validationInputAddCard.toggleButtonState();
});

newPopupAddCard.setEventListeners();

// Инициализация профиля
const newUserInfo = new UserInfo({
  nameProfil: ".profile__name",
  profilText: ".profile__text",
  profilAvatar: ".profile__img",
});

const newPopupAddProfil = new PopupWithForm(".popup_edit-profile", {
  handleFormSubmit: ({ prof, job }) => {
    newPopupAddProfil.loadingData();
    api
      .patchProfil(prof, job)
      .then((profil) => {
        newUserInfo.setUserInfo(profil);
        newPopupAddProfil.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        newPopupAddProfil.endLoadingData();
      });
  },
});

// Значение инпутов профиля
buttonOpenEditProfile.addEventListener("click", () => {
  newPopupAddProfil.open();
  const { nameJob, nameProfil } = newUserInfo.getUserInfo();
  inputNameUser.value = nameProfil;
  inputNameProfession.value = nameJob;
});

newPopupAddProfil.setEventListeners();

// редактирование аватара
const newPopupAvatar = new PopupWithForm(".popup_avatar", {
  handleFormSubmit: ({ avatar }) => {
    newPopupAvatar.loadingData();
    api
      .editProfilAvatar(avatar)
      .then((avatar) => {
        newUserInfo.setUserAvatar(avatar);
        newPopupAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        newPopupAvatar.endLoadingData();
      });
  },
});

buttonOpenPopupAvatar.addEventListener("click", () => {
  newPopupAvatar.open();
  validationInputAddAvatar.toggleButtonState();
});

newPopupAvatar.setEventListeners();

// Валидацию

const validationInputProfil = new FormValidator(enableValidation, profil);
validationInputProfil.enableValidation();

const validationInputAddCard = new FormValidator(enableValidation, addCard);
validationInputAddCard.enableValidation();

const validationInputAddAvatar = new FormValidator(enableValidation, addAvatar);
validationInputAddAvatar.enableValidation();
