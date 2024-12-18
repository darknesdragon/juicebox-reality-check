import {forwardRef, useImperativeHandle, useRef} from 'react';

import '@styles/components/_step-1-welcome-text.scss';

type welcomeTextEl = {
    welcomeTextEl: HTMLDivElement | null;
};

const welcomeTitle = {
    'open' : 'Compare your thoughts on ',
    'highlight' : 'technology',
    'end' : ' with current industry opinions.',
};

const WelcomeText = forwardRef<welcomeTextEl>((props, ref) => {

    const welcomeTextEl = useRef<HTMLDivElement>(null);
    
    useImperativeHandle(ref, () => ({
        welcomeTextEl: welcomeTextEl.current,
    }));

    return (
        <div className="welcome-text container" ref={welcomeTextEl}>
            <h1 className="welcome-text__welcome-title">
                {welcomeTitle.open} 
                <span className="highlight">
                    {welcomeTitle.highlight}
                </span> 
                {welcomeTitle.end}
            </h1>
        </div>
    );
});

WelcomeText.displayName = 'WelcomeText';

export default WelcomeText;
