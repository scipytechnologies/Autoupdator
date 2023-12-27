import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Nav, Card, Button, Table } from 'react-bootstrap'
import Footer from '../../layouts/Footer'
import { useSearchParams } from 'react-router-dom'
import HeaderMobile from '../../layouts/HeaderMobile'
import Avatar from '../../components/Avatar'

import img8 from '../../assets/img/img8.jpg'
import img9 from '../../assets/img/img9.jpg'
import img10 from '../../assets/img/img10.jpg'
import img11 from '../../assets/img/img11.jpg'
import img14 from '../../assets/img/img14.jpg'
import Header from '../../layouts/Header'
import mainservice from '../../Services/mainservice'
import { useSelector, useDispatch } from 'react-redux'
import { event } from 'jquery'

export default function PostEmployee() {
  const currentSkin = localStorage.getItem('skin-mode') ? 'dark' : ''
  const [skin, setSkin] = useState(currentSkin)
  const user = useSelector((state) => state.loginedUser)
  const switchSkin = (skin) => {
    if (skin === 'dark') {
      const btnWhite = document.getElementsByClassName('btn-white')

      for (const btn of btnWhite) {
        btn.classList.add('btn-outline-primary')
        btn.classList.remove('btn-white')
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName('btn-outline-primary')

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove('btn-outline-primary')
        btn.classList.add('btn-white')
      }
    }
  }
  const [form, setform] = useState({})
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setform({
      ...form,
      [event.target.name]: event.target.value
    })
    setUform({
      ...uform,
      [event.target.name]: event.target.value
    });
    console.log(uform);
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    console.log(form);
    const res = await mainservice.PostEmployee(form, user.PumpId)
    if (res.data != null) {
      console.log(res.data)
    } else {
      console.log(res)
    }
  }

  const onUpdateHandler = (event) => {
    event.preventDefault()
    console.log(uform)
    updateEmployee(uform)
  }

  async function updateEmployee(uform) {
    const res = await mainservice.updateEmployee(id, uform)
    console.log("updateId", id)
    if (res.data != null) {
      console.log(res.data, "Employee Details Updated")
    }
    else {
      console.log(res.data)
    }
  } 

  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  console.log(uform, "uformresult2details")
  // console.log(uform?.result2?.AadhaarId, "individual")
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async () => {
    if (id) {
      setEditMode(true)
      const res = await mainservice.getEmployeeById(id);
      setUform(res.data.result2)
      console.log(res.data.result2, "this");
    }
  }
  useEffect(() => {
    CheckEdit()
  }, []);

  switchSkin(skin)
  useEffect(() => {
    switchSkin(skin)
  }, [skin])
  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div style={{ marginTop: '50px' }} className="main p-4 p-lg-5">
        <ol className="breadcrumb fs-sm mb-2">
          <li className="breadcrumb-item">
            <Link to="#">dashboard</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Employee</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Employee
          </li>
        </ol>
        <h2 className="main-title">Add Employee</h2>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Create a New Employee</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>First Name</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="FirstName"
                    value={uform.FirstName}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="eg.100-25484"
                  />
                </Col>
                <Col md>
                  <h6>Last Name</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="LastName"
                    value={uform.LastName}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="eg.100-25484"
                  />
                </Col>
                <Col md>
                  <h6>Date of Birth</h6>
                </Col>
                <Col md>
                  <Form.Control name="DOB" value={uform.DOB} onChange={onChangeHandler} type="Date" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Phone Number</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="PhoneNumber"
                    value={uform.PhoneNumber}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="eg.100-25484"
                  />
                </Col>
                <Col md>
                  <h6>Email</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Email"
                    value={uform.Email}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="eg.100-25484"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col>
                  <h6>Temporary Address</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="TemporaryAddress"
                    value={uform.TemporaryAddress}
                    onChange={onChangeHandler}
                    as="textarea"
                    rows="3"
                    placeholder="Enter tagline"
                  />
                </Col>
                <Col>
                  <h6>Permanent Address</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="PermanentAddress"
                    value={uform.PermanentAddress}
                    onChange={onChangeHandler}
                    as="textarea"
                    rows="3"
                    placeholder="Enter tagline"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Aadhaar ID</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="AadhaarId"
                    value={uform.AadhaarId}
                    // value={uform.AadhaarId}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Petrol"
                  />
                </Col>
                <Col md>
                  <h6>Voter ID</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="VoterId"
                    value={uform.VoterId}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="600 Litre"
                  />
                </Col>
                <Col md>
                  <h6>PAN Card Number</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="PANCardNumber"
                    value={uform.PANCardNumber}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="35000/-"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>PF Number</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="PFNumber"
                    value={uform.PFNumber}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Petrol"
                  />
                </Col>
                <Col md>
                  <h6>ESI Number</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="ESINumber"
                    value={uform.ESINumber}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="600 Litre"
                  />
                </Col>
                <Col md>
                  <h6>UAN</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="UAN"
                    value={uform.UAN}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="35000/-"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Designation</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Designation"
                    value={uform.Designation}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Petrol"
                  />
                </Col>
                <Col md>
                  <h6>Department</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Department"
                    value={uform.Department}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="600 Litre"
                  />
                </Col>
                <Col md>
                  <h6>Salary</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Salary"
                    value={uform.Salary}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="35000/-"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
                  <h6>Note</h6>
                  <p>Temporibus autem quibusdam et aut officiis.</p>
                </Col>
                <Col md>
                  <Form.Control
                    name="Note"
                    value={uform.Note}
                    onChange={onChangeHandler}
                    as="textarea"
                    rows="3"
                    placeholder="Enter tagline"
                  />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Bank Details</Card.Title>
            <Card.Text>Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Account Number</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="AccountNumber"
                    value={uform.AccountNumber}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Petrol"
                  />
                </Col>
                <Col md>
                  <h6>IFSC Code</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="IFSCCode"
                    value={uform.IFSCCode}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="600 Litre"
                  />
                </Col>
                <Col md>
                  <h6>Branch</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Branch"
                    value={uform.Branch}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="35000/-"
                  />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Card className="card-settings mt-4">
          <Card.Body className="p-0">
            <div className="setting-item d-flex justify-content-end">
              {' '}
              <Col xs="12">
                {editMode ?
                  <div className="mt-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={onUpdateHandler} type="submit">Update</Button>
                  </div> :
                  <div className="mt-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                  </div>}

              </Col>{' '}
            </div>
          </Card.Body>
        </Card>

        <Footer />
      </div>
    </React.Fragment>
  )
}