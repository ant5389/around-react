const handleResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers
            })
            .then(handleResponse)
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers
            })
            .then(handleResponse)
    }

    addCard({ name, link }) {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers,
                method: "POST",
                body: JSON.stringify({ name, link })
            })
            .then(handleResponse)
    }

    removeCard(cardID) {
        return fetch(this._baseUrl + '/cards/' + cardID, {
                headers: this._headers,
                method: "DELETE"
            })
            .then(handleResponse)
    }

    changeLikeCardStatus(cardID, isLiked) {
        return fetch(this._baseUrl + '/cards/likes/' + cardID, {
                headers: this._headers,
                method: `${!isLiked ? "PUT" : "DELETE"}`
            })
            .then(handleResponse)
    }

    // addLikeCard(cardID) {
    //     return fetch(this._baseUrl + '/cards/likes/' + cardID, {
    //             headers: this._headers,
    //             method: "PUT"
    //         })
    //         .then(handleResponse)
    // }

    // removeLikeCard(cardID) {
    //     return fetch(this._baseUrl + '/cards/likes/' + cardID, {
    //             headers: this._headers,
    //             method: "DELETE"
    //         })
    //         .then(handleResponse)
    // }

    setUserInfo({ name, about }) {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ name, about })
            })
            .then(handleResponse)
    }

    setUserAvatar({ avatar }) {
        return fetch(this._baseUrl + '/users/me/avatar', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ avatar })
            })
            .then(handleResponse)
    }
};

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "78665cc3-4ac9-40da-9978-6b5e0bf3da61",
        "Content-Type": "application/json"
    }
});