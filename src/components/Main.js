import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import editImg from '../images/edit.svg';
import addPicImg from '../images/add.svg';
import Card from './Card';
// import { api } from '../utils/api';

function Main({ cards, handleAddPlaceClick, handleEditAvatarClick, handleEditProfileClick, handleCardClick }) {
    const [userInfo] = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === userInfo._id);
        
        // api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        // });
    }

    // function handleCardDelete(card) {
    //     api.removeCard(card._id).then((newCard) => {
    //         setCards((state) => state.map((c) ))
    //     })
    // }

    return (
      <main className="content">
        <section className="profile">
            <button onClick={handleEditAvatarClick} type="button" className="profile__avatar-container">
                <img className="profile__avatar" src={userInfo.avatar} alt="Avatar Pic" />
                <img className="profile__avatar-btn" src={editImg} alt="Edit Avatar" />
            </button>
            <div className="profile__profile-info">
                <h1 className="profile__name">{userInfo.name}</h1>
                <button onClick={handleEditProfileClick} type="button" className="profile__edit-box">
                    <img className="profile__edit-btn" src={editImg} alt="Edit Icon" />
                </button>
                <p className="profile__subtitle">{userInfo.about}</p>
            </div>
            <button onClick={handleAddPlaceClick} type="button" className="profile__add-pic">
                <img className="profile__add-btn" src={addPicImg} alt="Add Card Icon" />
            </button>
        </section>
        <section className="places" id="places">
            <ul className="places__list">
                {cards.map(card => {
                    return <Card
                        card={card} 
                        key={card._id}
                        handleCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        // onCardDelete={handleCardDelete}
                    />
                })}
            </ul>
        </section>
      </main>
    );
}

export default Main;