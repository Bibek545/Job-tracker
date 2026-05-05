import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="login-card">
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                  ></Form.Control>
                </Form.Group>
                <Button className="w-100" variant="primary">
                  Login
                </Button>
                <div className="text-center m-3">
                  <p>
                    New user{" "}
                    <Link to="/register" className="text-decoration-none">
                      Register
                    </Link>{" "}
                    here.
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
