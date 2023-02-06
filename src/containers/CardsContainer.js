import React from 'react'
import ProjectDeck from '../components/ProjectDeck'
import FeaturedDeck from '../components/FeaturedDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResumePDF from '../components/ResumePDF'
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
                <h1 className="text-center">Featured Projects</h1>

                    <Row>
                        {/* <Col>
                        <ProjectDeck/>
                        </Col> */}
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
                    <br></br>
                    <Row>
                        <Col>
                        <FeaturedDeck/>
                        </Col>
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
                <br></br>
                <Container>
                    {/* <Col> */}
                        {/* <ResumePDF/> */}
                    {/* </Col> */}
                </Container>
                <br></br>
            </div>
        )
    }
}

export default CardsContainer