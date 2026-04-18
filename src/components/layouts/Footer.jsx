import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-primary text-white text-center">
          <Col>
          <Stack>
            <Image
             />
          </Stack>
          </Col>
          <Col>Column 2</Col>
          <Col>Column 3</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
