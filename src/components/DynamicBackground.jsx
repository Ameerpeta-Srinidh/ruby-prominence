import React, { useMemo, useState } from 'react';
import './DynamicBackground.css';

export function DynamicBackground({ type, effectType }) {
    // Lazy initialization of random data.
    // Because we use key={playlist.title} in parent, this component remounts when type changes.
    const [drops] = useState(() => {
        if (effectType === 'rain') {
            return [...Array(50)].map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 2}s`,
                duration: `${0.5 + Math.random()}s`
            }));
        }
        return [];
    });

    const rays = useMemo(() => [...Array(3)], []);

    if (effectType === 'rain') {
        return (
            <div className="dynamic-bg rain-container">
                {drops.map(d => (
                    <div
                        key={d.id}
                        className="raindrop"
                        style={{
                            left: d.left,
                            animationDelay: d.delay,
                            animationDuration: d.duration
                        }}
                    />
                ))}
            </div>
        );
    }

    if (effectType === 'rays') {
        return (
            <div className="dynamic-bg rays-container">
                {rays.map((_, i) => (
                    <div
                        key={i}
                        className="ray"
                        style={{
                            animationDuration: `${10 + i * 5}s`,
                            opacity: 0.3 - (i * 0.05)
                        }}
                    />
                ))}
            </div>
        );
    }

    if (effectType === 'fog') {
        return (
            <div className="dynamic-bg fog-container">
                <div className="fog-layer" style={{ animationDuration: '60s' }}></div>
                <div className="fog-layer two"></div>
            </div>
        );
    }

    return null;
}
