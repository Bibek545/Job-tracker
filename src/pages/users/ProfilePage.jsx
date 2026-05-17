import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <div className="text-start mb-3">
              <h4 className="fw-bold">My Profile</h4>
              <p>Manage your account information</p>
            </div>

            <div className="register-card">
              <div className="d-flex justify-content-start gap-3 align-items-center mb-3">
                <div>
                  <p>profile picture</p>
                </div>

                <div>
                  <h4 className="mb-1 fw-bold">Bibek Hamal</h4>
                  <p>Graduate Developer</p>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <p>Email</p>
                  <p>bibek@gmail.com</p>
                </div>
                <div>
                  <p>Phone</p>
                  <p>+61********</p>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <p>Location</p>
                  <p>Sydney</p>
                </div>
                <div>
                  <p>Member Since</p>
                  <p>May 2026</p>
                </div>
              </div>
              <Row className="g-3 mt-3">
                <Col xs={12} md={4}>
                  <div className="job-card">
                    <p>Img icon</p>
                    <div>
                      <h6>25</h6>
                      <p>Applications</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="job-card">
                    <p>Img icon</p>
                    <div>
                      <h6>5</h6>
                      <p>Interviews</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="job-card">
                    <p>Img icon</p>
                    <div>
                      <h6>1</h6>
                      <p>Offers</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="d-flex justify-content-end gap-3 mt-4">
                <Button variant="outline-secondary">Change Password</Button>
                <Button variant="warning">Edit Profile</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
