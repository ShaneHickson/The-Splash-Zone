import { useState } from 'react';
import './App.css';
import youtubeLogo from './assets/youtube.png';
import splashlogo from './assets/Splash.png';
import splasher01 from './assets/hanchar.png';
import splasher10 from './assets/shanechar.png';
import splasher11 from './assets/kianchar.png';
import splasher12 from './assets/colechar2.png';
import splasher20 from './assets/bryanchar.png';
import splasher21 from './assets/markuswchar.png';
import splasher22 from './assets/aryachar.png';
import newsplasher00 from './assets/kaichar.png';
import newsplasher01 from './assets/brandonchar.png';
import newsplasher10 from './assets/christian.png';
import newsplasher11 from './assets/jakechar.png';
import WaterBackground from './waterbackground.jsx';
import KawaiiAudioPlayer from "./Musix.jsx";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const figures = [
    { img: splasher10,alias: "Banana Boy", name: "(Shane)", bio: "Just a yellow guy that loves bananas 🍌", stats: { Wetness: 7, RageBaiting: 7, Speedrunning: 7,Aura: 5, Brainrot: 6 }, colour: "#a79b00ff" },
    { img: splasher21,alias: "Martics", name: "(Markus)", bio: "The greatest and the whitest 😸", stats: { Wetness: 7, RageBaiting: 4, Speedrunning: 8, Aura: 7,Brainrot: 7  }, colour: "#000000ff" },
    { img: splasher20,alias: "BennyMaxwell", name: "(Bryan)", bio: "Master of splashes and cool intros 🌊", stats: { Wetness: 10, RageBaiting: 10, Speedrunning: 10,Aura: 10,Brainrot: 6 }, colour: "#2A1F45" },
    { img: splasher11,alias: "Keieon", name: "(Kian)", bio: "The most cool and performative 🌹", stats: { Wetness: 10, RageBaiting: 5, Speedrunning: 2,Aura: 9,Brainrot: 7  }, colour: "#00ff37ff" },
    { img: splasher22,alias: "Area", name: "(Arya)", bio: " The diversity hire 💡", stats: { Wetness: 9, RageBaiting: 7, Speedrunning: 1,Aura: 9, Brainrot:6  }, colour: "#0b1f26" },
    { img: splasher12,alias: "Masagoro", name: "(Cole)", bio: "Handsome, genius, kind, humble 🥳", stats: { Wetness: 7, RageBaiting: 4, Speedrunning: 5, Aura: 10,Brainrot: 7  }, colour: "#fffb00ff" },
    { img: splasher01,alias: "Typyc", name: "(Han)", bio: "Chill genius who brings balance to the zone 😎", stats: { Wetness: 10, RageBaiting: 4, Speedrunning: 2,Aura: 10,Brainrot: 6}, colour: "#badaefff" },
    { img: newsplasher00,alias: "Bing Bong", name: "(Kai)", bio: "Chaotic genius of the jungle 🐒", stats: { Wetness: 7, RageBaiting: 5, Speedrunning: 1,Aura: 7,Brainrot: 7}, colour: "#ff0055ff" },
    { img: newsplasher11,alias: "Jake", name: "(Jake)", bio: "NULL 🤓", stats: { Wetness: 4, RageBaiting: 4, Speedrunning: 2,Aura: 10, Brainrot:6},colour: "#ffffffff" },
    { img: newsplasher01,alias: "Dino1", name: "(Brandon)", bio: "Genuinely Braindead 💀", stats: { Wetness: 6, RageBaiting: 8, Speedrunning: 8,Aura: 4,Brainrot: 7}, colour: "#adb814ff" },
    { img: newsplasher10,alias: "Cho Chungus", name: "(Christian)", bio: "Likes to bongo on his belly 👶", stats: { Wetness: 10, RageBaiting: 9, Speedrunning: 1,Aura: 6,Brainrot: 6}, colour: "#b40808ff" },
    { img: splashlogo,alias: "Coming Soon", name: "(Applications Open)", bio: "This could be you 🧌", stats: { Wetness: 0, RageBaiting: 0, Speedrunning: 0,Aura: 0,Brainrot: 7}, colour: "#96d9ffff" }
  ];

  const toggleFigure = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <>
      <WaterBackground />
      
      <div>
        <div>
        <img src={splashlogo} alt="Mascot" className="top-left-logo" />
        <div className="bottom-left-musix-player" > 
          <h2>MUSIX</h2>
          <KawaiiAudioPlayer/>
          </div>

      </div>
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
      <div><p className="stick-figures-text">
        Meet the splash crew! 💦 These are the legends behind the zone.
      </p></div>
      {/* Stick figures grid */}
      <div className="stick-figures">
        {figures.map((fig, index) => (
          <div
            key={index}
            className={`stick-figure ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFigure(index)}
          >
            <img src={fig.img} alt={fig.alias}  className="figure-img" style={{backgroundColor: fig.colour}}/>
            <p className="figure-name">{fig.alias}</p>
          </div>
        ))}
      </div>

      {/* Bio display section */}
      <div className="bio-display">
        {activeIndex === null ? (
          <p className="default-message">💧 Select a stick figure to learn more!</p>
        ) : (
          <div className="bio active">
            <div>
            <h3>{figures[activeIndex].alias} {figures[activeIndex].name}</h3>
            <p>{figures[activeIndex].bio}</p>
            <ul>
              <li>Wetness: {figures[activeIndex].stats.Wetness}</li>
              <li>Rage Baiting: {figures[activeIndex].stats.RageBaiting}</li>
              <li>Speed Running: {figures[activeIndex].stats.Speedrunning}</li>
              <li>Aura: {figures[activeIndex].stats.Aura}</li>
              <li>Brainrot: {figures[activeIndex].stats.Brainrot}</li>
            </ul>
            </div>
            <img src={figures[activeIndex].img} alt={figures[activeIndex].alias}  className="figure-img" style={{backgroundColor: figures[activeIndex].colour}}/>
          </div>
        )}
      </div>
      
      <div className="splashzone-bio">
        <p>
          <strong>The Splash Zone</strong> is where fun meets chaos! 💦 A crew of creators who bring
          laughs, wild challenges, and plenty of splashes to every video. From epic moments to
          hilarious fails, we’re all about keeping the energy high and the vibes wetter than ever!💧 
          Playing silly games for even sillier videos! 🌊
        </p>
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
