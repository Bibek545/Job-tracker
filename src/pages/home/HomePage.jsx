import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ichigo from "../../assests/image/ichigo.jpg";

const HomePage = () => {
  return (
    <>
      <Container className="bg-light bg-gradient py-3 rounded">
        <Row className="align-items-center">
          {/* hero card section */}
          <Col className="p-5">
            <h1 className="fw-bold">
              Track Your Job Applications Effortlessly
            </h1>
            <p className="pt-2">
              Manage and monitor your job applications in one place. Stay
              organised and increase your chances of landing your dream job
            </p>
            <Button className="hero-card-button m-2 bg-info">
              Get Started
            </Button>
            <Button className=" hero-card-button m-2 bg-light text-dark">
              Learn More
            </Button>
            <p className="pt-2">
              <a className="text-decoration-none" href="/login ">
                {" "}
                Login{" "}
              </a>{" "}
              or{" "}
              <a className="text-decoration-none" href="/register">
                {" "}
                Register
              </a>{" "}
              to save your progress
            </p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img
              className="hero-img img-fluid     shadow
              rounded"
              src={ichigo}
              // width={450}
            ></img>
          </Col>
        </Row>
      </Container>
      <Container>
        {/* feature card section */}

      </Container>
    </>
  );
};

export default HomePage;
