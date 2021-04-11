import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title='Edit profile'
            submitName='Save'
        >
            <input
                id='nameInput'
                type='text'
                className='popup__field'
                placeholder='Name'
                name='name'
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