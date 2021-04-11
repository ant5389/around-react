import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AvatarPopup from './AvatarPopup';
import RemoveCardPopup from './RemoveCardPopup';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from './AddCardPopup';
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
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
      />
      <AddCardPopup
        isOpen={isAddPlacePopupOpen}
        onClose={() => setIsAddPlacePopupOpen(false)}
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