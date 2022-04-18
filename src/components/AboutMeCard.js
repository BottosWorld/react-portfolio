import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutMeVideo from './AboutMeVideo'
import AboutMeTypewriter from './AboutMeTypewriter'
import AboutMeTypewriterSkills from './AboutMeTypewriterSkills'
import AboutMeTypewriterHeader from './AboutMeTypewriterHeader'




const AboutMeCard = (props) => {
    return(
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                <Card.Header as="h1">
                    {/* Bryan Enjoys <AboutMeTypewriterHeader/>  */}
                    <u>I am a full stack software engineer specializing in:</u>
                </Card.Header>
                <Card.Title>
                    <AboutMeTypewriterSkills/>
                </Card.Title>
                <br></br>
                <Card.Subtitle>
                    <h2><u>I spend most of my day solving complex problems at Q3M</u></h2>
                    <h4>Here are a few things I work on:</h4>
                    <br></br>
                    <AboutMeTypewriter/>
                </Card.Subtitle>
                <br></br>
                <p></p>
                <p>Connect with me on <Button variant="outline-primary" href="https://linkedin.com/in/bryanleebottorff">LinkedIn</Button> to learn more!</p>
            </Card.Body>
            </Card>
        </div>
    )
}

export default AboutMeCard