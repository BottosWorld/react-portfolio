import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectDeck from '../components/ProjectDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CardsContainer extends React.Component{

    render(){
        return(
            <div style={{}}>
                {/* <Container>
                    <Row>
                        <Col><ProjectCard/></Col>
                        <Col><ProjectCard/></Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Row>
                        <ProjectDeck/>
                    </Row>
                </Container> */}
            <div><ProjectDeck/></div>
            </div>
        )
    }
}

export default CardsContainer