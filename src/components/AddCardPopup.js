import PopupWithForm from './PopupWithForm';

function AddCardPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title='New Place'
            submitName='Create'
        >
            <input
                id='titleInput'
                type='text'
                className='popup__field'
                placeholder='Title'
                name='name'
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
                name='subtitle'
                required
            />
            <span
                id='linkInput-error'
                className='popup__error'
            />
        </PopupWithForm>
    );
}

export default AddCardPopup;