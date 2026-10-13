import React, { useState, useEffect, useRef } from 'react';
import './AmbientSound.css';

export function AmbientSound() {
    const [isOn, setIsOn] = useState(false);
    const audioContextRef = useRef(null);
    const gainNodeRef = useRef(null);
    const noiseNodeRef = useRef(null);

    const toggleSound = () => {
        if (!isOn) {
            startNoise();
        } else {
            stopNoise();
        }
        setIsOn(!isOn);
    };

    const startNoise = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
        }

        const ctx = audioContextRef.current;
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        // Generate Brown Noise (deeper, like rain or rumble)
        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // Compensate for gain
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        // Lowpass filter to muffle it (rain on roof effect)
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.05; // Low volume

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();

        noiseNodeRef.current = noise;
        gainNodeRef.current = gainNode;
    };

    const stopNoise = () => {
        if (noiseNodeRef.current) {
            noiseNodeRef.current.stop();
            noiseNodeRef.current = null;
        }
    };

    // Cleanup
    useEffect(() => {
        return () => {
            stopNoise();
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    return (
        <div className="ambient-toggle">
            <button
                className={`ambient-btn ${isOn ? 'active' : ''}`}
                onClick={toggleSound}
                title={isOn ? "Mute rain" : "Add rain sound"}
            >
                {isOn ? '🌧️ On' : '🌧️ Off'}
            </button>
        </div>
    );
}
