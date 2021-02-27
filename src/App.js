import React from 'react';
import './App.css'
import CardsContainer from './containers/CardsContainer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import Particles from 'react-particles-js';
import configParticles from './configParticles';


function App() {

  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden'}}>
      <div style={{ position: 'absolute'}}>
        <Router>
          <Navbar/>
          <Particles height="100vh" width="100vw" params={configParticles} />
        </Router>
      </div>
      <header className="App-header">
        <CardsContainer/>
      </header>

    </div>

  );
}

export default App;
