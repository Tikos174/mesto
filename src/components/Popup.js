class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClosePopup = this._popup.querySelector(".popup__close");
  }

  open() {
    this._popup.classList.add("popup_display-open");
    document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners()
  }

  close() {
    this._popup.classList.remove("popup_display-open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_display-open")) {
        this.close();
      }
    });
    this._buttonClosePopup.addEventListener("click", () => {
      this.close();
    });
  }
}

export { Popup };
