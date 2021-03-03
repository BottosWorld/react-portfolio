import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mod1Demo from './Mod5Demo'

const Mod1Card = () => {

    return(
        <div>
            <Card bg='dark' border="light">
                <Card.Body>
                    <Card.Title>Stocks CLI Gem</Card.Title>
                    <Card.Subtitle>
                        <Mod1Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/stocks">GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mod1Card