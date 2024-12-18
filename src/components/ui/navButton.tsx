import React from 'react';

import '../../styles/components/_nav-button.scss';

type IconProp = {
    icon : React.ReactNode;
    customClass? : string;
    onClick? : () => void;
}

const NavButton = ( { icon, customClass, onClick } : IconProp ) => {
    return (
        <button className={`nav-button ${customClass}`} onClick={onClick}>
            <span className="nav-button__icon">
                { icon }
            </span>
        </button>
    );
}

export default NavButton;