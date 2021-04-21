import React from 'react';
import { api } from '../utils/api';

function RemoveCardPopup({ isOpen, onClose, cards, setCards, currentDeleteId }) {
    const [isLoading, setIsLoading] = React.useState(false);

    function handleConfirmDelete() {
        setIsLoading(true);

        api.removeCard(currentDeleteId).then(() => {
          const newList = cards.filter((c) => c._id !== currentDeleteId);
          setCards(newList);
          onClose();
          setIsLoading(false);
        });
      };

    return (
        <div className={`popup popup_type_remove-card ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__background popup__background_type_remove-card"></div>
        <form className="popup__container popup__container_type_remove-card">
            <button onClick={onClose} type="button" className="popup__close"></button>
            <h2 className="popup__title">Are you sure?</h2>
            <button onClick={handleConfirmDelete} type="button" className="popup__save popup__save_type_remove-card"
            >
                {isLoading ? 'Saving...' : 'Yes'}
            </button>
        </form>
      </div>
    );
}

export default RemoveCardPopup;