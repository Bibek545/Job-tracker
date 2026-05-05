import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Container>
        <Row className="my-4">
          <Col>
            <div className="about-card bg-light">
              <h4 className="fw-bold">About Job Tracker</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="about-card bg-light">
              <h4 className="fw-bold">About/INtro Text</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="about-card  bg-light">
              <h4 className="fw-bold">Why this app</h4>
              <Row className="g-4">
                <Col xs={12} md={4}>
                  <div className="about-card-inside bg-light">
                    <h5> Problem</h5>
                    <p>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="about-card-inside bg-light">
                    <h5>Solution</h5>
                    <p>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="about-card-inside bg-light">
                    <h5>Outcome</h5>
                    <p>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="about-card bg-light">
              <h4 className="fw-bold">About Developer</h4>
              <p>My name is Bibek Hamal</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>Image</p>
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

export default AboutPage;
