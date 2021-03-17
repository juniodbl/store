import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container style={{paddingTop: '100px'}}>
        <Row>
          <Col>XIMIRAAAAAAAAAAAAAAAAAAAAAA</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
