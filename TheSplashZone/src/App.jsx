import './App.css'
import youtubeLogo from './assets/youtube.png'
import splashlogo from './assets/Splash.png'
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
            className="youtube-logo"
          />
        </a>
        <p>Where we splash on your zone!</p>
      </div>

      <div className="stick-figures">
        <a href="https://www.linkedin.com/in/bryan-dela-cruz-b190132b7/" target="_blank" rel="noopener noreferrer"><img src={splasher20} alt="20"/></a>          
        <a href="https://www.linkedin.com/in/shane-h-712a73388/" target="_blank" rel="noopener noreferrer"><img src={splasher10} alt="10"/></a>
        <a href="https://www.linkedin.com/in/shane-h-712a73388/" target="_blank" rel="noopener noreferrer"><img src={splasher21} alt="21" className="invert-on-dark"/></a>
        <a href="https://www.linkedin.com/in/kian-athari/" target="_blank" rel="noopener noreferrer"><img src={splasher11} alt="11"/></a>
        <a href="https://www.linkedin.com/in/han-pham-55a502277/" target="_blank" rel="noopener noreferrer"><img src={splasher01} alt="01"/></a>
        <a href="https://www.linkedin.com/in/arya-akhavein/" target="_blank" rel="noopener noreferrer"><img src={splasher22} alt="22"/></a>
        <a href="https://www.linkedin.com/in/cole-mckee-618677256/" target="_blank" rel="noopener noreferrer"><img src={splasher12} alt="12"/></a>
      </div>
    </>
  )
}

export default App