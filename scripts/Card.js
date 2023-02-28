import { popupText, popupImage, popupEditImage, openPopup } from "./index.js";

class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    // this._templateSelector = templateSelector;
  }

  _getTemplate() {
    // const elementBlockCard = document
    // .querySelector(this._templateSelector)
    // .content
    // .querySelector(".element__list")
    // .cloneNode(true);

    const cardTemplate = document.querySelector("#element-li").content;
    const elementBlockCard = cardTemplate.cloneNode(true);

    return elementBlockCard;
  }

  generateCard() {
    this._cardTemplate = this._getTemplate();
    this._cardTemplateName = this._cardTemplate.querySelector(".element__text");
    this._cardTemplateImg = this._cardTemplate.querySelector(".element__image");
    this._buttonLike = this._cardTemplate.querySelector(".element__like");
    this._buttonDeleteCard =
      this._cardTemplate.querySelector(".element__delite");
    this._handleDeteleCard = this._cardTemplate.querySelector(".element__list");

    this._cardTemplateName.textContent = this._name;
    this._cardTemplateImg.src = this._link;
    this._cardTemplateImg.alt = this._name;

    this._setEventListeners();

    return this._cardTemplate;
  }

  _setEventListeners() {
    this._cardTemplateImg.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    this._buttonLike.addEventListener("click", () => {
      this._handleLike();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  _handleLike() {
    this._buttonLike.classList.toggle("element__like-active");
  }

  _handleOpenPopup() {
    popupText.textContent = this._name;
    popupImage.src = this._link
    popupImage.alt = this._name;
    openPopup(popupEditImage);
  }

  _handleDeleteCard() {
    this._handleDeteleCard.remove();
  }
}

export { Card };
