import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DynamicBackground } from './DynamicBackground';
import { LyricCard } from './LyricCard';
import { EndPage } from './EndPage';
import './PlaylistView.css';

export function PlaylistView({ playlist, onBack }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLyrics, setShowLyrics] = useState(false);
    const [coverClickCount, setCoverClickCount] = useState(0);
    const [expandedStories, setExpandedStories] = useState({});
    const [showEndPage, setShowEndPage] = useState(false);
    const playerRef = useRef(null);

    // Group songs by emotional category

    // Effect to sync currentSong with playlist updates (for HMR)
    useEffect(() => {
        if (currentSong) {
            const updatedSong = playlist.songs.find(s => s.id === currentSong.id);
            if (updatedSong && updatedSong !== currentSong) {
                setCurrentSong(updatedSong);
            }
        }
    }, [playlist, currentSong]);

    // Create YouTube player


    // Create YouTube player
    const createPlayer = useCallback(() => {
        if (!currentSong || !window.YT || !window.YT.Player) return;

        // Clean up existing player
        if (playerRef.current && playerRef.current.destroy) {
            try {
                playerRef.current.destroy();
            } catch (e) {
                console.error("Error destroying player:", e);
            }
        }

        // Create unique div ID for this player instance
        const playerDivId = `ghost-player-${playlist.id}-${currentSong.id}`;
        let playerDiv = document.getElementById(playerDivId);
        if (!playerDiv) {
            playerDiv = document.createElement('div');
            playerDiv.id = playerDivId;
            playerDiv.className = 'hidden-youtube-player';
            document.body.appendChild(playerDiv);
        }

        try {
            const player = new window.YT.Player(playerDivId, {
                height: '0',
                width: '0',
                videoId: currentSong.youtubeId,
                playerVars: { 'playsinline': 1, 'autoplay': 1, 'controls': 0 },
                events: {
                    'onReady': (event) => {
                        playerRef.current = event.target;
                        event.target.playVideo();
                        setIsPlaying(true);
                    },
                    'onStateChange': (event) => {
                        if (event.data === 1) setIsPlaying(true);
                        if (event.data === 2) setIsPlaying(false);
                        if (event.data === 0) setIsPlaying(false);
                    },
                    'onError': (event) => {
                        console.error("YouTube Player Error:", event.data);
                        if (event.data === 100 || event.data === 101 || event.data === 150) {
                            alert("Song unavailable (YouTube restriction). Please try another track!");
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Error creating YouTube player:", error);
        }
    }, [currentSong, playlist.id]);

    // YouTube API initialization
    useEffect(() => {
        if (!window.YT) {
            // Set up callback for when API is ready
            window.onYouTubeIframeAPIReady = () => {
                // API is ready, can create players now
                if (currentSong && !playerRef.current) {
                    createPlayer();
                }
            };

            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    // Effect to handle player creation when song changes
    useEffect(() => {
        if (currentSong) {
            if (window.YT && window.YT.Player) {
                if (playerRef.current && playerRef.current.loadVideoById) {
                    // Reuse existing player
                    playerRef.current.loadVideoById(currentSong.youtubeId);
                } else {
                    // Create new player
                    createPlayer();
                }
            } else {
                // Wait for API to load
                const checkAPI = setInterval(() => {
                    if (window.YT && window.YT.Player) {
                        clearInterval(checkAPI);
                        createPlayer();
                    }
                }, 100);

                return () => clearInterval(checkAPI);
            }
        }
    }, [currentSong, createPlayer]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                try {
                    playerRef.current.destroy();
                } catch (e) {
                    console.error("Error destroying player:", e);
                }
                playerRef.current = null;
            }
            // Clean up player divs
            const playerDivs = document.querySelectorAll('.hidden-youtube-player');
            playerDivs.forEach(div => {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            });
        };
    }, []);

    const togglePlay = () => {
        if (playerRef.current && playerRef.current.getPlayerState) {
            const state = playerRef.current.getPlayerState();
            if (state === 1) playerRef.current.pauseVideo();
            else playerRef.current.playVideo();
        }
    };

    const handleCoverClick = () => {
        const newCount = coverClickCount + 1;
        setCoverClickCount(newCount);
        if (newCount === 3) {
            alert("✨ SECRET MESSAGE ✨\n\n'I curated this playlist thinking of you. Every song is a memory.'");
            setCoverClickCount(0);
        }
    };

    const toggleStory = (e, songId) => {
        e.stopPropagation();
        setExpandedStories(prev => ({ ...prev, [songId]: !prev[songId] }));
    };

    return (
        <div className="playlist-view">
            <DynamicBackground type={playlist.title} effectType={playlist.backgroundEffect} key={playlist.title} />
            <div
                className="playlist-header"
                style={{ '--header-theme': playlist.theme }}
            >
                <button className="back-button" onClick={onBack}>
                    ← Back
                </button>
                <div className="header-content">
                    <img
                        src={playlist.cover}
                        alt={playlist.title}
                        className="header-cover"
                        onClick={handleCoverClick}
                        title="Click me..."
                        style={{ cursor: 'pointer' }}
                    />
                    <div className="header-info">
                        <h1 className="header-title">{playlist.title}</h1>
                        <p className="header-description">{playlist.description}</p>

                        {/* Ghost Player Integration */}
                        <div className="player-container" style={{ marginTop: '20px', minHeight: '152px', display: 'flex', justifyContent: 'center' }}>
                            {currentSong ? (
                                <div className="cassette-player">
                                    <div className="cassette-label-area">
                                        <div className="cassette-title">
                                            {currentSong.title}
                                        </div>
                                        <div className="tape-window">
                                            <div className={`tape-wheel ${isPlaying ? 'spinning' : ''}`}></div>
                                            <div className={`tape-wheel ${isPlaying ? 'spinning' : ''}`}></div>
                                        </div>
                                    </div>
                                    <div className="cassette-controls">
                                        <button className="cassette-btn" onClick={togglePlay}>
                                            {isPlaying ? 'PAUSE ||' : 'PLAY ▶'}
                                        </button>
                                        <button className="cassette-btn" onClick={() => setShowLyrics(true)}>
                                            LYRICS 📝
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{
                                    padding: '20px',
                                    background: 'rgba(255,255,255,0.5)',
                                    borderRadius: '12px',
                                    border: '2px dashed var(--text-secondary)',
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    fontFamily: '"Patrick Hand", cursive',
                                    fontSize: '1.2rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <span>Select a track to load the cassette... 📼</span>
                                </div>
                            )}
                        </div>

                        {/* Sticky Note Highlight (Moved out of cassette) */}
                        {currentSong && currentSong.lyricHighlight && (
                            <div className="lyric-highlight-note">
                                <div className="tape-strip"></div>
                                "{currentSong.lyricHighlight}"
                            </div>
                        )}
                    </div>
                </div>
            </div >


            {/* Lyric Card Overlay */}
            {
                showLyrics && currentSong && (
                    <LyricCard
                        song={currentSong}
                        onClose={() => setShowLyrics(false)}
                    />
                )
            }

            <div className="song-list-container">
                <ul className="song-list">
                    {playlist.songs.map((song, index) => (
                        <li
                            key={song.id}
                            className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
                            onClick={() => setCurrentSong(song)}
                        >
                            <span className="song-number">{index + 1}</span>
                            <div className="song-details">
                                <span className="song-title">
                                    {song.title}
                                    {song.story && (
                                        <button
                                            className="story-btn"
                                            onClick={(e) => toggleStory(e, song.id)}
                                            title="Read story"
                                        >
                                            💭
                                        </button>
                                    )}
                                </span>
                                <span className="song-artist">{song.artist}</span>
                                {expandedStories[song.id] && song.story && (
                                    <div className="micro-story">
                                        {song.story}
                                    </div>
                                )}

                            </div>
                            <span className="song-duration">{song.duration}</span>
                            <button className="song-play-btn">
                                {currentSong?.id === song.id && isPlaying ? '🔊' : '▶'}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className="end-playlist-btn" onClick={() => setShowEndPage(true)}>
                    Finish Listening
                </button>
            </div>

            {showEndPage && <EndPage onClose={() => setShowEndPage(false)} />}
        </div >
    );
}
