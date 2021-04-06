import editImg from '../images/edit.svg';
import addPicImg from '../images/add.svg';

function Main() {
    return (
      <main className="content">
        <section className="profile">
            <button type="button" className="profile__avatar-container">
                <img className="profile__avatar" src="//:0" alt="Avatar Pic" />
                <img className="profile__avatar-btn" src={editImg} alt="Edit Avatar" />
            </button>
            <div className="profile__profile-info">
                <h1 className="profile__name">Cousteau</h1>
                <button type="button" className="profile__edit-box">
                    <img className="profile__edit-btn" src={editImg} alt="Edit Icon" />
                </button>
                <p className="profile__subtitle">Explorer</p>
            </div>
            <button type="button" className="profile__add-pic">
                <img className="profile__add-btn" src={addPicImg} alt="Add Picture Icon" />
            </button>
        </section>
        <section className="places" id="places">
            <ul className="places__list">
            </ul>
        </section>
      </main>
    );
}

export default Main;