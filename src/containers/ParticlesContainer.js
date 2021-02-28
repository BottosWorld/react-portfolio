import React from 'react'
import Particles from 'react-particles-js';
import configParticles from '../configParticles'

class ParticlesContainer extends React.Component{

    render(){
        return(
            <div className="App" style={{ position: 'relative', overflow: 'hidden'}}>
                <div style={{ position: 'absolute'}}>
                    <Particles height="200vh" width="100vw" params={configParticles}/>
                </div>
            </div>
        )
    }
}

export default ParticlesContainer