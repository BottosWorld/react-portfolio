import React from 'react'
import ProjectDeck from '../components/ProjectDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class CardsContainer extends React.Component{

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <ProjectDeck/>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CardsContainer