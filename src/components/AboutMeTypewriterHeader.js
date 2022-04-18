import Typewriter from 'typewriter-effect';

const header = '<h1>A few things about me:</h1>'

const AboutMeTypewriterHeader = () => {

return(
<Typewriter
  options={{
    strings: ['Learning', 'Gaming', 'Football', 'Baseball', 'Hockey', 'Music', 'Traveling', 'Cooking', 'Exploring NYC'],
    autoStart: true,
    pauseFor: 100,
    loop: true,
  }}
/>
)}

export default AboutMeTypewriterHeader