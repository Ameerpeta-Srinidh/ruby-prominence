import React from 'react';
import './LyricCard.css';

export function LyricCard({ song, onClose }) {
    if (!song) return null;

    return (
        <div className="lyric-overlay" onClick={onClose}>
            <div className="lyric-card" onClick={(e) => e.stopPropagation()}>
                <button className="lyric-close-btn" onClick={onClose}>X</button>
                <div className="lyric-content">
                    <h3>{song.title}</h3>
                    <p className="lyric-artist">{song.artist}</p>
                    <p className="lyric-text">
                        {song.lyrics ? song.lyrics : "*(Searching for handwritten notes... Check back later!)*"}
                    </p>
                </div>
            </div>
        </div>
    );
}
