import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registerUserApi } from "../../helpers/authApi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key].trim();

      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password)
      return alert("Password does not match");
    const result = await registerUserApi(rest);
    console.log(result);

    if (result.status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="register-card">
              <h2 className="text-center mb-4"> Create Account</h2>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fName"
                    value={formData.fName}
                    placeholder="Enter first name"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lName"
                    value={formData.lName}
                    placeholder="Enter last name"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Enter phone number"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter password"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Button className="w-100" variant="primary" type="Submit">
                  Register
                </Button>
                <div className="text-center m-3">
                  <p>
                    If you already have an account please{" "}
                    <Link to="/login" className="text-decoration-none">
                      Login
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

export default RegisterPage;
