import React from 'react'
import ProjectDeck from '../components/ProjectDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Mod1Card from '../components/Mod1Card'
// import Mod2Card from '../components/Mod2Card'
// import Mod3Card from '../components/Mod3Card'
// import Mod4Card from '../components/Mod4Card'
// import Mod5Card from '../components/Mod5Card'

class CardsContainer extends React.Component{

    render(){
        return(
            <div className='App-projects'>
                <Container>
                    <Row>
                        <Col>
                        <ProjectDeck/>
                        </Col>
                        {/* <Col>
                            <Mod5Card/>
                        </Col>
                        <Col>
                            <Mod3Card/>
                        </Col>
                        <Col>
                            <Mod2Card/>
                        </Col>
                        <Col>
                            <Mod4Card/>
                            </Col>
                            <Col>
                            <Mod1Card/>
                        </Col> */}
                    </Row>
                </Container>
                {/* <Container>
                    <Row>
                        <Col>
                            <Mod5Card/>
                        </Col>
                        <Col>
                            <Mod3Card/>
                        </Col>
                        <Col>
                            <Mod2Card/>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        )
    }
}

export default CardsContainer