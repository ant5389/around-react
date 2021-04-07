function PopupWithForm(props) {
    return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__background popup__background_type_${props.name}`}></div>
        <form className="popup__container">
            <button onClick={props.onClose} type="button" className="popup__close"></button>
            <h2 className="popup__title">{props.title}</h2>
            <input id={props.idName} type="text" className="popup__field" placeholder={props.placeholderName} name="name" minlength={props.minlengthName} maxlength={props.maxlengthName} required />
            <span id={`${props.idName}-error`} className="popup__error"></span>

            <input id={props.idSubtitle} type="text" className="popup__field" placeholder={props.placeholderSubtitle} name="subtitle" minlength={props.minlengthSubtitle} maxlength={props.maxlengthSubtitle} required />
            <span id={`${props.idSubtitle}-error`} className="popup__error"></span>

            <button type="submit" className="popup__save">{props.submitName}</button>
        </form>
      </div>
    );
}

export default PopupWithForm;