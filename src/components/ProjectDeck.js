import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

const ProjectDeck = (props) => {
    return(
        <div>
            <CardDeck >
                <Card bg='dark' border="light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Reactive Accounts</Card.Title>
                    <Card.Subtitle>
                        Some quick example text
                    </Card.Subtitle>
                    <Button variant="primary">See on GitHub</Button>
                </Card.Body>
                </Card><br></br>
                <Card bg='dark' border="light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Account Overview</Card.Title>
                    <Card.Subtitle>
                        Some quick example text
                    </Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card bg='dark' border="light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Bulls Eye</Card.Title>
                    <Card.Subtitle>
                        Some quick example text 
                    </Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card bg='dark' border="light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Botto's Sportsbook</Card.Title>
                    <Card.Subtitle>
                        Some quick example text 
                    </Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card bg='dark' border="light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Stocks CLI Gem</Card.Title>
                    <Card.Subtitle>
                        Some quick example text 
                    </Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
            </CardDeck>
        </div>
    )
}

export default ProjectDeck