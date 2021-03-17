import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
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
                <Col>
                  <Card style={{ width: '18rem', marginBottom: '1em' }}>
                    <Link to={"/product/" + item.id}>
                      <Card.Img variant="top" src={item.image} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        From: {item.fromValue}<br />
                        To: {item.toValue}
                      </Card.Text>
                      <Button variant="primary">Add To Cart</Button>
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
  let { id } = useParams();
  const item = Api.getItens()[0];

  return (
    <>
      <Link to="/">{id} Back</Link><br />

      <Row>
        <Col xs={4}><img src={item.image} alt="product" /></Col>
        <Col xs={8}>
          {item.title}<br />

          From: {item.fromValue}<br />
          To: {item.toValue}
        </Col>
      </Row>

    </>
  );
}

export default App;
