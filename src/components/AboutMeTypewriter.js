import Typewriter from 'typewriter-effect';

const q3m_projects = '<li>Design and implement new features in our reporting app</li><li>Develop new queries and endpoints for our API</li><li>Integrate 3rd party APIs</li><li>Write documentation</li><li>Automate processes</li>'

const AboutMeTypewriterBio = () => {

return(
<Typewriter
  options={{
    strings: [q3m_projects],
    autoStart: true,
    loop: true,
    deleteSpeed: 0,
    pauseFor: 30000,
    cursor: ''
    // delay: 5000
  }}
  
/>
)}

export default AboutMeTypewriterBio