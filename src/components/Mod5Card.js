import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Mod5Demo from './Mod5Demo'

const Mod5Card = () => {

    return(
        <div>
            <Card bg='dark' border="light">
                <Card.Body>
                    <Card.Title>Reactive Accounts</Card.Title>
                    <Card.Subtitle>
                        <Mod5Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/react-redux-project">GitHub</Button>
                    {/* <Button variant="outline-primary" href="https://github.com/BottosWorld/react-redux-project">Front-End GitHub</Button>
                    <Button variant="outline-primary" href="https://github.com/bottosworld/react-redux-project-api">Back-End GitHub</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mod5Card