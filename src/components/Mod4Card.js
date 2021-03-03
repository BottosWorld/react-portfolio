import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mod4Demo from './Mod5Demo'

const Mod4Card = () => {

    return(
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                    <Card.Title>Account Overview</Card.Title>
                    <Card.Subtitle>
                        <Mod4Demo/>
                    </Card.Subtitle>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/JS-project-frontend">Front-End</Button>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/js-project-backend-rails-api">Back-End</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mod4Card