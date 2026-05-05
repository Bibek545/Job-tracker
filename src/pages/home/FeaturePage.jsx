import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturePage = () => {
  return (
    <>
      {/* hero section */}
      <Container className="bg-light bg-gradient py-3 rounded">
        <Row className="align-items-center">
          <Col className="p-5">
            <h2 className="fw-bold">
              Everything you need to manage your job search.
            </h2>
            <p className="pt-2">
              {" "}
              We have made it easier to track your applications for free.
            </p>
          </Col>
        </Row>
      </Container>
      {/* features card */}
      <Container className="bg-light bg-gradient rounded">
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold">Track Applications</h4>
              <p>
                Keep all your job entires organised in one place with status
                updates.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold">Organise Job Details</h4>
              <p>
                {" "}
                Save company name, role, date, salary, location and notes in one
                place.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold"> Application Timeline </h4>
              <p>
                {" "}
                Keep track of when you applied and stay on top of
                follow-ups.{" "}
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold">Progress Overview </h4>
              <p>
                See how many applications, interviews, and offers you have at a
                glance.{" "}
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold"> Secure Account </h4>
              <p>
                Your job search data is protected with your personal login
                account.{" "}
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="feature-card-feature bg-light">
              <p>ICON /IMAGE</p>
              <h4 className="fw-bold"> Notes & Insights </h4>
              <p>
                Add personal notes for each job, like interview feedback,
                recruiter details, or preparation tips.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="bg-light bg-gradient py-3 rounded">
        <Row className="g-4">
          <Col>
            <div className="feaure-button d-flex justify-content-center">
              <Button className="m-2">
                <Link
                  className="text-decoration-none text-white"
                  to="/register"
                >
                  {" "}
                  Regiter Now
                </Link>
              </Button>
              <Button className="m-2">
                <Link className="text-decoration-none text-white" to="/login ">
                  Login
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeaturePage;
