import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { newJobApi } from "../../helpers/jobApi.jsx";

const AddJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    status: "",
    appliedDate: "",
    notes: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target);

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key].trim();

      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const result = await newJobApi(formData, true);
    console.log(result);
  };
  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <div className="register-card">
              <h3 className="text-center mb-1"> Add New Job</h3>
              <p>Add your jobs</p>
              <Form onSubmit={handleOnSubmit}>
                <Row>
                  <Col xs={12} lg={9}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        placeholder="Job Title"
                        onChange={handleOnChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        placeholder="Company"
                        onChange={handleOnChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="location"
                        value={formData.location}
                        placeholder="Location"
                        onChange={handleOnChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleOnChange}
                      >
                        <option value="">Job Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Contract">Contract</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleOnChange}
                      >
                        <option value="">Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offered">Offered</option>
                        <option value="Rejected">Rejected</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="date"
                        name="appliedDate"
                        value={formData.appliedDate}
                        placeholder="Applied Date"
                        onChange={handleOnChange}
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
                    value={formData.notes}
                    placeholder="Notes"
                    onChange={handleOnChange}
                  ></Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-end gap-3">
                  <Button type="reset" variant="outline-secondary">Cancel</Button>
                  <Button type="submit" variant="outline-secondary">Add Job</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddJobPage;
