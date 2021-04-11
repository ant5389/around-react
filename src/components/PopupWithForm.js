import Popup from './Popup';

function PopupWithForm(props) {
    return (
      <Popup isOpen={props.isOpen}>
        <form className="popup__container">
            <button onClick={props.onClose} type="button" className="popup__close"></button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className="popup__save">{props.submitName}</button>
        </form>
      </Popup>
    );
}

export default PopupWithForm;