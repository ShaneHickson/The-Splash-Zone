
import './App.css'
import youtubeLogo from './assets/youtube.png'
import splashlogo from './assets/splash.png'
import splasher01 from './assets/stick_figure_0_1.png'
import splasher10 from './assets/stick_figure_1_0.png'
import splasher11 from './assets/stick_figure_1_1.png'
import splasher12 from './assets/stick_figure_1_2.png'
import splasher20 from './assets/stick_figure_2_0.png'
import splasher21 from './assets/stick_figure_2_1.png'
import splasher22 from './assets/stick_figure_2_2.png'
function App() {
  return (
    <>
      <div>
      <img src={splashlogo} alt="Mascot" className="top-left-logo" />
      <h1>Welcome to The Splash Zone 🌊</h1>
      <a
        href="https://www.youtube.com/@TheSplashZone0" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src={youtubeLogo} 
          alt="YouTube Channel" 
          style={{ width: '60px', height: '60px', cursor: 'pointer' }} 
        />
      </a>
        <p>Where we splash on your zone!</p>
        <div>
          <img src={splasher20} alt="20"/>
          <img src={splasher10} alt="10"/>
          <img src={splasher21} alt="21"/>
          <img src={splasher11} alt="11"/>
          <img src={splasher01} alt="01"/>
          <img src={splasher22} alt="22"/>
          <img src={splasher12} alt="12"/>
        </div>
    </div>
      
      
    </>
  )
}

export default App
