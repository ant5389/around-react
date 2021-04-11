import PopupWithForm from './PopupWithForm';

function AvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title='Change profile picture'
            submitName='Save'
        >
            <input id="avatarInput" type="url" className="popup__field popup__field_type_avatar" placeholder="Image link" name="link" required />
            <span id="avatarInput-error" className="popup__error" />
        </PopupWithForm>
    );
}

export default AvatarPopup;