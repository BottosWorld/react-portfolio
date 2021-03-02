import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutMeVideo from './AboutMeVideo'

const AboutMeCard = (props) => {
    return(
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                <Card.Title>Botto's Sportsbook</Card.Title>
                <Card.Subtitle>
                    <AboutMeVideo/>
                </Card.Subtitle>
                <br></br>
                <Button variant="outline-primary" href="https://linkedin.com/in/bryanleebottorff">LinkedIn</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default AboutMeCard