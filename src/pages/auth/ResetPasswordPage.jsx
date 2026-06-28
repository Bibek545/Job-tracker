import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPasswordApi } from "../../helpers/authApi";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const location = useLocation();
  const emailFromForgotPage = location.state?.email;
  const [form, setForm] = useState({
    email: emailFromForgotPage || "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

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
    const result = await resetPasswordApi(form);
    if (result.status === "success") {
      toast.success(result.message);
      navigate("/login");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <>
      <Container className="py-5">
                <Button onClick={ navigate(-1)}>
            Go back
        </Button>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="login-card">
              <h2 className="text-center mb-4">Reset Password Here</h2>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    // onChange={handleOnChange}
                    readOnly
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Enter your otp here</Form.Label>
                  <Form.Control
                    type="text"
                    name="otp"
                    placeholder="123456"
                    // value={form.email}
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> New Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="newPassword"
                    placeholder="Enter your password"
                    // value={form.email}
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    // value={form.email}
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

export default ResetPasswordPage;
