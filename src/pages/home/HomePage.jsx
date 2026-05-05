import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ichigo from "../../assests/image/ichigo.jpg";
import { Link } from "react-router-dom";

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
              <Link className="text-decoration-none" to="/login ">
                {" "}
                Login{" "}
              </Link>{" "}
              or{" "}
              <Link className="text-decoration-none" to="/register">
                {" "}
                Register
              </Link>{" "}
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
        <Row className="g-4">
          <Col>
            <div className="feaure-button d-flex justify-content-center">
              <Button className="m-2"><Link className="text-decoration-none text-white" to="/register"> Regiter Now</Link></Button>
              <Button className="m-2"><Link className="text-decoration-none text-white" to="/login ">Login</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
