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

export default function DipStock() {
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
            <Link to="#">Pages</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">User Pages</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Settings
          </li>
        </ol>
        <h2 className="main-title">Settings</h2>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Dip Stock Update</Card.Title>
            <Card.Text>Create your new Dip Stock Updates</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Date</h6>
                </Col>
                <Col md>
                  <Form.Control type="Date" />
                </Col>
                <Col md>
                  <h6>Invoice Number</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Vehicle No.</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="KL XX XXXX" />
                </Col>
                <Col md>
                  <h6>Agent Name</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Agent 1" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Product</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>Quantity</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
                <Col md>
                  <h6>Price</h6>
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
            <Card.Title>Tank Details</Card.Title>
            <Card.Text>Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2">
                <div>
                  <Row className="g-2 align-items-center">
                    <Col md="5">
                      <h6>Tank Distribution</h6>
                      <p>Neque porro quisquam est qui dolorem.</p>
                    </Col>
                    <Col md>
                      <Table size="sm" borderless className="mb-0" hover>
                        <thead>
                          <tr>
                            <th scope="col">Tank</th>
                            <th scope="col">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fields.map((field, index) => {
                            return (
                              <tr>
                                <td scope="row">
                                  <div className="mt-2">
                                    <div key={index}>
                                      <Form.Control
                                        type="Number"
                                        name="ItemNo"
                                        value={field.ItemNo}
                                        placeholder="Item No"
                                        onChange={(event) => handleChangeField(index, event)}
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="mt-2">
                                    <div key={index}>
                                      <Form.Control
                                        type="text"
                                        name="ItemName"
                                        value={field.ItemName}
                                        placeholder="Item Name"
                                        onChange={(event) => handleChangeField(index, event)}
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="mt-2">
                                    <div className="input-group ">
                                      <Button
                                        className="ms-2"
                                        variant="danger"
                                        onClick={() => handleRemoveField(index)}
                                      >
                                        <i class="ri-delete-bin-5-fill"></i>
                                      </Button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                        <div className="mt-3">
                          <Button onClick={handleAddField}>
                            <i class="ri-add-circle-fill"></i> Add Item
                          </Button>
                        </div>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
            
                </Col>
                <Col md>
                <h6>Total Quantity Filled</h6>
                  <h5>2000 </h5>
                </Col>
                <Col md>
                <h6>Remaining Quantity</h6>
                <h5>0 </h5>
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
