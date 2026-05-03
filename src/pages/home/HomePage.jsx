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
      <Container className="bg-light bg-gradient py-3 rounded">
        {/* feature card section */}
        <Row>
          <Col>
            <div className="feature-card d-flex justify-content-center">
              <p>img bargraph</p>
              <div>
                <h4 className="fw-bold">Track your Progress</h4>
                <p>View detailed stats on your job applications.</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="feature-card d-flex justify-content-center">
              <p>img chart</p>
              <div className="">
                <h4 className="fw-bold">Organise Applications</h4>
                <p>Easily add and update your applications.</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="feature-card d-flex justify-content-center">
              <p>img bell</p>
              <div>
                <h4 className="fw-bold">Get Notified</h4>
                <p>Receive reminders for upcoming interviews.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="bg-light bg-gradient py-3 rounded">
        <Row>
          <Col>
            <div className="feaure-button d-flex justify-content-center">
              <Button className="m-2"><a className="text-decoration-none text-white" href="/register"> Regiter Now</a></Button>
              <Button className="m-2"><a className="text-decoration-none text-white" href="/login ">Login</a></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
