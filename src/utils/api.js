class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error('Error:' + res.statusText)))
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    addCard({ name, link }) {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers,
                method: "POST",
                body: JSON.stringify({ name, link })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    removeCard(cardID) {
        return fetch(this._baseUrl + '/cards/' + cardID, {
                headers: this._headers,
                method: "DELETE"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    addLikeCard(cardID) {
        return fetch(this._baseUrl + '/cards/likes/' + cardID, {
                headers: this._headers,
                method: "PUT"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    removeLikeCard(cardID) {
        return fetch(this._baseUrl + '/cards/likes/' + cardID, {
                headers: this._headers,
                method: "DELETE"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    setUserInfo({ name, about }) {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ name, about })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }

    setUserAvatar({ avatar }) {
        return fetch(this._baseUrl + '/users/me/avatar', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ avatar })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
    }
};

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "78665cc3-4ac9-40da-9978-6b5e0bf3da61",
        "Content-Type": "application/json"
    }
});