import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import '@styles/components/_button.scss';

type ButtonProps = {
    text: string;
    className: string;
    onClick?: () => void;
};

const Button = forwardRef<ButtonHandle, ButtonProps>( ( { text, className, onClick, } : ButtonProps, ref ) => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonTextRef = useRef<HTMLSpanElement>(null);

    useImperativeHandle(ref, () => ({
        button: buttonRef.current,
        span: buttonTextRef.current,
    }));

    return (
        <button className={`brand-button ${className}`} onClick={onClick} ref={buttonRef}>
            <span className="brand-button__text" ref={buttonTextRef}>
                {text}
            </span>
        </button>
    );
});

Button.displayName = 'Button';

export default Button;