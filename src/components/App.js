import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return ( 
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_avatar">
        <div className="popup__background popup__background_type_avatar"></div>
        <form className="popup__container popup__container_type_avatar">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Change profile picture</h2>
            <input id="avatarInput" type="url" className="popup__field popup__field_type_avatar" placeholder="Image link" name="link" required />
            <span id="avatarInput-error" className="popup__error"></span>

            <button type="submit" className="popup__save">Save</button>
        </form>
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__background popup__background_type_profile"></div>
        <form className="popup__container">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Edit Profile</h2>
            <input id="nameInput" type="text" className="popup__field" placeholder="Name" name="name" minlength="2" maxlength="40" required />
            <span id="nameInput-error" className="popup__error"></span>

            <input id="subtitleInput" type="text" className="popup__field" placeholder="About" name="subtitle" minlength="2" maxlength="200" required />
            <span id="subtitleInput-error" className="popup__error"></span>

            <button type="submit" className="popup__save">Save</button>
        </form>
      </div>
      <div className="popup popup_type_addcard">
        <div className="popup__background popup__background_type_addcard"></div>
        <form className="popup__container popup__container_type_addcard">
            <button type="button" className="popup__close popup__close_type_addcard"></button>
            <h2 className="popup__title popup__title_type_addcard">New place</h2>
            <input id="titleInput" type="text" className="popup__field popup__field_type_addcard" placeholder="Title" name="name" minlength="1" maxlength="30" required />
            <span id="titleInput-error" className="popup__error"></span>

            <input id="linkInput" type="url" className="popup__field popup__field_type_addcard" placeholder="Image link" name="link" required />
            <span id="linkInput-error" className="popup__error"></span>

            <button type="submit" className="popup__save popup__save_type_addcard">Create</button>
        </form>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__background popup__background_type_image"></div>
        <div className="popup__container popup__container_type_image">
            <figure className="popup__figure">
                <button type="button" className="popup__close"></button>
                <img className="popup__image" src="//:0" alt="#" />
                <figcaption className="popup__image-title"></figcaption>
            </figure>
        </div>
      </div>
      <div className="popup popup_type_remove-card">
        <div className="popup__background popup__background_type_remove-card"></div>
        <form className="popup__container popup__container_type_remove-card">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Are you sure?</h2>
            <button type="button" className="popup__save popup__save_type_remove-card">Yes</button>
        </form>
      </div>
    </div>
    );
}

export default App;