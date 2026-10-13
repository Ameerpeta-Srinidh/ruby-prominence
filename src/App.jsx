import { useState } from 'react';
import { playlists } from './data/playlists/index';
import { PlaylistCard } from './components/PlaylistCard';
import { PlaylistView } from './components/PlaylistView';

import { LandingPage } from './components/LandingPage';
import { AmbientSound } from './components/AmbientSound';
import './App.css';

function App() {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [showLanding, setShowLanding] = useState(true);

  // Derive the selected playlist from the fresh data
  const selectedPlaylist = playlists.find(p => p.id === selectedPlaylistId);
  const filteredPlaylists = playlists;

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="wrapper">

      <AmbientSound />
      {selectedPlaylist ? (
        <PlaylistView
          playlist={selectedPlaylist}
          onBack={() => setSelectedPlaylistId(null)}
        />
      ) : (
        <>
          <header className="header">
            <h1 className="title">Tunes for Cherie</h1>
            <p className="subtitle">Curated with love &lt;3</p>


          </header>

          <main className="container">
            <div className="playlist-grid">
              {filteredPlaylists.map(playlist => (
                <PlaylistCard
                  key={playlist.id}
                  playlist={{
                    ...playlist,
                    rotation: ((playlist.id * 42) % 6) - 3
                  }}
                  onClick={(p) => setSelectedPlaylistId(p.id)}
                />
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
