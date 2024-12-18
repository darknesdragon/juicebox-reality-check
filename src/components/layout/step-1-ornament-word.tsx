import {forwardRef, useImperativeHandle, useRef} from 'react';

import '@styles/components/_step-1-ornament-text.scss';

type ornamentTextEl = {
    ornamentText: HTMLDivElement | null;
};

type OrnamentWordProps = {
    className?: string;
};

const bannerText = [
    {
        'position': 'start-top',
        'word': 'WA businesses feel confident about future growth',
    },
    {
        'position': 'end-top',
        'word': 'AI cant replace creativity',
    },
    {
        'position': 'start-middle',
        'word': 'Sales measure true success',
    },
    {
        'position': 'end-bottom',
        'word': 'Human connection drives WA business',
    },
    {
        'position': 'start-bottom',
        'word': 'The primary barrier to digital transformation is financial investment',
    },
];

const OrnamentWord = forwardRef<ornamentTextEl, OrnamentWordProps>(( { className } , ref ) => {

    const ornamentText = useRef<HTMLDivElement>(null);
    
    useImperativeHandle(ref, () => ({
        ornamentText: ornamentText.current,
    }));

    return (
        <div className={`ornament-text ${className}`} ref={ornamentText}>
            { bannerText.map( (text, index) => (
                <p key={index} className={`ornament-text__text-${text.position}`}>
                    {text.word}
                </p>
            ) ) }
        </div>
    );
})

OrnamentWord.displayName = 'OrnamentWord';

export default OrnamentWord;
