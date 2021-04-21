import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, handleCardClick, onCardLike, openCardDelete, setCurrentDeleteId }) {
    const userInfo = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === userInfo._id;
    const isLiked = card.likes.some(i => i._id === userInfo._id);

    const cardLikeButtonClassName = (
        `places__like-btn ${isLiked ? 'places__like-btn_active' : null}`
      );

    function handleClick() {
        handleCardClick(card)
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        setCurrentDeleteId(card._id);
        openCardDelete(card)
    }

    return (
        <li className="places__card card">
            {isOwn ? <button type="button" className="places__remove" onClick={handleDeleteClick}/> : null}
            <img className="places__picture" src={card.link} alt={card.name} onClick={handleClick}/>
            <h2 className="places__location">{card.name}</h2>
            <div className="places__like-box">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
                <p className="places__counter">{card.likes.length}</p>
            </div>
        </li>
    );
}