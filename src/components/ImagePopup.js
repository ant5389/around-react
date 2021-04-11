import Popup from './Popup';

function ImagePopup({ isOpen, onClose, card }) {
    return (
      <Popup isOpen={isOpen}>
        <div className="popup__container popup__container_type_image">
            <figure className="popup__figure">
                <button onClick={onClose} type="button" className="popup__close"></button>
                <img className="popup__image" src={card.link} alt={card.name} />
                <figcaption className="popup__image-title">{card.name}</figcaption>
            </figure>
        </div>
      </Popup>
    );
}

export default ImagePopup;