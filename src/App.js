import React from 'react';
import CardsContainer from './containers/CardsContainer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Router>
            <Navbar/>
          </Router>
        </h1>
        <p>

        </p>
      </header>
      <div>
        <CardsContainer/>
      </div>
    </div>

  );
}

export default App;
