function ImagePopup({ isOpen, onClose }) {
    return (
      <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__background popup__background_type_image"></div>
        <div className="popup__container popup__container_type_image">
            <figure className="popup__figure">
                <button onClick={onClose} type="button" className="popup__close"></button>
                <img className="popup__image" src="//:0" alt="#" />
                <figcaption className="popup__image-title"></figcaption>
            </figure>
        </div>
      </div>
    );
}

export default ImagePopup;