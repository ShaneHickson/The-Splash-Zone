import { useState } from 'react';
import './App.css';
import youtubeLogo from './assets/youtube.png';
import instalogo from './assets/instagram.png';
import ticktoklogo from './assets/tiktoc.png';
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
import Shane from "./assets/characters/Shane.json";
import Markus from "./assets/characters/Markus.json";
import Bryan from "./assets/characters/Bryan.json";
import Kian from "./assets/characters/Kian.json";
import Arya from "./assets/characters/Arya.json";
import Cole from "./assets/characters/Cole.json";
import Han from "./assets/characters/Han.json";
import Kai from "./assets/characters/Kai.json";
import Jake from "./assets/characters/Jake.json";
import Brandon from "./assets/characters/Brandon.json";
import Christian from "./assets/characters/Christian.json";
import Template from "./assets/characters/Template.json";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const figures = [Shane, Markus, Bryan, Kian, Arya, Cole, Han , Kai, Jake, Brandon, Christian, Template];
  //everyone is good
  const imageMap = {
  splasher01,
  splasher10,
  splasher11,
  splasher12,
  splasher20,
  splasher21,
  splasher22,
  newsplasher00,
  newsplasher01,
  newsplasher10,
  newsplasher11,
  splashlogo
};

figures.forEach(fig => {
  if (imageMap[fig.img]) {
    fig.img = imageMap[fig.img];
  } else {
    console.warn("Image key not found in imageMap:", fig.img);
  }
});

  const toggleFigure = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <>
      <WaterBackground />
      
      <div>
        <div>
        <a href="https://linktr.ee/the_splashzone"
          target="_blank"
          rel="noopener noreferrer">
        <img src={splashlogo} alt="Mascot" className="top-left-logo" /></a>
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
        <a
          href="https://www.instagram.com/xx_thesplashzone_xx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instalogo} alt="Instagram Account" className="insta-logo" />
        </a>
         <a
          href="https://www.tiktok.com/@thesplashzone_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ ticktoklogo} alt="TikToK Link" className="tiktok-logo" />
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
          <p className="default-message">💧 Select a character to learn more!</p>
        ) : (
          <div className="bio active">
  {/* Row with text left + image right */}
  <div className="bio-row">
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

    <img
      src={figures[activeIndex].img}
      alt={figures[activeIndex].alias}
      className="bio-img"
      style={{ backgroundColor: figures[activeIndex].colour }}
    />
  </div>

  {/* Abilities BELOW the flexbox row */}
  <p>Role: {figures[activeIndex].role}</p>
  <h3>Weapon(s):</h3>
  <p><strong>{figures[activeIndex].Weapon1.WeaponName}:</strong> </p>
  <p><strong>Primary:</strong> {figures[activeIndex].Weapon1.Primary} - {figures[activeIndex].Weapon1.PrimaryD}</p>
  <p><strong>Seconadry:</strong> {figures[activeIndex].Weapon1.Secondary} - {figures[activeIndex].Weapon1.SecondaryD}</p>
  
 
 
 {figures[activeIndex].Weapon2 && (
  <p>
      <p><strong>{figures[activeIndex].Weapon2.WeaponName}:</strong> </p>
      <p><strong>Primary:</strong> {figures[activeIndex].Weapon2.Primary} - {figures[activeIndex].Weapon2.PrimaryD}</p>
      <p><strong>Seconadry:</strong> {figures[activeIndex].Weapon2.Secondary} - {figures[activeIndex].Weapon2.SecondaryD}</p>
  </p>
  
)}

<h3>Abilites:</h3>
    <p><strong>Passive:</strong> {figures[activeIndex].Passive} - {figures[activeIndex].PassiveD}</p>
    <p><strong>Ability 1:</strong> {figures[activeIndex].Ability1} - {figures[activeIndex].Ability1D}</p>
    <p><strong>Ability 2:</strong> {figures[activeIndex].Ability2} - {figures[activeIndex].Ability2D}</p>
    <p><strong>Ultimate:</strong> {figures[activeIndex].Ultimate} - {figures[activeIndex].UltimateD}</p>
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
