import React from 'react';

function Popup({ isOpen, children }) {
    return (
            <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__background"></div>
                {children}
            </div>
    );
}

export default Popup;