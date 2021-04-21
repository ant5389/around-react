import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import { useUserInfo, useCards } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AvatarPopup from './AvatarPopup';
import RemoveCardPopup from './RemoveCardPopup';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from './AddCardPopup';

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userInfo._id);
        
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      const newList = cards.filter((c) => c._id !== card._id);
      setCards(newList);
    });
  };
  
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path='/' exact>
          <CurrentUserContext.Provider value={userInfo}>
            <Main
              cards={cards}
              handleCardClick={handleCardClick}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
              handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
              handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
              handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
            />
            <AvatarPopup
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
            <AddCardPopup
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
            />
          </CurrentUserContext.Provider>
        </Route>
      </Switch>
      <Footer />
    </div>
    );
}

export default App;