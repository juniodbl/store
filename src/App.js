import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Api } from './Api';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container style={{ paddingTop: '100px' }}>
        <Switch>
          <Route path="/product/:id" children={<Product />} />
          <Route path="/">
            <Row>
              {Api.getItens().map(item => (
                <Col key={item.id}>
                  <Card style={{ width: '18rem', marginBottom: '1em' }}>
                    <Link to={"/product/" + item.id}>
                      <Card.Img variant="top" src={item.images[0]} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Price: {item.price}
                      </Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Product() {
  const item = Api.getItens()[0];

  return (
    <>
      <Row>
        <Col xs={4}><img src={item.images[0]} alt="product" /></Col>
        <Col xs={8}>
          {item.name}<br />
          Price: {item.price}
        </Col>
      </Row>
    </>
  );
}

export default App;
