function RemoveCardPopup({ isOpen, onClose }) {
    return (
        <div className={`popup popup_type_remove-card ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__background popup__background_type_remove-card"></div>
        <form className="popup__container popup__container_type_remove-card">
            <button onClick={onClose} type="button" className="popup__close"></button>
            <h2 className="popup__title">Are you sure?</h2>
            <button type="button" className="popup__save popup__save_type_remove-card">Yes</button>
        </form>
      </div>
    );
}

export default RemoveCardPopup;