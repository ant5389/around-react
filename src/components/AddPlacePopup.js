import React from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, cards, setCards }) {
    const [inputs, setInputs] = React.useState({ name: '', link: ''});
    const [isLoading, setIsLoading] = React.useState(false);

    function handleInputChange(evt) {
        setInputs({
            ...inputs,
            [evt.target.name]: evt.target.value
        });
    }
    
    function handleFormSubmit(evt) {
        evt.preventDefault();
        setIsLoading(true);

        api.addCard(inputs.name, inputs.link).then(newCard => {
            setCards([newCard, ...cards]);
            setInputs({ name: '', link: ''});
            onClose();
            setIsLoading(false);
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleFormSubmit}
            title='New Place'
            submitName={isLoading ? 'Saving...' : 'Create'}
        >
            <input
                id='titleInput'
                type='text'
                className='popup__field'
                placeholder='Title'
                name='name'
                value={inputs.name}
                onChange={handleInputChange}
                minLength='1'
                maxLength='30'
                required
            />
            <span
                id='titleInput-error'
                className='popup__error'
            />
            <input
                id='linkInput'
                type='text'
                className='popup__field'
                placeholder='Image Link'
                name='link'
                value={inputs.link}
                onChange={handleInputChange}
                required
            />
            <span
                id='linkInput-error'
                className='popup__error'
            />
        </PopupWithForm>
    );
}

export default AddPlacePopup;