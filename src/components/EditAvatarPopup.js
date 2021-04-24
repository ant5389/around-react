import React from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, setUserInfo }) {
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    function handleInputChange(evt) {
        setInput(evt.target.value);
    }

    function handleFormSubmit(evt) {
        evt.preventDefault();
        setIsLoading(true);

        api.setUserAvatar(input).then(res => {
            setUserInfo(res);
            setInput('');
            onClose();
            setIsLoading(false);
        })
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleFormSubmit}
            title='Change profile picture'
            submitName={isLoading ? 'Saving...' : 'Save'}
        >
            <input
                id="avatarInput"
                type="url"
                className="popup__field popup__field_type_avatar"
                placeholder="Image link"
                name="link"
                value={input}
                onChange={handleInputChange}
                required />
            <span id="avatarInput-error" className="popup__error" />
        </PopupWithForm>
    );
}

export default EditAvatarPopup;