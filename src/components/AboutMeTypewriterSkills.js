import Typewriter from 'typewriter-effect';

const skills = '<h3><strong>Javascript - Node | Express | React | Redux</strong></h3><br><h4>PHP - LAMP stack with Laravel</h4><br><h5>AWS - EC2 | RDS | S3</h5>'

const AboutMeTypewriterSkills = () => {

return(
<Typewriter
  options={{
    strings: [skills],
    autoStart: true,
    loop: true,
    deleteSpeed: 0,
    pauseFor: 30000,
    cursor: ''
  }}
/>
)}

export default AboutMeTypewriterSkills