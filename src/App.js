import logo from './logo.svg';
import bg from './assets/header_bg.jpg'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio">
      <div id="top" className="header_container">
        <img className="Bg" src={bg} alt="background"></img>
        <div className="header_txt">Welcome to my<br></br>Portfolio</div>
      </div>
      <Router>
        <Navbar />
      </Router>
      <div className="about_div">
        <h1 className="about" id="about">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="projects_div">
        <h1 id="projects">Projects</h1>
        <p>
          It's coming...
        </p>
      </div>
      <div className="contact_div">
        <h1 id="contact">Contact</h1>
        <p>
          Nope go away.
        </p>
      </div>
    </div>
  );
}

export default App;
