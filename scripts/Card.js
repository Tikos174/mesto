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
    const elementLike = this._buttonLike.closest(".element__like");
    if (elementLike.classList.contains("element__like-active")) {
      elementLike.classList.remove("element__like-active");
    } else {
      elementLike.classList.add("element__like-active");
    }
  }

  _handleOpenPopup() {
    popupText.textContent = this._cardTemplateName.textContent;
    popupImage.src = this._cardTemplateImg.src;
    popupImage.alt = this._cardTemplateImg.alt;
    openPopup(popupEditImage);
  }

  _handleDeleteCard() {
    const item = this._buttonDeleteCard.closest(".element__list");
    item.remove();
  }
}

export { Card };
