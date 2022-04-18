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
          {/* <Switch> */}
            {/* <Route exact path="/" component={App}/> */}
            {/* <Route path="/portfolio" component={CardsContainer}/> */}
            {/* <Route path="/about" component={AboutMe}/>  */}
            {/* <Route path="/blog" component={BlogsContainer}/> */}
            {/* <Route path="/contact" component={ContactContainer}/> */}
          {/* </Switch> */}
        {/* </Router> */}
        <div className="configParticles" style={{ position: 'relative', overflow: 'hidden'}}>
        {/* <div> */}
          {/* <ParticlesContainer/> */}
          {/* <div className='App'>
            <Route path="/about" component={AboutMe}/>
          </div> */}
          <div style={{ position: 'absolute'}}>
              <Particles height="500vh" width="100vw" params={configParticles}/>
          </div>
          <br></br>
          <div className='App-about'>
            {/* <AboutMe/> */}
            <Switch>
            <Route exact path="/" component={AboutMe}/>
            </Switch>
            {/* </div> */}
            <br></br>
            {/* <div className='App-projects'> */}
            {/* <CardsContainer/> */}
            {/* <Switch>
            <Route path="/portfolio" component={CardsContainer}/>
            </Switch> */}
            </div>
            <br></br>
            <div>
            <Switch>
            {/* <Route exact path="/" component={App}/> */}
            <Route path="/portfolio" component={CardsContainer}/>
            {/* <Route path="/about" component={AboutMe}/>  */}
            {/* <Route path="/about" component={AboutMe}/> */}
            <Route path="/blog" component={BlogsContainer}/>
            <Route path="/contact" component={ContactContainer}/>
            <Route path="/play-with-particles"/>
            </Switch>
          </div>
        </div>
        {/* </Switch> */}
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