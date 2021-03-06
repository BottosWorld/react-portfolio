import React from 'react';
import FeaturedDeck from './FeaturedDeck'
import AboutMeCard from './AboutMeCard'

const AboutMe = () => { 
  return ( 
    <div> 
        {/* <h1>About Me: placeholder video below...</h1> */}
        <br></br>
        <FeaturedDeck/>
        <br></br>
        <AboutMeCard/>
        {/* <br></br><br></br> */}
        {/* <FeaturedDeck/> */}
    </div>     
  );
};

export default AboutMe;