import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import AvatarPopup from './AvatarPopup';
import RemoveCardPopup from './RemoveCardPopup';

function App() {

  const [onEditProfile, isEditProfilePopupOpen] = React.useState(false);
  const [onAddPlace, isAddPlacePopupOpen] = React.useState(false);
  const [onEditAvatar, isEditAvatarPopupOpen] = React.useState(false);
  const [onRemoveCard, isRemoveCardPopupOpen] = React.useState(false);
  const [onImageOpen, isImageOpenPopupOpen] = React.useState(false);
  
  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatarClick={() => isEditAvatarPopupOpen(true)}
        handleAddPlaceClick={() => isAddPlacePopupOpen(true)}
        handleEditProfileClick={() => isEditProfilePopupOpen(true)}
      />
      <Footer />
      <AvatarPopup
        isOpen={onEditAvatar}
        onClose={() => isEditAvatarPopupOpen(false)}
      />
      <PopupWithForm
        isOpen={onEditProfile}
        onClose={() => isEditProfilePopupOpen(false)}
        title='Edit profile' 
        name='edit-profile' 
        idName='nameInput' 
        idSubtitle='subtitleInput'
        placeholderName='Name'
        placeholderSubtitle='About'
        submitName='Save'
        minlengthName='2'
        maxlengthName='40'
        minlengthSubtitle='2'
        maxlengthSubtitle='200'
      />
      <PopupWithForm
        isOpen={onAddPlace}
        onClose={() => isAddPlacePopupOpen(false)}
        title='New Place'
        name='addcard'
        idName='titleInput'
        idSubtitle='linkInput'
        placeholderName='Title'
        placeholderSubtitle='Image Link'
        submitName='Create'
        minlengthName='1'
        maxlengthName='30'
        minlengthSubtitle=''
        maxlengthSubtitle=''
      />
      <ImagePopup
        isOpen={onImageOpen}
        onClose={() => isImageOpenPopupOpen(false)}
      />
      <RemoveCardPopup
        isOpen={onRemoveCard}
        onClose={() => isRemoveCardPopupOpen(false)}
      />
    </div>
    );
}

export default App;