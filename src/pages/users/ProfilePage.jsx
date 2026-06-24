import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../features/auth/userAction";
import { changePasswordApi, editProfileApi } from "../../helpers/authApi";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileForm, setProfileForm] = useState({
    fName: "",
    lName: "",
    location: "",
    phone: "",
  });
  const { user } = useSelector((state) => state.userInfo);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // const { user } = useSelector((state)=> state.userInfo);
  const dispatch = useDispatch();
  // const { jobs } = useSelector((state)=> state.jobInfo)
  useEffect(() => {
    if (!user) {
      dispatch(getUserAction());
    }
  }, [user, dispatch]);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnEditChange = (e) => {
    const { name, value } = e.target;

    setProfileForm({
      ...profileForm,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key];

      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const result = await changePasswordApi(formData);
    if (result.status === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    if (result.status === "success") {
      setFormData({
        password: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowForm(false);
    }

    console.log(formData);
  };

  const handleOnEditSubmit = async (e) => {
    e.preventDefault();

    for (let key in profileForm) {
      const value = profileForm[key];

      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }
    const result = await editProfileApi(profileForm);
    if (result.status === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    if (result.status === "success") {
      setProfileForm({
        email: user.email || "",
        fName: user.fName || "",
        lName: user.lName || "",
        location: user.location || "",
        phone: user.phone || "",
      });
      dispatch(getUserAction());
      setShowEditForm(false);
    }
  };

  const handleShowPasswordModal = () => {
    setShowForm(true);
  };

  const handleShowEdiProfileModal = () => {
    setProfileForm({
      email: user.email || "",
      fName: user.fName || "",
      lName: user.lName || "",
      location: user.location || "",
      phone: user.phone || "",
    });
    setShowEditForm(true);
  };

  const handleOnEdit = (user) => {
    setFormData({
      ...user,
    });
  };
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
                  <h4 className="mb-1 fw-bold">
                    {user.fName} {user.lName}
                  </h4>
                  <p>Graduate Developer</p>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p>{user.phone}</p>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <p>{user.location}</p>
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
                <Button
                  variant="outline-secondary"
                  onClick={handleShowPasswordModal}
                >
                  Change Password
                </Button>
                <Button variant="warning" onClick={handleShowEdiProfileModal}>
                  Edit Profile
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        className="profile-modal-container"
        show={showForm}
        onHide={() => setShowForm(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              <h4>Change your password</h4>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Row>
              {/* <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Enter email"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group> */}

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your current Password"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  placeholder="Enter your new Password here"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm your new Password here"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
            </Row>

            <Form.Group>
              <div className="d-flex justify-content-end gap-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>

                <Button type="submit" variant="warning">
                  Update Password
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        className="profile-modal-container"
        show={showEditForm}
        onHide={() => setShowEditForm(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              <h4>Edit Your Profile</h4>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleOnEditSubmit}>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={profileForm.email}
                  placeholder="Email"
                  onChange={handleOnEditChange}
                  readOnly
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fName"
                  value={profileForm.fName}
                  placeholder="First Name"
                  onChange={handleOnEditChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lName"
                  value={profileForm.lName}
                  placeholder="Last Name"
                  onChange={handleOnEditChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="location"
                  value={profileForm.location}
                  placeholder="This is the location"
                  onChange={handleOnEditChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="phone"
                  value={profileForm.phone}
                  placeholder="0123456789"
                  onChange={handleOnEditChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Member Since</Form.Label>
                <Form.Control
                  type="text"
                  // type="password"
                  name="confirmPassword"
                  value={profileForm.confirmPassword}
                  placeholder="20/04/2026"
                  onChange={handleOnEditChange}
                  readOnly
                ></Form.Control>
              </Form.Group>
            </Row>

            <Form.Group>
              <div className="d-flex justify-content-end gap-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowEditForm(false)}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="warning"
                  onClick={() => handleOnEdit(user)}
                >
                  Edit Profile
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfilePage;
