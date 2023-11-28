import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Nav, Card, Button, Table, Modal, Tab, ListGroup } from 'react-bootstrap'

import Footer from '../../layouts/Footer'
import HeaderMobile from '../../layouts/HeaderMobile'
import Avatar from '../../components/Avatar'

import img8 from '../../assets/img/img8.jpg'
import img9 from '../../assets/img/img9.jpg'
import img10 from '../../assets/img/img10.jpg'
import img11 from '../../assets/img/img11.jpg'
import img14 from '../../assets/img/img14.jpg'
import Header from '../../layouts/Header'

export default function PostSales() {
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

  const [fields2, setFields2] = useState([
    {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
  ])
  const [fields3, setFields3] = useState([
    {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
  ])
  const [fields4, setFields4] = useState([
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
  const handleAddField2 = () => {
    const newItem = {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
    setFields2([...fields2, newItem])
    calculateTotals()
  }
  const handleAddField3 = () => {
    const newItem = {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
    setFields3([...fields3, newItem])
    calculateTotals()
  }
  const handleAddField4 = () => {
    const newItem = {
      ItemNo: '',
      ItemName: '',
      Quantity: 0,
      Price: 0,
      TotalPrice: 0
    }
    setFields4([...fields4, newItem])
    calculateTotals()
  }

  const handleRemoveField = (index) => {
    const newFields = [...fields]
    newFields.splice(index, 1)
    setFields(newFields)
    calculateTotals()
  }

  const handleRemoveField2 = (index) => {
    const newFields = [...fields2]
    newFields.splice(index, 1)
    setFields2(newFields)
    calculateTotals()
  }
  const handleRemoveField3 = (index) => {
    const newFields = [...fields3]
    newFields.splice(index, 1)
    setFields3(newFields)
    calculateTotals()
  }
  const handleRemoveField4 = (index) => {
    const newFields = [...fields4]
    newFields.splice(index, 1)
    setFields4(newFields)
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
  const handleChangeField2 = (index, event) => {
    const { name, value } = event.target
    const newFields = [...fields2]
    newFields[index][name] = value

    // Calculate TotalPrice for the current row
    if (name === 'Quantity' || name === 'Price') {
      newFields[index].TotalPrice = (newFields[index].Quantity * newFields[index].Price).toFixed(2)
    }

    setFields2(newFields)
    calculateTotals()
    console.log(fields)
  }
  const handleChangeField3 = (index, event) => {
    const { name, value } = event.target
    const newFields = [...fields3]
    newFields[index][name] = value

    // Calculate TotalPrice for the current row
    if (name === 'Quantity' || name === 'Price') {
      newFields[index].TotalPrice = (newFields[index].Quantity * newFields[index].Price).toFixed(2)
    }

    setFields3(newFields)
    calculateTotals()
    console.log(fields)
  }

  const handleChangeField4 = (index, event) => {
    const { name, value } = event.target
    const newFields = [...fields4]
    newFields[index][name] = value

    // Calculate TotalPrice for the current row
    if (name === 'Quantity' || name === 'Price') {
      newFields[index].TotalPrice = (newFields[index].Quantity * newFields[index].Price).toFixed(2)
    }

    setFields4(newFields)
    calculateTotals()
    console.log(fields)
  }

  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(false)
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
            <Link to="#">Sales</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Sales
          </li>
        </ol>
        <h2 className="main-title">Add Sales</h2>

        <Card className="card-settings">
          {/* <Card.Header>
            <Card.Title>Create a New Sales</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header> */}
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Employee</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Choose Employee" />
                </Col>
                <Col md>
                  <h6>Shift</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Choose Shift" />
                </Col>
                <Col md>
                  <h6>Date</h6>
                </Col>
                <Col md>
                  <Form.Control type="Date" placeholder="Date" />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Nozzle Details</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2">
                <div>
                  <Row className="g-2 align-items-center">
                    <Col md>
                      <Table size="sm" borderless className="mb-0" hover>
                        <thead>
                          <tr>
                            <th scope="col">Nozzle</th>
                            <th scope="col">Opening</th>
                            <th scope="col">Closing</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
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
                <Col md="5"></Col>
                <Col md>
                  <h6>Total Sales Amount</h6>
                  <h5>2000 </h5>
                </Col>
                <Col md>
                  <h6>Amount Received</h6>
                  <div className='d-flex'>
                 
                    <h5 style={{marginRight:'200px'}}>10000000</h5>
                    <Button
                      variant="primary"
                      className="d-flex align-items-center gap-2"
                      onClick={() => setShow(true)}
                    >
                      Add Amount
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        {/* <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Tank Details</Card.Title>
            <Card.Text>Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2">
                <div>
                  <Row className="g-2 align-items-center">
                    <Col md>
                      <Table size="sm" borderless className="mb-0" hover>
                        <thead>
                          <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Opening</th>
                            <th scope="col">Closing</th>
                            <th scope="col">Qunatity</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fields2.map((field, index) => {
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
                                        onChange={(event) => handleChangeField2(index, event)}
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
                                        onChange={(event) => handleChangeField2(index, event)}
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
                                        onChange={(event) => handleChangeField2(index, event)}
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
                                        onChange={(event) => handleChangeField2(index, event)}
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
                                        onChange={(event) => handleChangeField2(index, event)}
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
                                        onClick={() => handleRemoveField2(index)}
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
                          <Button onClick={handleAddField2}>
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
        </Card> */}

        <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Financial Record</Card.Title>
            <Card.Text>Add initial financial information</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>{/* <h6>Credit Limit</h6> */}</Col>
                <Col md>{/* <Form.Control type="text" placeholder="Rs.15000/-" /> */}</Col>
                {/* <Col md>
                  <h6>Credit Balance</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Rs.0.0/-" />
                </Col> */}
                final Calculation
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

        <Modal show={show} onHide={handleClose} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Tank</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1">Cash</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Credit / Debit Cards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">UPI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <Card className="card-settings mt-4">
                        <Card.Header>
                          <Card.Title>Tank Details</Card.Title>
                          <Card.Text>
                            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.
                          </Card.Text>
                        </Card.Header>
                        <Card.Body>
                          <ListGroup>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>500 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>200 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>100 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>50 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>20 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>10 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>5 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>1 x </h5>
                              </div>
                              <Form.Control
                                style={{ width: '200px' }}
                                type="text"
                                placeholder="Rs.0.0/-"
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  width: '60px',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>=</h5>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  justifyContent: 'start',
                                  alignItems: 'center'
                                }}
                              >
                                <h5>2000 </h5>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex" style={{ padding: '5px' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '100%',
                                  justifyContent: 'end',
                                  alignItems: 'center',
                                  padding: '5px'
                                }}
                              >
                                <h5>Total : 3000/- </h5>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <Card className="card-settings mt-4">
                        <Card.Header>
                          <Card.Title>Tank Details</Card.Title>
                          <Card.Text>
                            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.
                          </Card.Text>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <div className="setting-item">
                            <Row className="g-2">
                              <div>
                                <Row className="g-2 align-items-center">
                                  <Col md>
                                    <Table size="sm" borderless className="mb-0" hover>
                                      <thead>
                                        <tr>
                                          <th scope="col">Machine</th>
                                          <th scope="col">Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {fields2.map((field, index) => {
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
                                                      onChange={(event) =>
                                                        handleChangeField2(index, event)
                                                      }
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
                                                      onChange={(event) =>
                                                        handleChangeField2(index, event)
                                                      }
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
                                                      onClick={() => handleRemoveField2(index)}
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
                                        <Button onClick={handleAddField2}>
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
                              <Col md="5"></Col>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <Card className="card-settings mt-4">
                        <Card.Header>
                          <Card.Title>Tank Details</Card.Title>
                          <Card.Text>
                            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.
                          </Card.Text>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <div className="setting-item">
                            <Row className="g-2">
                              <div>
                                <Row className="g-2 align-items-center">
                                  <Col md>
                                    <Table size="sm" borderless className="mb-0" hover>
                                      <thead>
                                        <tr>
                                          <th scope="col">UPI provider</th>
                                          <th scope="col">Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {fields3.map((field, index) => {
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
                                                      onChange={(event) =>
                                                        handleChangeField3(index, event)
                                                      }
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
                                                      onChange={(event) =>
                                                        handleChangeField3(index, event)
                                                      }
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
                                                      onClick={() => handleRemoveField3(index)}
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
                                        <Button onClick={handleAddField3}>
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
                              <Col md="5"></Col>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <Card className="card-settings mt-4">
                        <Card.Header>
                          <Card.Title>Tank Details</Card.Title>
                          <Card.Text>
                            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.
                          </Card.Text>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <div className="setting-item">
                            <Row className="g-2">
                              <div>
                                <Row className="g-2 align-items-center">
                                  <Col md>
                                    <Table size="sm" borderless className="mb-0" hover>
                                      <thead>
                                        <tr>
                                          <th scope="col">Method</th>
                                          <th scope="col">Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {fields4.map((field, index) => {
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
                                                      onChange={(event) =>
                                                        handleChangeField4(index, event)
                                                      }
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
                                                      onChange={(event) =>
                                                        handleChangeField4(index, event)
                                                      }
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
                                                      onClick={() => handleRemoveField4(index)}
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
                                        <Button onClick={handleAddField4}>
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
                              <Col md="5"></Col>
                              <Col md>
                                <h6>Total Sales Amount</h6>
                                <h5>2000 </h5>
                              </Col>
                              <Col md>
                                <h6>Amount Received</h6>
                                <h5>0 </h5>
                              </Col>
                            </Row>
                          </div>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ width: '80%' }}>
              <ListGroup>
                <ListGroup.Item>
                  Total Sales Amount :20000/- <br />
                  Total Received Amount :20000/- <br />
                  Excess Amount :20000/- <br />
                </ListGroup.Item>
              </ListGroup>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer />
      </div>
    </React.Fragment>
  )
}
