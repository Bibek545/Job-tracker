import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

const AllJobsPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <div className="register-card">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="text-center mb-1">Job Applications</h3>
                  <p>Manage your job applications.</p>
                </div>
                <div>
                  <Button
                    onClick={() => setShowForm(true)}
                    variant="outline-secondary"
                  >
                    Add Job
                  </Button>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company</th>
                    <th scope="col">Position</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Applied</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Google</td>
                    <td>Software Engineer</td>
                    <td>Offer</td>
                    <td>Apr 18, 2024</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-secondary">Edit </Button>
                      <Button variant="outline-danger">Delete </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showForm}
        onHide={() => setShowForm(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Job</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="JobTitle"
                    placeholder="Job Title"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="Company"
                    placeholder="Company"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Location"
                  />
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
                  <Form.Control type="date" name="appliedDate" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                name="notes"
                placeholder="Notes"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </Button>

          <Button variant="warning">Add Job</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AllJobsPage;
