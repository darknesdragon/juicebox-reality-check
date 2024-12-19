"use client";

import { useEffect } from 'react';
import lottie from 'lottie-web';

type LottieAnimationProps = {
    animationData: string; // Path to the Lottie JSON file
    width?: number;
    height?: number;
    className? : string;
    formState: string;
};

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, width, height, className, formState }) => {
    
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('.lottie-container')!, // div id
            path: animationData, // Load animation JSON
            loop: true,
            autoplay: false,
        });
    }, [animationData]);

    if ( formState == 'finish' ) {
        lottie.play()
    } else {
        lottie.stop()
    }

    return <div className={`lottie-container ${className}`} style={{ width, height }} />;
};

export default LottieAnimation;
