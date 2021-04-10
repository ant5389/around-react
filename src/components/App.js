import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import AvatarPopup from './AvatarPopup';
import RemoveCardPopup from './RemoveCardPopup';
import { useUserInfo, useCards } from '../utils/utils';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [userInfo, setUserInfo] = useUserInfo();
  const [cards, setCards] = useCards();

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  };
  
  return (
    <div className="page">
      <Header />
      <Main
        cards={cards}
        userInfo={userInfo}
        handleCardClick={handleCardClick}
        handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
        handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
        handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
      />
      <Footer />
      <AvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={() => setIsEditAvatarPopupOpen(false)}
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
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
        isOpen={isAddPlacePopupOpen}
        onClose={() => setIsAddPlacePopupOpen(false)}
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
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        card={selectedCard}
      />
      <RemoveCardPopup
        isOpen={isRemoveCardPopupOpen}
        onClose={() => setIsRemoveCardPopupOpen(false)}
      />
    </div>
    );
}

export default App;