import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

const ProjectDeck = (props) => {
    return(
        <div>
            <CardDeck>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Reactive Accounts</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Account Overview</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Bulls Eye</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Botto's Sportsbook</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Stocks CLI Gem</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card><br></br>
            </CardDeck>
        </div>
    )
}

export default ProjectDeck