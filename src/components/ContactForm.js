import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class ContactForm extends React.Component { 

  state = {
    first_name: '',
    last_name: '',
    email: '',
    description: 'What can I help you with?'
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      description: ''
    })
  }

  render(){
  return ( 
    <div className='App-contact'>
      <Card bg='dark' border="light">
        <Card.Body>
          <Card.Header as="h1">Contact Me</Card.Header>
          <br></br>
          <Card.Text>
            <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='FirstName' value={this.state.first_name} name='first_name' onChange={this.handleChange}/>
              <br></br><br></br>
              <input type='text' placeholder='LastName' value={this.state.last_name} name='last_name' onChange={this.handleChange}/>
              <br></br><br></br>
              <input type='email' placeholder='email@gmail.com' value={this.state.email} name='email' onChange={this.handleChange}/>
              <br></br><br></br>
              <textarea value={this.state.description} name='description' onChange={this.handleChange}/>
              <br></br>
              <Button input type='submit' variant="primary">I'm Broken, Do Not Click!</Button>
              {/* <input type='submit'/> */}
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>     
  )}
}


export default ContactForm