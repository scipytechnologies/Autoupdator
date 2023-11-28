import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Nav, Card, Button, Table } from 'react-bootstrap'
import Footer from '../../layouts/Footer'
import HeaderMobile from '../../layouts/HeaderMobile'
import Avatar from '../../components/Avatar'

import img8 from '../../assets/img/img8.jpg'
import img9 from '../../assets/img/img9.jpg'
import img10 from '../../assets/img/img10.jpg'
import img11 from '../../assets/img/img11.jpg'
import img14 from '../../assets/img/img14.jpg'
import Header from '../../layouts/Header'

export default function PostEmployee() {
  const currentSkin = localStorage.getItem('skin-mode') ? 'dark' : ''
  const [skin, setSkin] = useState(currentSkin)

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

  const [fields, setFields] = useState([
    {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
  ])
  function calculateTotals() {
    console.log()
  }

  const handleAddField = () => {
    const newItem = {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
    setFields([...fields, newItem])
    calculateTotals()
  }

  const handleRemoveField = (index) => {
    const newFields = [...fields]
    newFields.splice(index, 1)
    setFields(newFields)
    calculateTotals()
  }

  const handleChangeField = (index, event) => {
    const { name, value } = event.target
    const newFields = [...fields]
    newFields[index][name] = value

    // Calculate TotalPrice for the current row
    if (name === 'Quantity' || name === 'Price') {
      newFields[index].TotalPrice = (newFields[index].Quantity * newFields[index].Price).toFixed(2)
    }

    setFields(newFields)
    calculateTotals()
    console.log(fields)
  }

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
                <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
                <Col md>
                  <h6>Last Name</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
                <Col md>
                  <h6>Date of Birth</h6>
                </Col>
                <Col md>
                <Form.Control type="Date" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
              <Col md>
                  <h6>Phone Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
                <Col md>
                  <h6>Email</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
            <Row className="g-2">
                <Col >
                  <h6>Temporary Address</h6>    
                  <p>Temporibus autem quibusdam et aut officiis.</p>
                </Col>
                <Col md>
                  <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                </Col>
                <Col>
                  <h6>Permanent Address</h6>
                  <p>Temporibus autem quibusdam et aut officiis.</p>
                </Col>
                <Col md>
                  <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Aadhaar ID</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>Voter ID</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
                <Col md>
                  <h6>PAN Card Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="35000/-" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>PF Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>ESI Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
                <Col md>
                  <h6>UAN</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="35000/-" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Designation</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>Department</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
                <Col md>
                  <h6>Salary</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="35000/-" />
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
                  <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
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
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>IFSC Code</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
                <Col md>
                  <h6>Branch</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="35000/-" />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Card className="card-settings mt-4">
          <Card.Body className="p-0">
            <div className="setting-item d-flex justify-content-end">
              {' '}
              <Button variant="primary" className="d-flex align-items-center gap-2">
                <i className="ri-bar-chart-2-line fs-18 lh-1"></i> Save
              </Button>{' '}
            </div>
          </Card.Body>
        </Card>

        <Footer />
      </div>
    </React.Fragment>
  )
}
