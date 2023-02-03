import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Mod5Demo from './Mod5Demo'
import Mod3Demo from './Mod3Demo'
import Mod2Demo from './Mod2Demo'

const FeaturedDeck = (props) => {
    return(
        <div>
            <CardDeck>
                <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} border="light">
                <Card.Header>Featured Project</Card.Header>
                <Card.Body>
                    <Card.Title>Reactive Accounts</Card.Title>
                    <Card.Subtitle>
                        <Mod5Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/react-redux-project">GitHub</Button>
                </Card.Body>
                </Card>
                <br></br>
                <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} border="light">
                <Card.Header>Featured Project</Card.Header>
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
                <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} border="light">
                <Card.Header>Featured Project</Card.Header>
                <Card.Body>
                    <Card.Title>Botto's Sportsbook</Card.Title>
                    <Card.Subtitle>
                        <Mod2Demo/>
                    </Card.Subtitle>
                    <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/sinatra_project">GitHub</Button>
                </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default FeaturedDeck