import React from 'react';
import './EndPage.css';

export function EndPage({ onClose }) {
    return (
        <div className="end-page-overlay">
            <div className="end-page-content">
                <div className="end-message">
                    <h2 className="end-title">This was made for you.</h2>
                    <p className="end-question">Did any song feel familiar?</p>
                    <p className="end-note">Some memories live in melodies we didn't know we needed.</p>
                </div>

                <button className="end-close-btn" onClick={onClose}>
                    Return to Playlists
                </button>
            </div>
        </div>
    );
}
