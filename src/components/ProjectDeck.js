import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Mod5Demo from './Mod5Demo'
import Mod3Demo from './Mod3Demo'
import Mod2Demo from './Mod2Demo'

const ProjectDeck = (props) => {
    return(
        <div>
            <CardDeck >
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
                <br></br>
                {/* <Card bg='dark' border="light">
                <Card.Body>
                    <Card.Title>Account Overview</Card.Title>
                    <Card.Subtitle>
                        Some quick example text
                    </Card.Subtitle>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/JS-project-frontend">Front-End</Button>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/js-project-backend-rails-api">Back-End</Button>
                </Card.Body>
                </Card> */}
                {/* <br></br> */}
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
                <br></br>
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
                <br></br>
                {/* <Card bg='dark' border="light">
                <Card.Body>
                    <Card.Title>Stocks CLI Gem</Card.Title>
                    <Card.Subtitle>
                        Some quick example text 
                    </Card.Subtitle>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/stocks">GitHub</Button>
                </Card.Body>
                </Card> */}
                <br></br>
            </CardDeck>
        </div>
    )
}

export default ProjectDeck