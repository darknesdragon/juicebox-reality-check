import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import ArrowUp from '@icon/arrow-up';

import '@styles/components/_input.scss';

type inputRef = {
    container: HTMLDivElement | null;
    input: HTMLInputElement | null;
    button: HTMLButtonElement | null;
}

type inputProps = {
    type: string;
    placeholder?: string;
    onClick?: () => void;
};

const Input = forwardRef<inputRef, inputProps>( ( { type, placeholder, onClick } , ref ) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
        container: containerRef.current,
        input: inputRef.current,
        button: buttonRef.current,
    }));

    return (
        <div className="brand-input" ref={containerRef}>
            <input type={type} className="brand-input__input" ref={inputRef} placeholder={placeholder} />
            <button className="brand-input__button" onClick={onClick} ref={buttonRef}>
                <ArrowUp />
            </button>
        </div>
    );
});

Input.displayName = 'Input';

export default Input;