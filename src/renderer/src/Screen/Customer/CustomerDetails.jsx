import { React, useEffect, useState } from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Button, Card, Col,Form, Modal, Dropdown, ButtonGroup, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../Services/mainservice'
import { Grid } from 'gridjs-react'
import { _ } from 'gridjs-react'
import { useSelector, useDispatch } from 'react-redux'
import { pumpInfo } from '../../store/pump'
import Select from 'react-select'

function CustomerDetails() {
  const currentSkin = localStorage.getItem('skin-mode') ? 'dark' : ''
  const [skin, setSkin] = useState(currentSkin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pumpId = useSelector((state) => state.loginedUser.PumpId)
  const customerData = useSelector((state) => state.pumpstore.Customer)
  const user = useSelector((state) => state.loginedUser)
  console.log('data', customerData)
  console.log('pumpof', pumpId)

  async function getCustomer() {
    setData(customerData)
  }
  useEffect(() => {
    getCustomer()
  }, [])
  useEffect(() => {
    fetchPump(user.PumpId)
  }, [])

  async function deleteCustomer(pumpId, customerId) {
    try {
      const res = await mainservice.deleteCustomer(pumpId, customerId)
      if (res.data != null) {
        fetchPump(user.PumpId)
      } else {
        console.log('Deletion failed. Server response:', res)
      }
    } catch (error) {
      console.log('An error is occurred in deletion', error)
    }
  }

  const onDeleteHandler = (item) => {
    const customerId = item.CustomerId
    console.log('customerId', customerId)
    deleteCustomer(pumpId, customerId)
  }
  const fetchPump = async (id) => {
    const pumpdetails = await mainservice.getPumpById(id)
    if (pumpdetails.data != null) {
      dispatch(pumpInfo(pumpdetails.data.result2))
      console.log(pumpdetails.data.result2)
    }
  }
  const [show, setShow] = useState(false)
  const [cust, setCust] = useState({})
  async function getCustomerDataById(id) {
    const res = await mainservice.getCustomerById(id)
    if (res.data != null) {
      console.log(res.data)
      setCust(res.data.result2)
    } else {
      console.log(res.message)
    }
  }

  function handleOpen(id) {
    setShow(true)
    getCustomerDataById(id)
  }
  function handleClose() {
    setShow(false)
  }

  const [showcredit, setShowcredit] = useState(false) 
   const [showpay, setShowpay] = useState(false)
  function handleCreditOpen(id) {
    setShowcredit(true)
    // getCustomerDataById(id)
  }
  function handleCreditClose() {
    setShowcredit(false)
  }
  function handlePayOpen(id) {
    setShowpay(true)
    // getCustomerDataById(id)
  }
  function handlePayClose() {
    setShowpay(false)
  }
  const [form, setForm] = useState({})
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
    {/*////////////////////////////////////////////////////////////////// Add Credit Sales////////////////////////////////////////////////////////// // */}
    <Modal show={showcredit} onHide={handleCreditClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Credit Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="setting-item">
              <Row className="g-2 align-items-center">
             Arya Agency 22002
              </Row>
            </div>
        <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Vechicle Number</h6>
                </Col>
                <Col md>
                  <Form.Control name="VechicleNumber" onChange={onChangeHandler} type="text" />
                </Col>
                <Col md>
                  <h6>Product</h6>
                </Col>
                <Col md>
                <Select
                    isDisabled={false}
                    isSearchable={true}
                    name="Product"
                    // options={fuelData}
                    // onChange={ChangeSelect}
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Quantity</h6>
                </Col>
                <Col md>
                  <Form.Control name="Quantity" onChange={onChangeHandler} type="text" />
                </Col>
                <Col md>
                  <h6>Quantity</h6>
                  <h6>Price</h6>
                  <h6>Total Amount</h6>
                
                </Col>
                <Col md>
                <p>1220</p>
                <p>1220</p>
                <p>1220</p>
                
                </Col>
              </Row>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     {/*////////////////////////////////////////////////////////////////// Add Payment////////////////////////////////////////////////////////// // */}
          <Modal show={showpay} onHide={handlePayClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="setting-item">
              <Row className="g-2 align-items-center">
             Arya Agency 22002
              </Row>
            </div>
        <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Vechicle Number</h6>
                </Col>
                <Col md>
                  <Form.Control name="VechicleNumber" onChange={onChangeHandler} type="text" />
                </Col>
                <Col md>
                  <h6>Product</h6>
                </Col>
                <Col md>
                <Select
                    isDisabled={false}
                    isSearchable={true}
                    name="Product"
                    // options={fuelData}
                    // onChange={ChangeSelect}
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Quantity</h6>
                </Col>
                <Col md>
                  <Form.Control name="Quantity" onChange={onChangeHandler} type="text" />
                </Col>
                <Col md>
                  <h6>Quantity</h6>
                  <h6>Price</h6>
                  <h6>Total Amount</h6>
                
                </Col>
                <Col md>
                <p>1220</p>
                <p>1220</p>
                <p>1220</p>
                
                </Col>
              </Row>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/*////////////////////////////////////////////////////////////////// Show Customer Details////////////////////////////////////////////////////////// // */}
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" d-flex w-100">
            <div style={{ height: '280px' }} className=" d-flex w-100 border m-3">
              <Table borderless size="xl" className="mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Customer Name</th>
                    <td>Arya Agency pvt Ltd</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number</th>
                    <td>99658821552</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>hello@aryaagencypvtltd.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>Arya Agency pvt Ltd ,Plamodu Jn Trivandrum Kerala India PIN 682751</td>
                  </tr>
                  <tr>
                    <th scope="row">Office Number</th>
                    <td>9655854755</td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless size="xl" className="mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Credit limit</th>
                    <td>123</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Sales</th>
                    <td>123</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Duration</th>
                    <td>Month</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Duration</th>
                    <td>5th of the Month</td>
                  </tr>
                  <tr>
                    <th scope="row">OutStanding Balance</th>
                    <td>123</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className=" d-flex w-100">
            <div
              style={{ height: '300px' }}
              className=" d-flex justify-content-center w-100 border m-3"
            >
              <Table
                size="sm"
                style={{ minWidth: '100vh' }}
                bordered
                hover
                striped
                responsive
                className="mb-0"
              >
                <thead>
                  <tr>
                    <th scope="col"> Sl.No</th>
                    <th scope="col"> Date</th>
                    <th scope="col"> Vechicle Number</th>
                    <th scope="col"> Product</th>
                    <th scope="col"> Quantity</th>
                    <th scope="col"> Price</th>
                    <th scope="col"> Amount</th>
                    <th scope="col"> Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/11/2023</td>
                    <td>KL 01 BL 2245</td>
                    <td>HSD</td>
                    <td>120</td>
                    <td>107.96</td>
                    <td>12358</td>
                    <td>Fullfilled</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/CustomerDetails">Customer</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Customer Details
              </li>
            </ol>
            <h4 className="main-title mt-2 mb-0">Customer Details</h4>
          </div>

          <Button
            variant="primary"
            className="d-flex align-items-center gap-2"
            onClick={() => navigate('/dashboard/addCustomer')}
          >
            <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Customer
            <span className="d-none d-sm-inline"></span>
          </Button>
        </div>

        <Card>
          <Card.Body>
            <Grid
              data={customerData.map((item) => [
                item.CustomerId,
                item.CustomerName,
                item.MobileNo,
                item.CreditBalance,
                _(
                  <>
                    <ButtonGroup>
                      <Button size="sm" variant="warning" onClick={() => handleCreditOpen()}>
                        Credit Sale
                      </Button>
                      <Button style={{color:'white'}} size="sm" variant="primary" onClick={() => handlePayOpen()}>
                        Pay
                      </Button>
                    </ButtonGroup>
                  </>
                ),
                _(
                  <>
                    <ButtonGroup>
                      <Button size="sm" variant="white" onClick={() => handleOpen(item.CustomerId)}>
                        <i className="ri-eye-line"></i>
                      </Button>
                    </ButtonGroup>
                    <Button className="p-0" variant="white">
                      <Dropdown drop="end">
                        <Dropdown.Toggle variant="white" size="sm" className="btn-no-outline">
                          <i className="ri-more-2-fill" color="primary"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              navigate(`/dashboard/addCustomer/?id=${item.CustomerId}`)
                            }
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            style={{ color: 'red' }}
                            onClick={() => onDeleteHandler(item)}
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Button>
                  </>
                )
              ])}
              columns={[
                'Customer Id',
                'Customer Name',
                'Phone Number',
                'OutStanding Balance',
                'Sales',
                'Action'
              ]}
              search={true}
              pagination={true}
              sort={true}
              resizable={true}
              className={{
                table: 'table table-bordered mb-0'
              }}
            />
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </>
  )
}
export default CustomerDetails
