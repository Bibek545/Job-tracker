import React from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  Row,
  Stack,
} from "react-bootstrap";
import logo from "../../assests/image/job-tracker-logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-primary text-white py-4">
        <Row className="align-items-start text-start px-4">
          {/* left */}
          <Col md={4}>
            <Stack>
              <Image
                src={logo}
                alt="company logo"
                rounded
                width={100}
                height={100}
              />
            </Stack>
            <h4 className="mt-2">Job-Tracker</h4>
            <p className="mb-0">Company Tagline Here</p>
          </Col>
          {/* middle */}
          <Col md={4}>
            <h5 className="mb-3">Useful Links</h5>
            <Nav className="flex-column">
              <Link to="/home" className=" nav-link text-white p-0 mb-2">
                Home
              </Link>
              <Link to="/features" className=" nav-link text-white p-0 mb-2">
                Features
              </Link>
              <Link to="/about" className=" nav-link text-white p-0">
                About
              </Link>
            </Nav>
          </Col>
          {/* Right */}
          <Col md={4}>
            <h5 className="mb-3">Contact us!</h5>
            <p className="mb-1">email@jobtracker.com</p>
            <p>0123456789</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
