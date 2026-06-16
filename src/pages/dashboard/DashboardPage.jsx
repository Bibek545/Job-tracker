import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobAction,
  deletejobAction,
  fetchAllJobsAction,
  updateJobAction,
} from "../../features/job/jobAction.js";

const DashboardPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    status: "",
    appliedDate: "",
    notes: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.jobInfo);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key];
      // const value = formData[key].trim();


      if (typeof value === "string" && !value.trim()) {
        alert(`${key} is required`);
        return;
      }
    }
    //   if (!value) {
    //     alert(`${key} is required`);
    //     return;
    //   }
    // }
    console.log(formData);

    // const result = await addJobAction(formData, true);
    let result;
    if (isEditMode) {
      result = await dispatch(updateJobAction(formData._id, formData));
    } else {
      result = await dispatch(addJobAction(formData));
    }

    if (result.status === "success") {
      setFormData({
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        status: "",
        appliedDate: "",
        notes: "",
      });
      setShowForm(false);
    }
    // console.log(result);
  };
  useEffect(() => {
    dispatch(fetchAllJobsAction());
    console.log("Job added");
    console.log("Fetching jobs again");
  }, [dispatch]);

  function showAlert(_id) {
    const result = confirm("Are you sure you want to delete this?");

    if (result) {
      //calling api here
      dispatch(deletejobAction(_id));
      console.log("Job deleted");
      console.log("Fetching jobs again");
    }
  }

  const handleOnEdit = (job) => {
    setFormData({
      ...job,
      appliedDate: job.appliedDate.split("T")[0],
    });

    setShowForm(true);
    setIsEditMode(true);
    // dispatch(updateJobAction(job));
  };

  const handleAddJob = () => {
    setFormData({
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      status: "",
      appliedDate: "",
      notes: "",
    });
    setIsEditMode(false);
    setShowForm(true);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="job-card">
              <p>Img icon</p>
              <div>
                <h6>{jobs.length}</h6>
                <p>Applied</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="job-card">
              <p>Img icon</p>
              <div>
                <h6>10</h6>
                <p>Shortlisted</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="job-card">
              <p>Img icon</p>
              <div>
                <h6>5</h6>
                <p>Interviews Scheduled</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="job-card">
              <p>Img icon</p>
              <div>
                <h6>2</h6>
                <p>Offers</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="dashbaord-container p-3">
        <Row>
          <Col>
            <h3>Job Applications</h3>
          </Col>
          <Col className="">
            <Button onClick={handleAddJob} variant="outline-secondary">
              Add Job
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>All</p>
          </Col>
          <Col>
            <p>Latest</p>
          </Col>
          <Col>
            <p>Search</p>
          </Col>
          <Col>
            <p>Settings</p>
          </Col>
        </Row>
        <Row>
          <Col>
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
                {jobs?.map((job, index) => (
                  <tr key={job._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{job.companyName}</td>
                    <td>{job.jobTitle}</td>
                    <td>{job.status || "Applied"}</td>
                    <td>{job.appliedDate}</td>
                    <td className="d-flex gap-2">
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleOnEdit(job)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => showAlert(job._id)}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showForm}
        onHide={() => setShowForm(false)}
        centered
        size="lg"
      >
        {isEditMode ? (
          <Modal.Header closeButton>
            <Modal.Title>Edit Job</Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header closeButton>
            <Modal.Title> Add New Job</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="companyName"
                    placeholder="Company"
                    value={formData.companyName}
                    onChange={handleOnChange}
                  />
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
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleOnChange}
                  >
                    <option>Job Type</option>
                    <option value="Full-time">Full Time</option>
                    <option value="Part-time">Part Time</option>
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
                    <option>Status</option>
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
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                type="text"
                name="notes"
                value={formData.notes}
                placeholder="Notes"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <div className="d-flex justify-content-end gap-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>

                {isEditMode ? (
                  <Button type="submit" variant="warning">
                    Update Job
                  </Button>
                ) : (
                  <Button type="submit" variant="warning">
                    Add Job
                  </Button>
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button
            variant="outline-secondary"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </Button>

          <Button  type="submit" variant="warning">Add Job</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DashboardPage;
