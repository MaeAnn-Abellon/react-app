import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <main className="main-content">
        <h1>Welcome, Mochii!</h1>
        <h2>Made For You</h2>
        <div className="card-container">
          <div className="card">
            <img src="/src/assets/playlist1.jpg" alt="Playlist 1" />
            <h3>Taylor Swift</h3>
            <p>Red TS Ver, 1989,...</p>
          </div>
          <div className="card">
            <img src="/src/assets/playlist2.jpg" alt="Playlist 2" />
            <h3>K-pop Mix</h3>
            <p>Rose, BlackPink,...</p>
          </div>
          <div className="card">
            <img src="/src/assets/playlist3.jpg" alt="Playlist 3" />
            <h3>Sabrina Carpenter</h3>
          </div>
          <div className="card">
            <img src="/src/assets/playlist4.jpg" alt="Playlist 4" />
            <h3>Chase Atlantic</h3>
            <p>Into It, Swim, YOU,...</p>
          </div>
        </div>

        <h2>Recently Played</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://i.pinimg.com/736x/67/72/5c/67725c5291157e60cde324fc9056bab4.jpg" alt="Card 1" />
            <h3>Chase Atlantic</h3>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/32/2d/ed/322dedefd22178134a5e3ee5acd5aa74.jpg" alt="Card 2" />
            <h3>Chappell Roan</h3>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/21/e0/08/21e0088c6419d9984c2fdbd1d88e34b9.jpg" alt="Card 3" />
            <h3>Gracie Abrams</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
