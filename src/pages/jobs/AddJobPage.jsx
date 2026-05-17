import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddJobPage = () => {
  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <div className="register-card">
              <h3 className="text-center mb-1"> Add New Job</h3>
              <p>Add Job</p>
              <Form>
                <Row>
                  <Col xs={12} lg={9}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="JobTitle"
                        value=""
                        placeholder="Job Title"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="Company"
                        value=""
                        placeholder="Company"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="location"
                        value=""
                        placeholder="Location"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Select name="jobType">
                        <option>Job Type</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="internship">Internship</option>
                        <option value="contract">Contract</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Select name="status">
                        <option>Status</option>
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offered">Offered</option>
                        <option value="rejected">Rejected</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="date"
                        name="appliedDate"
                        value=""
                        placeholder="Applied Date"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    type="text"
                    name="notes"
                    value=""
                    placeholder="Notes"
                  ></Form.Control>
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-end gap-3">
                <Button variant="outline-secondary">Cancel</Button>
                <Button variant="outline-secondary">Add Job</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddJobPage;
