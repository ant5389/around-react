import React from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, userInfo, setUserInfo }) {
    const [inputs, setInputs] = React.useState({ name: userInfo.name, subtitle: userInfo.about })

    function handleInputChange(evt) {
        setInputs({
          ...inputs,
          [evt.target.name]: evt.target.value
        });
      }
    
      function handleFormSubmit(evt) {
        evt.preventDefault();
    
        api.updateUserInfo(inputs.name, inputs.subtitle)
        .then(res => {
          setUserInfo(res);
          onClose();
        });
      }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title='Edit profile'
            submitName='Save'
            onSubmit={handleFormSubmit}
        >
            <input
                id='nameInput'
                type='text'
                className='popup__field'
                placeholder='Name'
                name='name'
                onChange={handleInputChange}
                value={inputs.name}
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
                name='subtitle'
                onChange={handleInputChange}
                value={inputs.subtitle}
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