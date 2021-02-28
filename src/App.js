import React from 'react';
import './App.css'
import CardsContainer from './containers/CardsContainer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Particles from 'react-particles-js';
import configParticles from './configParticles';
// import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
// import ParticlesContainer from './containers/ParticlesContainer'
import BlogsContainer from './containers/BlogsContainer'
import ContactContainer from './containers/ContactContainer'


class App extends React.Component {

  render(){
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            {/* <Route exact path="/" component={App}/> */}
            {/* <Route path="/portfolio" component={CardsContainer}/> */}
            <Route path="/about" component={AboutMe}/> 
            <Route path="/blog" component={BlogsContainer}/>
            <Route path="/contact" component={ContactContainer}/>
          </Switch>
        {/* </Router> */}
        <div className="App-header" style={{ position: 'relative', overflow: 'hidden'}}>
          <div style={{ position: 'absolute'}}>
              <Particles height="200vh" width="100vw" params={configParticles}/>
          </div>
          <br></br>
          <div className='App'>
            <CardsContainer/>
            <Switch>
            {/* <Route exact path="/" component={App}/> */}
            {/* <Route path="/portfolio" component={CardsContainer}/> */}
            <Route path="/about" component={AboutMe}/> 
            <Route path="/blog" component={BlogsContainer}/>
            <Route path="/contact" component={ContactContainer}/>
          </Switch>
          </div>
        </div>
        </Router>
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