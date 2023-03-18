class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_display-open");
    document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners()
  }

  close() {
    this._popup.classList.remove("popup_display-open");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    document.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_display-open")) {
        this.close();
      }
    });
  }
}

export { Popup };
