function AvatarPopup({ isOpen, onClose }) {
    return (
        <div className={`popup popup_type_avatar ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__background popup__background_type_avatar"></div>
            <form className="popup__container popup__container_type_avatar">
                <button onClick={onClose} type="button" className="popup__close"></button>
                <h2 className="popup__title">Change profile picture</h2>
                <input id="avatarInput" type="url" className="popup__field popup__field_type_avatar" placeholder="Image link" name="link" required />
                <span id="avatarInput-error" className="popup__error"></span>

                <button type="submit" className="popup__save">Save</button>
            </form>
        </div>
    );
}

export default AvatarPopup;