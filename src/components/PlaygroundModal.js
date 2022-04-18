import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import { render } from 'react-dom'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const PlaygroundModal = (props) => {

    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    // const linkToParticles = () => <Link to={{ pathname: "https://vincentgarreau.com/particles.js/" }} target="_blank"></Link>

    return(
        <div className='App-blogs'> 
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
            <Card.Subtitle>
                <div>
                    <Button variant="primary" onClick={handleShow}>
                        Click Me!
                    </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Particles Playground</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Click around to watch the particles go!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" href="https://vincentgarreau.com/particles.js/">
                                Make Your Own!
                            </Button>
                            </Modal.Footer>
                        </Modal>
                </div>
            </Card.Subtitle>
            </Card.Body>
            </Card>
        </div>
        </div>
    )
}

export default PlaygroundModal
