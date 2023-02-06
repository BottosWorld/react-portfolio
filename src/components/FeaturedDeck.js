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
                {/* <Card.Header>Featured Project</Card.Header> */}
                <Card.Body>
                    <Card.Title><h2>Reactive Accounts</h2></Card.Title>
                    <Card.Subtitle>
                        <Mod5Demo/>
                    </Card.Subtitle>
                    <Card.Text>
                        {/* <Mod5Demo/> */}
                        <p style={{ whiteSpace: 'break-spaces', fontSize: '15px', textAlign: 'left'}}>{'\n'}(Jan 2021) An expense tracker application where users can add/delete accounts and make transactions associated with that account.{'\n\n'}

                        {'->'} Utilized Ruby on Rails API backend with CRUD functionality to handle and store data in SQLite{'\n\n'}

                        {'->'} Implemented Active Model Serializer Gem in backend to generate serializers resulting in a simpler Redux flow{'\n\n'}

                        {'->'} Programmed app to function asynchronously allowing the page to continue to load while awaiting the fetch data{'\n\n'}

                        {'->'} Leveraged React’s state and components ideology to create a dynamic, interactive frontend for the user
                        </p>
                    </Card.Text>
                    {/* <Button variant="outline-primary" href="https://github.com/BottosWorld/react-redux-project">GitHub</Button> */}
                </Card.Body>
                <Card.Footer>
                <Button variant="outline-primary" href="https://github.com/BottosWorld/react-redux-project">GitHub</Button>
                </Card.Footer>
                </Card>
                <br></br>
                <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} border="light">
                {/* <Card.Header>Featured Project</Card.Header> */}
                <Card.Body>
                    <Card.Title><h2>Bulls Eye</h2></Card.Title>
                    <Card.Subtitle>
                        <Mod3Demo/>
                    </Card.Subtitle>
                    <Card.Text>
                        {/* <Mod3Demo/> */}
                        <p style={{ whiteSpace: 'break-spaces', fontSize: '15px', textAlign: 'left'}}>{'\n'}(Nov 2020) A portfolio and stock tracker application with user authentication and CRUD functionality, written in Ruby using Rails.{'\n\n'}

                        {'->'} Applied Cocoon Gem, enabling users to dynamically add stocks to their watchlist/portfolio{'\n\n'}

                        {'->'} Streamlined signup / login process using Devise and OmniAuth Gems so users can sign in / up with GitHub{'\n\n'}

                        {'->'} Orchestrated nested routing and “has many through” relationships so users are able to view stocks in their account
                        </p>
                    </Card.Text>
                    {/* <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/rails-project">GitHub</Button> */}
                </Card.Body>
                <Card.Footer>
                <Button variant="outline-primary" href="https://github.com/BottosWorld/rails-project">GitHub</Button>
                </Card.Footer>
                </Card>
                <br></br>
                <Card style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} border="light">
                {/* <Card.Header>Featured Project</Card.Header> */}
                <Card.Body>
                    <Card.Title><h2>Botto's Sportsbook</h2></Card.Title>
                    <Card.Subtitle>
                        <Mod2Demo/>
                    </Card.Subtitle>
                    <Card.Text>
                        {/* <Mod2Demo/> */}
                        <p style={{ whiteSpace: 'break-spaces', fontSize: '15px', textAlign: 'left'}}>{'\n'}(Aug 2020) A sportsbook using the Sportsdata.io API to pull in baseball game data, users can signup/login, see the current schedule, place bets, view all bets on the site, and edit/delete their own bets.{'\n\n'}

                        {'->'} Consolidated JSON response data into an array of hashes so the user is able to see a scoreboard for each game{'\n\n'}

                        {'->'} Controlled CRUD actions with user sessions restricting other users from manipulating bets that aren’t their own{'\n\n'}

                        {'->'} Designed application to follow MVC file structure resulting in clean, organized code
                        </p>
                    </Card.Text>
                    {/* <br></br>
                    <Button variant="outline-primary" href="https://github.com/BottosWorld/sinatra_project">GitHub</Button> */}
                </Card.Body>
                <Card.Footer>
                <Button variant="outline-primary" href="https://github.com/BottosWorld/sinatra_project">GitHub</Button>
                </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default FeaturedDeck