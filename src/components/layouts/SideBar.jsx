import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <Container>
        <Row>
          <div>
            <h4 className='fw-bold p-3'>Job-Tracker</h4>
          </div>
            <Col className='vstack p-3'>
              {/* <h4 className='fw-bold'>Job Tracker</h4> */}
               <Link className="nav-link p-3 fw-bold"to="dashboard">Dashboard</Link>
               <Link className="nav-link p-3 fw-bold" to="all-jobs">All Jobs</Link>
               <Link className="nav-link p-3 fw-bold" to="add-job">Add Job</Link>
               <Link className="nav-link p-3 fw-bold" to="profile">Profile</Link>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default SideBar