import React from 'react';
import './App.css';
import MarsPhotos from './components/MarsPhotos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars Rover Photo Viewer</h1>
      </header>
      <main>
        <MarsPhotos />
      </main>
    </div>
  );
}

export default App;
