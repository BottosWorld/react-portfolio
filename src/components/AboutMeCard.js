import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutMeVideo from './AboutMeVideo'

const AboutMeCard = (props) => {
    return(
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                <Card.Header as="h5">A Brief Video About Myself</Card.Header>
                <Card.Title>*Coming Soon*</Card.Title>
                <br></br>
                <Card.Subtitle>
                    <AboutMeVideo/>
                </Card.Subtitle>
                <br></br>
                <p>---<Button variant="outline-primary" href="https://linkedin.com/in/bryanleebottorff">LinkedIn</Button>---</p>
            </Card.Body>
            </Card>
        </div>
    )
}

export default AboutMeCard