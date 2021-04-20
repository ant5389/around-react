import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const userInfo = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');

    function handleName(evt) {
        setName(evt.target.value);
    }

    function handleSubtitle(evt) {
        setSubtitle(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: subtitle
        })
    }

    React.useEffect(() => {
        setName(userInfo.name);
        setSubtitle(userInfo.about);
      }, [userInfo]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title='Edit profile'
            submitName='Save'
            onSubmit={handleSubmit}
        >
            <input
                id='nameInput'
                type='text'
                className='popup__field'
                placeholder='Name'
                name={name}
                onChange={handleName}
                minLength='2'
                maxLength='40'
                required
            />
            <span
                id='nameInput-error'
                className='popup__error'
            />
            <input
                id='subtitleInput'
                type='text'
                className='popup__field'
                placeholder='About'
                name={subtitle}
                onChange={handleSubtitle}
                minLength='2'
                maxLength='200'
                required
            />
            <span
                id='subtitleInput-error'
                className='popup__error'
            />
        </PopupWithForm>
    );
}

export default EditProfilePopup;