import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import NavBar from './NavBar'
function Project() {
  return (
    <>
    <NavBar/>
    <div id='project' className='container-fluid text-center '>
       
            <h1 id='project1'>Projects</h1>
       
        <div className='d-flex'>
        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          ABOUT THE PROJECT
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          ABOUT THE PROJECT
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>PROJECT EX</Card.Title>
        <Card.Text>
          ABOUT THE PROJECT
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  
    </>
  )
}

export default Project