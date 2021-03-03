import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mod3Demo from './Mod5Demo'

const Mod3Card = () => {

    return(
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                    <Card.Title>Bulls Eye</Card.Title>
                    <Card.Subtitle>
                        <Mod3Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/rails-project">GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mod3Card