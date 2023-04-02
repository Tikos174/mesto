import { Popup } from "./Popup.js";

class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this._popup.querySelector(".popup__image")
    this._text = this._popup.querySelector(".popup__text-profil");
  }

  open(name, link) {
    super.open();
    this._link.src = link
    this._link.alt = name
    this._text.textContent = name
  }
}

export { PopupWithImage };