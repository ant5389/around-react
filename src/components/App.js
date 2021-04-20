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
  const userInfo = useUserInfo();
  const [cards, setCards] = useCards();

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  };

  function handleUpdateUser() {
    api.setUserInfo();
  }
  
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path='/' exact>
          <CurrentUserContext.Provider value={userInfo}>
            <Main
              cards={cards}
              handleCardClick={handleCardClick}
              handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
              handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
              handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
            />
            <AvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={() => setIsEditAvatarPopupOpen(false)}
            />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={() => setIsEditProfilePopupOpen(false)}
              onUpdateUser={handleUpdateUser}
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
          </CurrentUserContext.Provider>
        </Route>
      </Switch>
      <Footer />
    </div>
    );
}

export default App;