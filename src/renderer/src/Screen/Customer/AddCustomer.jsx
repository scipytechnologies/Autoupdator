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

export default function PostCustomer() {
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
            <Link to="#">Customer</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Customer
          </li>
        </ol>
        <h2 className="main-title">Add Customer</h2>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Create a New Customer</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Customer Name</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Enter Customer Name" />
                </Col>
                <Col md>
                  <h6>Phone Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Enter Phone Number " />
                </Col>
                <Col md>
                  <h6>GSTIN</h6>
                </Col>
                <Col md>
                <Form.Control type="text" placeholder="Enter GST Number" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Office Phone Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Enter Office Contact Number " />
                </Col>
                <Col md>
                  <h6>Email</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder=" " />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col>
                  <h6>Permanent Address</h6>
                  {/* <p>Temporibus autem quibusdam et aut officiis.</p> */}
                </Col>
                <Col md>
                  <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
                  <h6>Note</h6>
                  <p>Add more information here</p>
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
            <Card.Title>Financial Record</Card.Title>
            <Card.Text>Add initial financial information</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Credit Limit</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Rs.15000/-" />
                </Col>
                <Col md>
                  <h6>Credit Balance</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Rs.0.0/-" />
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
