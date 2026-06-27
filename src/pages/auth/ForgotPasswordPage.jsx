import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  

    setForm({
      ...form,
      [name]: value,
    });
      console.log()
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    for (let key in form) {
      const value = form[key].trim();
      if (!value) {
        alert(`${key} is required`);
        return;
      }
       console.log(value)
    }
   
  };
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="login-card">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Button className="w-100" variant="primary" type="Submit">
                  Submit
                </Button>
                <div className="text-center m-3">
                  <p>
                    Already a user{" "}
                    <Link to="/login" className="text-decoration-none">
                      login
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

export default ForgotPasswordPage;
