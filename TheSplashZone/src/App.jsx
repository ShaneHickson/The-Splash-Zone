import { useState } from 'react';
import './App.css';
import youtubeLogo from './assets/youtube.png';
import splashlogo from './assets/Splash.png';
import splasher01 from './assets/stick_figure_0_1.png';
import splasher10 from './assets/stick_figure_1_0.png';
import splasher11 from './assets/stick_figure_1_1.png';
import splasher12 from './assets/stick_figure_1_2.png';
import splasher20 from './assets/stick_figure_2_0.png';
import splasher21 from './assets/stick_figure_2_1.png';
import splasher22 from './assets/stick_figure_2_2.png';
import WaterBackground from './waterbackground.jsx';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const figures = [
    { img: splasher10, name: "Shane", bio: "Just a yellow guy that loves bananas 🍌", stats: { Wetness: 7, Trolling: 7, Speedrunning: 7,Aura: 5 } },
    { img: splasher11, name: "Kian", bio: "The most cool and preformative 🌹", stats: { Wetness: 10, Trolling: 5, Speedrunning: 2,Aura: 9  } },
    { img: splasher20, name: "Bryan", bio: "Master of splashes and cool intros 🌊", stats: { Wetness: 3, Trolling: 10, Speedrunning: 10,Aura: 3 } },
    { img: splasher21, name: "Markus", bio: "The greatest and the whitest 😸", stats: { Wetness: 7, Trolling: 4, Speedrunning: 8, Aura: 7  } },
    { img: splasher22, name: "Arya", bio: " The diversity hire💡", stats: { Wetness: 9, Trolling: 7, Speedrunning: 1,Aura: 9  } },
    { img: splasher12, name: "Cole", bio: "Handsome, genius, kind, humble 🥳", stats: { Wetness: 7, Trolling: 4, Speedrunning: 5, Aura: 10  } },
    { img: splasher01, name: "Han", bio: "Chill genius who brings balance to the zone 😎", stats: { Wetness: 5, Trolling: 5, Speedrunning: 5,Aura: 5} }
  ];

  const toggleFigure = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <WaterBackground />

      <div>
        <img src={splashlogo} alt="Mascot" className="top-left-logo" />
        <h1>Welcome to The Splash Zone 🌊</h1>
        <a
          href="https://www.youtube.com/@TheSplashZone0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeLogo} alt="YouTube Channel" className="youtube-logo" />
        </a>
        <p>Where we splash on your zone!</p>
      </div>

      {/* Stick figures grid */}
      <div className="stick-figures">
        {figures.map((fig, index) => (
          <div
            key={index}
            className={`stick-figure ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFigure(index)}
          >
            <img src={fig.img} alt={fig.name} className="figure-img" />
            <p className="figure-name">{fig.name}</p>
          </div>
        ))}
      </div>

      {/* Bio display section */}
      <div className="bio-display">
        {activeIndex === null ? (
          <p className="default-message">💧 Select a stick figure to learn more!</p>
        ) : (
          <div className="bio active">
            <h3>{figures[activeIndex].name}</h3>
            <p>{figures[activeIndex].bio}</p>
            <ul>
              <li>Wetness: {figures[activeIndex].stats.Wetness}</li>
              <li>Rage Baiting: {figures[activeIndex].stats.Trolling}</li>
              <li>Speed Running: {figures[activeIndex].stats.Speedrunning}</li>
              <li>Aura: {figures[activeIndex].stats.Aura}</li>
            </ul>
          </div>
        )}
      </div>

      {/* YouTube section */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLfLeAHMe5Vg1GeTwOzBnpVrEeVYHPam8k"
          title="YouTube playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}

export default App;
