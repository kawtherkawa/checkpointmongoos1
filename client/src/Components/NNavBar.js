import React from 'react'
import {Navbar,Container,Nav,Form,Button} from 'react-bootstrap'
const NNavBar = () => {
  return (
    <div>
       
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Mern F3</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactList">Contact List</Nav.Link>
            <Nav.Link href="/add/">Add Contact</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NNavBar