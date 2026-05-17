import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const DashboardPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="job-card">
              <p>Img icon</p>
              <div>
                <h6>32</h6>
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
            <Button className="bg-light text-black">Add Job</Button>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
