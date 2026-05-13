import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi } from "../../helpers/authApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in form) {
      const value = form[key].trim();
      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const result = await loginUserApi(form);
    if (result.status === "success") {
      const tokenJWT = result.token;
      console.log(result);
      console.log(result.status);
      localStorage.setItem("jwtToken", tokenJWT);
      setTimeout(() => {
        navigate("/user/dashboard");
      }, 1500);
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
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Button className="w-100" variant="primary" type="Submit">
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
