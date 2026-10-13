import React from 'react';
import './PlaylistCard.css';

export function PlaylistCard({ playlist, onClick }) {
    return (
        <div
            className="playlist-card"
            onClick={() => onClick(playlist)}
            style={{
                '--card-theme': playlist.theme,
                '--rotation': `${playlist.rotation || 0}deg`
            }}
        >
            <div className="card-image-container">
                <img src={playlist.cover} alt={playlist.title} className="card-image" />
                <div className="play-overlay">
                    <span>▶</span>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{playlist.title}</h3>
                <p className="card-description">{playlist.description}</p>

            </div>
        </div>
    );
}
