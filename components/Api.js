export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this.headers.authorization,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .then(data => {
        console.log("Dados retornados pela API:", data); // Verifique o que a API está retornando
        return data;
      });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: this.headers.authorization,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      });
  }

  editProfile({name, about}) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": this.headers["Content-Type"],
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      });
  }

  editProfilePicture({linkEditProfilePic}) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": this.headers["Content-Type"],
      },
      body: JSON.stringify({
        avatar: linkEditProfilePic,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      });
  }

  addCard({name, link}) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": this.headers["Content-Type"],
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
        // "Content-Type": this.headers["Content-Type"],
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      });
  }
}