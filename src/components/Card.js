class Card {
  constructor(elementClass, data, userId, {handleCardClick, handlePopupDeleteCard, handleLike}) {
    this._elementClass = elementClass;
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._handleCardClick = handleCardClick;
    this._handlePopupDeleteCard = handlePopupDeleteCard
    this._handleLike = handleLike;

    
    this._userId = userId
    this._ownerId = data.owner._id 

  }

  _getTemplate() {
    const cardTemplate = document.querySelector("#element-li").content;
    const elementBlockCard = cardTemplate.cloneNode(true);

    return elementBlockCard;
  }

  generateCard() {
    this._cardTemplate = this._getTemplate();
    this._cardTemplateName = this._cardTemplate.querySelector(".element__text");
    this._cardTemplateImg = this._cardTemplate.querySelector(".element__image");
    this._buttonDeleteCard = this._cardTemplate.querySelector(".element__delite");
    this._elementCard = this._cardTemplate.querySelector(this._elementClass);

    this._buttonLike = this._cardTemplate.querySelector(".element__like");
    this._infolike = this._cardTemplate.querySelector(".element__counter-like")

    this._cardTemplateName.textContent = this._name;
    this._cardTemplateImg.src = this._link;
    this._cardTemplateImg.alt = this._name;

    this._handleButtonDeleteCard()

    this._setEventListeners();

    this._checkLike()

    this.numberLike(this._likes)

    return this._cardTemplate;
  }

  _setEventListeners() {
    this._cardTemplateImg.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._buttonLike.addEventListener("click", () => {
      this._handleLike();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this._handlePopupDeleteCard()
    })
  }

  _handleButtonDeleteCard(){
    if (this._ownerId !== this._userId){
      this._buttonDeleteCard.remove()
    }
  }

  cardLike() {
    return this._likes.find((data) => data._id === this._userId)
  }

  _checkLike() {
    if (this.cardLike()) {
      this.handleAddLike()
    } else {
      this.handleDeleteLike()
    }
  }

  numberLike(data) {
    this._likes = data
    this._infolike.textContent = this._likes.length;
  }

  handleAddLike() {
    this._buttonLike.classList.add("element__like-active");
  }

  handleDeleteLike() {
    this._buttonLike.classList.remove("element__like-active");
  }

  handleDeleteCard() {
    this._elementCard.remove();
  }
}

export { Card };
