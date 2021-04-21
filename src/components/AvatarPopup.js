import React from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';

function AvatarPopup({ isOpen, onClose, setUserInfo }) {
    const [input, setInput] = React.useState('');

    function handleInputChange(evt) {
        setInput(evt.target.value);
    }

    function handleFormSubmit(evt) {
        evt.preventDefault();

        api.setUserAvatar(input).then(res => {
            setUserInfo(res);
            setInput('');
            onClose();
        })
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleFormSubmit}
            title='Change profile picture'
            submitName='Save'
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

export default AvatarPopup;