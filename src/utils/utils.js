import React from 'react';
import { api } from '../utils/api';

export function useUserInfo() {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        about: '',
        avatar: '',
        id: ''
    });

    React.useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setUserInfo(res);
        })
        .catch((err) => {
            console.log(err);

            setUserInfo({
                name: '',
                about: '',
                avatar: '',
                id: ''
            });
        });
    }, []);

    return [userInfo, setUserInfo];
};

export function useCards() {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCardList()
        .then(res => {
            setCards(res);
        })
        .catch((err) => {
            console.log(err);
            setCards([]);
        });
    }, []);

    return [cards, setCards];
}