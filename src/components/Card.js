import React from 'react';

export default function Card({ card, handleCardClick }) {

    function handleClick() {
        handleCardClick(card)
    }

    return (
        <li className="places__card card">
            <button type="button" className="places__remove" />
            <img className="places__picture" src={card.link} alt={card.name} onClick={handleClick}/>
            <h2 className="places__location">{card.name}</h2>
            <div className="places__like-box">
                <button type="button" className="places__like-btn" />
                <p className="places__counter">{card.likes.length}</p>
            </div>
        </li>
    );
}