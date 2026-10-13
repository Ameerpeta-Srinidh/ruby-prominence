import React, { useState, useEffect } from 'react';
import './LandingPage.css';

export function LandingPage({ onEnter }) {
    const [step, setStep] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1000); // Show "Best listened to..."
        const timer2 = setTimeout(() => setStep(2), 3500); // Show "Not meant for shuffle"
        const timer3 = setTimeout(() => setStep(3), 6000); // Show "Enter" button

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const handleEnter = () => {
        setFadeOut(true);
        setTimeout(onEnter, 1000); // Wait for fade out
    };

    return (
        <div className={`landing-container ${fadeOut ? 'fade-out-screen' : ''}`}>
            <div className="landing-content">
                <p className={`landing-text ${step >= 1 ? 'visible' : ''}`}>
                    Best listened to after midnight. 🌙
                </p>
                <p className={`landing-text ${step >= 2 ? 'visible' : ''}`}>
                    Some songs will make sense later.
                </p>

                <div className={`landing-action ${step >= 3 ? 'visible' : ''}`}>
                    <button className="enter-btn" onClick={handleEnter}>
                        Enter Memory Box
                    </button>
                </div>
            </div>
        </div>
    );
}
