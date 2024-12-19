"use client";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import gsap from 'gsap';


import Header from "@ui/header";
import Footer from "@ui/footer";
import Lottie from "@ui/lottie";
import OrnamentWord from "@layout/step-1-ornament-word";
import WelcomeText from "@layout/step-1-welcome-text";
import Step2Swiper from "@layout/step-2-swiper";
import Step3Form from "@layout/step-3-form";
import "@styles/layout.scss";

// import LottieAnimation from "../../components/ui/lottie";

import '@styles/pages/home.scss';

const Testing = () => {
    const [step, setStep] = useState(1);
    const [currentSlide, setSlide] = useState(0);
    const [inputName, setInputName] = useState('');
    const [formState, setFormState] = useState('');
    const [formText, setFormText] = useState('');

    const pageData = {
        currentStep: step,
        updateStep: setStep,
        currentSlide: currentSlide,
        updateSlide: setSlide,
        formState: formState,
        updateFormState: setFormState,
    }

    const footerData = {
        currentStep: step,
        updateStep: setStep,
        currentSlide: currentSlide,
        updateSlide: setSlide,
        inputName: inputName,
        setInputName: setInputName,
        formState: formState,
        updateFormState: setFormState,
        formText: formText,
        updateFormText: setFormText,
    }

    const ornamentTextEl = useRef<{ ornamentText: HTMLDivElement | null }>({
        ornamentText: null
    });

    const welcomeTextEl = useRef<{ welcomeTextEl: HTMLDivElement | null }>({
        welcomeTextEl: null,
    });

    const swiperEl = useRef<{ swiperEl: HTMLDivElement | null, swiper: any }>({
        swiperEl: null,
        swiper: null
    });

    const formTextEl = useRef<{ formTextEl: HTMLDivElement | null }>({
        formTextEl: null,
    });

    const step1El = [
        ornamentTextEl.current.ornamentText,
        welcomeTextEl.current.welcomeTextEl
    ]

    useEffect(() => {
        if ( step == 1 ) {
            step1El.forEach( (el) => {
                gsap.to(
                    el, 
                    {
                        autoAlpha: 1,
                        duration: 0.4,
                        ease: 'power4.out',
                    }
                )
            });
            gsap.to(
                swiperEl.current.swiperEl, 
                {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                '.radial-gradient',
                {
                    scale: 2
                }
            )
        }
        if( step == 2 ) {
            step1El.forEach( (el) => {
                gsap.to(
                    el, 
                    {
                        autoAlpha: 0,
                        duration: 0.4,
                        ease: 'power4.out',
                    }
                )
            });
            gsap.to(
                swiperEl.current.swiperEl, 
                {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                formTextEl.current.formTextEl, 
                {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                '.main-container__image', 
                {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                '.main-container__lottie', 
                {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            if ( currentSlide == 0 ) {
                gsap.to(
                    '.radial-gradient',
                    {
                        scale: 1
                    }
                )
            } else {
                gsap.to(
                    '.radial-gradient',
                    {
                        scale: 2
                    }
                )
            }
        } 
        if( step == 3 ) {
            gsap.to(
                swiperEl.current.swiperEl, 
                {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                formTextEl.current.formTextEl, 
                {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                '.main-container__image', 
                {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
            gsap.to(
                '.main-container__lottie', 
                {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power4.out',
                }
            )
        } 
    })

    return (
        <div className="main-layout">
            <div className="radial-gradient"></div>
            <Header data={pageData} swiperRef={swiperEl} />
            <main>
                <div className={`main-container step-${step}`}>
                    <div className="main-container__main-ornament">
                        <Image src="/images/banner-ornament.svg" alt="Home Banner Ornament" className="main-container__image ratio-item" width={274} height={290} />
                        <Lottie animationData="/lottie/JB2G_Lottie.json" className="main-container__lottie ratio-item" formState={formState} />
                    </div>
                    <OrnamentWord ref={ornamentTextEl} />
                    <WelcomeText ref={welcomeTextEl} />
                    <Step2Swiper ref={swiperEl} updateSlide={setSlide} />
                    <Step3Form ref={formTextEl} text={formText} />
                </div>
            </main>
            <Footer data={footerData} swiperRef={swiperEl} />
        </div>
    );
}

export default Testing;
