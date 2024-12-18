import {forwardRef, useImperativeHandle, useRef} from 'react';
import { Pagination, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '@styles/components/_step-2-swiper.scss';

const slideData = [
    'Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.',
    'I’ll ask you a handful of meaningful questions and compare your responses with people in your industry. ',
    'You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!',
];

type SwiperEl = {
    swiperEl: HTMLDivElement | null;
    swiper: any;
}

type SwiperProps = {
    updateSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Step2Swiper = forwardRef<SwiperEl, SwiperProps>(({ updateSlide }, ref) => {

    const swiperEl = useRef<HTMLDivElement>(null);
    const swiperInstance = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        swiperEl: swiperEl.current,
        swiper: swiperInstance.current,
    }));

    const updateSlideIdex = (index: number) => {
        updateSlide(index);
    }

    return (
        <div className="brand-swiper container" ref={swiperEl}>
            <Swiper
                modules={[Pagination, A11y]}
                pagination={{clickable: true}}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => updateSlideIdex(swiper.activeIndex) }
                onSwiper={(swiper) => {
                    swiperInstance.current = swiper;
                }}
            >
                { slideData.map( (slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="brand-swiper__slide">
                            <p className="brand-swiper__slide-text">{slide}</p>
                        </div>
                    </SwiperSlide>
                ) ) }
            </Swiper>
        </div>
    );
});

Step2Swiper.displayName = 'Step2Swiper';

export default Step2Swiper;
