import {Swiper as SwiperType} from 'swiper';
import Image from 'next/image';
import gsap from 'gsap';

import '../../styles/components/_header.scss';

import ArrowLeft from '@icon/arrow-left';
import Refresh from '@icon/refresh';
import NavButton from '@ui/navButton';

type headerProps = {
    data:  {
        currentStep: number;
        updateStep: React.Dispatch<React.SetStateAction<number>>;
        currentSlide: number;
        formState: string;
        updateFormState: React.Dispatch<React.SetStateAction<string>>;
    };
    swiperRef: React.RefObject<{ swiperEl: HTMLDivElement | null, swiper: SwiperType }>;
}

const Header = ( { data, swiperRef } : headerProps ) => {
    

    const animatedElements = [
        '.brand-header__logo-u',
        '.brand-header__logo-i-dot',
        '.brand-header__logo-i',
        '.brand-header__logo-c',
        '.brand-header__logo-e',
        '.brand-header__logo-o',
        '.brand-header__logo-x'
    ];
    
    gsap.defaults(
        {
            duration: 0.4,
            ease: 'back.inOut',
        }
    )

    const mouseEnter = () => {
        animatedElements.forEach((element) => {
            gsap.to(
                element, 
                { 
                    x: -100,
                    autoAlpha: 0,
                }
            );
        });
        gsap.to(
            '.brand-header__logo-b',
            { 
                x: -63,
            }
        );
    }

    const mouseLeave = () => {
        animatedElements.forEach((element) => {
            gsap.to(
                element, 
                { 
                    x: 0,
                    autoAlpha: 1,
                }
            );
        });
        gsap.to(
            '.brand-header__logo-b',
            { 
                x: 0,
            }
        );
    }

    const prevButtonFunc = () => {
        if ( data.currentStep == 2 ) {
            if ( data.currentSlide == 0 ) {
                data.updateStep(data.currentStep - 1);
            } else {
                swiperRef.current?.swiper?.slidePrev();
            }
        } else if ( data.currentStep == 3 ) {
            if ( data.formState == 'name' ) {
                data.updateStep(data.currentStep - 1);
            }
            if ( data.formState == 'email' ) {
                data.updateFormState('name');
            }
            if ( data.formState == 'finish' ) {
                data.updateFormState('email');
            }
        }
    }

    const refreshButtonFunc = () => {
        window.location.reload()
    }

    if ( data.currentStep == 2 ) {
        gsap.to(
            '.brand-header__prev-button',
            {
                autoAlpha: 1,
            }
        )
    } else if ( data.currentStep == 1 ) {
        gsap.to(
            '.brand-header__prev-button',
            {
                autoAlpha: 0,
            }
        )
    }

    return (
        <header className="brand-header">
            <div className="container brand-header__container">
                <NavButton icon={<ArrowLeft />} customClass="brand-header__button brand-header__prev-button" onClick={prevButtonFunc} />
                <div className="brand-header__main-logo" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Image src="/images/logo/logo-dot.png" alt="dot for j from juiceBox" className="brand-header__logo-j-dot" width={6.28} height={6.26} />
                    <Image src="/images/logo/logo-j.png" alt="j from juiceBox" className="brand-header__logo-j" width={7.85} height={20.82} />
                    <Image src="/images/logo/logo-u.png" alt="u from juiceBox" className="brand-header__logo-u" width={14.96} height={15.49} />
                    <Image src="/images/logo/logo-dot.png" alt="dot for i from juiceBox" className="brand-header__logo-i-dot" width={6.28} height={6.26} />
                    <Image src="/images/logo/logo-i.png" alt="i from juiceBox" className="brand-header__logo-i" width={5.21} height={15.1} />
                    <Image src="/images/logo/logo-c.png" alt="c from juiceBox" className="brand-header__logo-c" width={16.16} height={15.88} />
                    <Image src="/images/logo/logo-e.png" alt="e from juiceBox" className="brand-header__logo-e" width={16.16} height={15.88} />
                    <Image src="/images/logo/logo-b.png" alt="b from juiceBox" className="brand-header__logo-b" width={16.69} height={23.12} />
                    <Image src="/images/logo/logo-o.png" alt="o from juiceBox" className="brand-header__logo-o" width={16.29} height={15.88} />
                    <Image src="/images/logo/logo-x.png" alt="x from juiceBox" className="brand-header__logo-x" width={15.94} height={15.1} />
                </div>
                <NavButton icon={<Refresh />} customClass="brand-header__refresh-button" onClick={refreshButtonFunc} />
            </div>
        </header>
    );
}

export default Header;