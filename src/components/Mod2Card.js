import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mod2Demo from './Mod5Demo'

const Mod2Card = () => {

    return(
        <div>
            <Card bg='dark' border="light">
                <Card.Body>
                <Card.Title>Botto's Sportsbook</Card.Title>
                    <Card.Subtitle>
                        <Mod2Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/sinatra_project">GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mod2Card