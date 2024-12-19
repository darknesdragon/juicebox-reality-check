import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import {Swiper as SwiperType} from 'swiper';
import gsap from 'gsap';

import Button from "@ui/buttons";
import Input from "@ui/input";

import '../../styles/components/_footer.scss';

type formText = {
    text: string;
    name: string;
}

type footerProps = {
    data: {
        currentStep: number;
        updateStep: React.Dispatch<React.SetStateAction<number>>;
        currentSlide: number;
        updateSlide: React.Dispatch<React.SetStateAction<number>>;
        
        formState: string;
        updateFormState: React.Dispatch<React.SetStateAction<string>>;
        inputName: string;
        setInputName: React.Dispatch<React.SetStateAction<string>>;
        formText: string;
        updateFormText: React.Dispatch<React.SetStateAction<string>>;
    };
    swiperRef: React.RefObject<{ swiperEl: HTMLDivElement | null, swiper: SwiperType }>;
};

const Footer = ( { data, swiperRef } : footerProps ) => {

    const formText = {
        'name' : 'Let’s start with the basics. Type in your first name.',
        'email' : 'How should we contact you? Type in your email address.',
        'finish' : `Thanks, ${data.inputName}! Now, it’s time to get a reality check. This will take 2-3 minutes.`,
    }

    const homeButtonRefs = useRef<{ button: HTMLButtonElement | null; span: HTMLSpanElement | null }>({
        button: null,
        span: null,
    });

    const swiperButtonRefs = useRef<{ button: HTMLButtonElement | null; span: HTMLSpanElement | null }>({
        button: null,
        span: null,
    });

    const formButtonRefs = useRef<{ button: HTMLButtonElement | null; span: HTMLSpanElement | null }>({
        button: null,
        span: null,
    });

    const endButtonRefs = useRef<{ button: HTMLButtonElement | null; span: HTMLSpanElement | null }>({
        button: null,
        span: null,
    });

    const swiperButtonIsShown = useRef(false);

    const nameInputRefs = useRef<{container: HTMLDivElement | null; input : HTMLInputElement | null; button: HTMLButtonElement | null }>({
        container: null,
        input: null,
        button: null,
    });

    const emailInputRefs = useRef<{container: HTMLDivElement | null; input : HTMLInputElement | null; button: HTMLButtonElement | null }>({
        container: null,
        input: null,
        button: null,
    });

    gsap.defaults(
        {
            duration: 0.4,
            ease: 'power4.out',
        }
    );

    const showHomeButton = () => {
        gsap.to(
            homeButtonRefs.current.span,
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
            }
        )
        gsap.to(
            homeButtonRefs.current.button,
            {
                autoAlpha: 1,
            }
        )
        gsap.to(
            swiperButtonRefs.current.span,
            {
                x: -20,
                y: -10,
                autoAlpha: 0,
            }
        )
        gsap.to(
            swiperButtonRefs.current.button,
            {
                autoAlpha: 0,
            }
        )
    }

    const showSwiperButton = () => {
        gsap.to(
            homeButtonRefs.current.span,
            {
                x: 50,
                y: 10,
                autoAlpha: 0,
            }
        )
        gsap.to(
            homeButtonRefs.current.button,
            {
                autoAlpha: 0,
                duration: 0.2
            }
        )
        gsap.fromTo(
            swiperButtonRefs.current.span,
            {
                x: -50,
                y: -10,
                autoAlpha: 0,
            },
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
            }
        )
        gsap.fromTo(
            swiperButtonRefs.current.button,
            {
                autoAlpha: 0,
            },
            {
                x: 0,
                autoAlpha: 1,
                duration: 0.2
            }
        )
        gsap.to(
            formButtonRefs.current.button,
            {
                x: 10,
                autoAlpha: 0,
            }
        )
    }

    const showFormButton = () => {
        gsap.to(
            swiperButtonRefs.current.span,
            {
                x: -20,
                y: 0,
                autoAlpha: 0,
            }
        )
        gsap.to(
            swiperButtonRefs.current.button,
            {
                x: -20,
                autoAlpha: 0,
                duration: 0.2
            }
        )
        gsap.to(
            formButtonRefs.current.button,
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.2
            }
        )
        gsap.to(
            nameInputRefs.current.container,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
    }

    const hideFormButton = () => {
        gsap.to(
            formButtonRefs.current.button,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
        gsap.to(
            nameInputRefs.current.container,
            {
                autoAlpha: 1,
                durtation: 0.2
            }
        )
        gsap.to(
            emailInputRefs.current.container,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
    }

    const showEmailInput = () => {
        gsap.to(
            nameInputRefs.current.container,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
        gsap.to(
            emailInputRefs.current.container,
            {
                autoAlpha: 1,
                durtation: 0.2
            }
        )
        gsap.to(
            endButtonRefs.current.button,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
    }

    const finishDemo = () => {
        gsap.to(
            emailInputRefs.current.container,
            {
                autoAlpha: 0,
                durtation: 0.2
            }
        )
        gsap.to(
            endButtonRefs.current.button,
            {
                autoAlpha: 1,
                durtation: 0.2
            }
        )
    }

    const nextStep = () => {
        data.updateStep(data.currentStep + 1);
    }

    const swiperButtonFunc = () => {
        if ( data.currentSlide == 2 ) {
            data.updateStep(data.currentStep + 1);
        } else {
            swiperRef.current?.swiper?.slideNext();
        }
    }

    const formButtonFunc = () => {
        data.updateStep(data.currentStep + 1);
        data.updateFormState('name');
    }

    const validateName = (name: string) => {
        return name.trim().length > 0;
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const submitName = () => {
        const name = nameInputRefs.current?.input.value || '';
        if (validateName(name)) {
            data.setInputName(name);
            data.updateFormState('email');
        } else {
            alert('Please enter a valid name.');
        }
    };

    const submitEmail = () => {
        const email = emailInputRefs.current?.input.value || '';
        if (validateEmail(email)) {
            data.updateFormState('finish');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    useEffect(() => {
        if( data.currentStep == 1 ) {
            showHomeButton();
            swiperButtonIsShown.current = false;
        } 
        if ( data.currentStep == 2 && data.currentSlide != 2 && swiperButtonIsShown.current == false ) {
            showSwiperButton();
            swiperButtonIsShown.current = true;
        }
        if ( data.currentStep == 2 && data.currentSlide == 2 ) {
            showFormButton();
            swiperButtonIsShown.current = false;
        }
        if ( data.currentStep == 3 && data.formState == 'name' ) {
            hideFormButton();
            data.updateFormText(formText.name);
        }
        if ( data.currentStep == 3 && data.formState == 'email' ) {
            showEmailInput();
            data.updateFormText(formText.email);
        }
        if ( data.currentStep == 3 && data.formState == 'finish' ) {
            finishDemo();
            data.updateFormText(formText.finish);
        }
    })

    return (
        <footer className="brand-footer">
            <div className="container">
                <Button text="Get a reality check" className="brand-button--primary brand-footer__home-button" onClick={nextStep} ref={homeButtonRefs} />
                <Button text="Continue" className="brand-button--outline brand-footer__swiper-button" onClick={swiperButtonFunc} ref={swiperButtonRefs} />
                <Button text="Get Started" className="brand-button--secondary brand-footer__form-button" onClick={formButtonFunc} ref={formButtonRefs} />
                <Input type="text" placeholder="First Name" ref={nameInputRefs} onClick={submitName} />
                <Input type="email" placeholder="Email Address" ref={emailInputRefs} onClick={submitEmail} />
                <Button text="Continue" className="brand-button--secondary brand-footer__form-button" ref={endButtonRefs}/>
            </div>
        </footer>
    );
};

export default Footer;