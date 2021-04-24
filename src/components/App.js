import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import { useUserInfo, useCards } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import RemoveCardPopup from './RemoveCardPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [userInfo, setUserInfo] = useUserInfo();
  const [cards, setCards] = useCards();
  const [currentDeleteId, setCurrentDeleteId] = React.useState('');

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userInfo._id);
        
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };
  
  return (
    <div className="page">
      <Header />
        <CurrentUserContext.Provider value={userInfo}>
          <Main
            cards={cards}
            handleCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            openCardDelete={() => setIsRemoveCardPopupOpen(true)}
            handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
            handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
            handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
            setCurrentDeleteId={setCurrentDeleteId}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={() => setIsEditAvatarPopupOpen(false)}
            setUserInfo={setUserInfo}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={() => setIsEditProfilePopupOpen(false)}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={() => setIsAddPlacePopupOpen(false)}
            cards={cards}
            setCards={setCards}
          />
          <ImagePopup
            isOpen={isImageOpen}
            onClose={() => setIsImageOpen(false)}
            card={selectedCard}
          />
          <RemoveCardPopup
            isOpen={isRemoveCardPopupOpen}
            onClose={() => setIsRemoveCardPopupOpen(false)}
            cards={cards}
            setCards={setCards}
            currentDeleteId={currentDeleteId}
          />
        </CurrentUserContext.Provider>
      <Footer />
    </div>
    );
}

export default App;