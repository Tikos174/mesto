class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  getinfoProfil() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  patchProfil(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about}),
    }).then((res) => this._checkResponse(res));
  }

  editProfilAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({avatar: avatar}),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addLike(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}
export { Api };
