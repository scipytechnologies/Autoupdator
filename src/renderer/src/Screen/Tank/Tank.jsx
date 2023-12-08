import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Nav, ProgressBar, Row, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import { dp3 } from '../../data/DashboardData'
import ReactApexChart from 'react-apexcharts'
import { useSelector, useDispatch } from 'react-redux'
import GaugeChart from 'react-gauge-chart'
import mainservice from '../../Services/mainservice'

export default function Tank() {
  const user = useSelector((state) => state.loginedUser)
  // console.log(user.PumpId);
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({})
  const [tanks,setTanks] = useState([])

  function handleClose() {
    setShow(false)
  }

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

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    console.log(form)
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    // console.log(form);
    const res = await mainservice.CreateTank({Tank:form}, user.PumpId)
    if (res.data != null) {
      GetTanks()
    } else {
      console.log(res)
    }
    handleClose()
  }

  async function GetTanks() {
    const res = await mainservice.GetTankDetails(user.PumpId)
    if (res.data != null) {
      setTanks(res.data.result2.Tank)
      console.log(tanks);
    } else {
      console.log(res)
    }
  }

  switchSkin(skin)
  useEffect(() => {
    switchSkin(skin)
    GetTanks()
  }, [skin])
  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tank
              </li>
            </ol>
            <h4 className="main-title mb-0">TANK</h4>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            {/* <Button variant="" className="btn-white d-flex align-items-center gap-2">
              <i className="ri-share-line fs-18 lh-1"></i>Share
            </Button>
            <Button variant="" className="btn-white d-flex align-items-center gap-2">
              <i className="ri-printer-line fs-18 lh-1"></i>Print
            </Button> */}
            <Button
              variant="primary"
              className="d-flex align-items-center gap-2"
              onClick={() => {
                setShow(true)
              }}
            >
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i> Add Tank
            </Button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Tank</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Tank Number</h6>
                </Col>
                <Col md>
                  <Form.Control name="TankNumber" onChange={onChangeHandler} type="text" />
                </Col>
                <Col md>
                  <h6>Volume</h6>
                </Col>
                <Col md>
                  <Form.Control name="Volume" onChange={onChangeHandler} type="text" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Product</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Product"
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="KL XX XXXX"
                  />
                </Col>
                <Col md>
                  <h6>Initial Quantity</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="Quantity"
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Agent 1"
                  />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
                  <h6>Note</h6>
                </Col>
                <Col md>
                  <Form.Control
                    name="note"
                    onChange={onChangeHandler}
                    as="textarea"
                    rows="3"
                    placeholder="Enter tagline"
                  />
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmitHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="g-3">
          {tanks.map((item, index) => (
            <Col xs="6" md="3" xl="3" key={index}>
              <Card className="card-one card-product">
                <Card.Body className="p-3 ">
                  <GaugeChart
                    id="gauge-chart5"
                    textColor={'#000000'}
                    needleColor={'gray'}
                    cornerRadius={0}
                    nrOfLevels={420}
                    arcsLength={[0.1, 0.2, 0.45, 0.15, 0.1]}
                    colors={['red', 'orange', 'yellow', 'green', 'red']}
                    percent={item.Quantity/item.Volume}
                    arcPadding={0.02}
                  />
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <div className="card-icon text-success">
                      <h5 style={{ fontWeight: 'bolder' }}>{item.Product}</h5>
                    </div>{' '}
                    <h6>TANK No.{index + 1}</h6>
                    <h6 className={'fw-normal ff-numerals mb-0 text-success'}>
                      {item.Quantity}
                    </h6>
                  </div>
                  <h2 className="card-value ls--1 text-secondary">{item.Volume}</h2>
                  {/* <label className="card-label fw-medium text-secondary ">{item.ProductCode}</label> */}
                  <span className="d-flex gap-1 fs-xs">
                    <span className={'d-flex align-items-center text-danger'}>
                      <span className="ff-numerals">{item.note}</span>
                      <i
                        className={
                          'success' === 'success' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'
                        }
                      ></i>
                    </span>
                    <span className="text-secondary">than last week</span>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  )
}
