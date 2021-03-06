import React from 'react';
import Card from 'react-bootstrap/Card'
import DemoModal from './DemoModal'
// import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MediumLogo from '../images/iconmonstr-medium-light-32.png'

const Blog = () => { 
  return ( 
    <div className='App-blogs'> 
        <h1>Blogs:</h1>
        <div>
            <Card bg='dark' border="light">
            <Card.Body>
                <Card.Header as="h5">Featured Blog Post</Card.Header>
                <Card.Title>setState() Why and How it's Used in React</Card.Title>
                <br></br>
                <Card.Subtitle>
                  <DemoModal/>
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
            <Container><Row><Col>
                    <Link to={{ pathname: "https://bryanlbottorff.medium.com/" }} target="_blank">
                        <img width="32px" height="auto" className="img-responsive" src={MediumLogo}  alt="medium"/>       
                    </Link>
                    </Col></Row></Container>
            </Card.Footer>
            </Card>
        </div>
    </div>     
  );
};

export default Blog;