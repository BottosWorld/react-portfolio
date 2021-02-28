import React from 'react';
import './App.css'
import CardsContainer from './containers/CardsContainer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import Particles from 'react-particles-js';
import configParticles from './configParticles';
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import ParticlesContainer from './containers/ParticlesContainer'


class App extends React.Component {

  render(){
    return (
      <div>
        <Router><Navbar/></Router>
        <div className="App-header" style={{ position: 'relative', overflow: 'hidden'}}>
          <div style={{ position: 'absolute'}}>
              <Particles height="200vh" width="100vw" params={configParticles}/>
          </div>
          <br></br>
          <div className='App'>
            <CardsContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



// function App() {

//   return (
//     <div>
//       <div className="App" style={{ position: 'relative', overflow: 'hidden'}}>
//         <div style={{ position: 'absolute'}}>
//           <Router>
//             <Navbar/>
//             <Particles height="200vh" width="100vw" params={configParticles}/>
//             {/* <CardsContainer/> */}
//           </Router>
//         </div>
//         <header className="App-header">
//           <CardsContainer/>

//         </header>

//       </div>
//       {/* <Router><Navbar/></Router> */}
//     </div>
//   );
// }