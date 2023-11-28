import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Nav, ProgressBar, Row, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import { dp3 } from '../../data/DashboardData'
import ReactApexChart from 'react-apexcharts'
import { useSelector, useDispatch } from 'react-redux'
import GaugeChart from 'react-gauge-chart'

export default function Tank() {
  const user = useSelector((state) => state.loginedUser)
  console.log(user)
  const [show, setShow] = useState(false)

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

  switchSkin(skin)
  useEffect(() => {
    switchSkin(skin)
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
                  <Form.Control type="text" placeholder="KL XX XXXX" />
                </Col>
                <Col md>
                  <h6>Volume</h6>
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
                  <Form.Control type="text" placeholder="KL XX XXXX" />
                </Col>
                <Col md>
                  <h6>Initial Quantity</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Agent 1" />
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
        <Row className="g-3">
          {[
            {
              icon: 'ri-shopping-bag-fill',
              product: 'MS',
              percent: {
                color: 'success',
                amount: 0.74
              },
              value: '14,803.80',
              label: 'Total Sales',
              last: {
                color: 'success',
                amount: '2.3%'
              }
            },
            {
              icon: 'ri-wallet-3-fill',
              product: 'HSD',
              percent: {
                color: 'danger',
                amount: 0.64
              },
              value: '8,100.63',
              label: 'Total Expenses',
              last: {
                color: 'danger',
                amount: '0.5%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'HSD',
              percent: {
                color: 'danger',
                amount: 0.38
              },
              value: '23,480',
              label: 'Total Products',
              last: {
                color: 'danger',
                amount: '0.2%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'MS',
              percent: {
                color: 'success',
                amount: 0.14
              },
              value: '18,060',
              label: 'Products Sold',
              last: {
                color: 'success',
                amount: '5.8%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'XP',
              percent: {
                color: 'success',
                amount: 0.344
              },
              value: '18,060',
              label: 'Products Sold',
              last: {
                color: 'success',
                amount: '5.8%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'SPD',
              percent: {
                color: 'success',
                amount: 0.44
              },
              value: '18,060',
              label: 'Products Sold',
              last: {
                color: 'success',
                amount: '5.8%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'CNG',
              percent: {
                color: 'success',
                amount: 0.2
              },
              value: '18,060',
              label: 'Products Sold',
              last: {
                color: 'success',
                amount: '5.8%'
              }
            },
            {
              icon: 'ri-shopping-basket-fill',
              product: 'OIL',
              percent: {
                color: 'success',
                amount: 0.9
              },
              value: '18,060',
              label: 'Products Sold',
              last: {
                color: 'success',
                amount: '5.8%'
              }
            }
          ].map((item, index) => (
            <Col xs="6" md="3" xl="3" key={index}>
              <Card  className="card-one card-product">
                <Card.Body className="p-3 ">
                  <GaugeChart 
                    id="gauge-chart5"
                    textColor={'#000000'}
                    needleColor={'gray'}
                    cornerRadius={0}
                    nrOfLevels={420}
                    arcsLength={[0.1, 0.2, 0.45, 0.15, 0.1]}
                    colors={['red', 'orange', 'yellow', 'green', 'red']}
                    percent={item.percent.amount}
                    arcPadding={0.02}
                  />
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <div className="card-icon text-success">
                      <h5 style={{ fontWeight: 'bolder' }}>{item.product}</h5>
                    </div>{' '}
                    <h6>TANK No.{index + 1}</h6>
                    <h6 className={'fw-normal ff-numerals mb-0 text-' + item.percent.color}>
                      {item.percent.amount}
                    </h6>
                  </div>
                  <h2 className="card-value ls--1 text-secondary">{item.value}</h2>
                  <label className="card-label fw-medium text-secondary ">{item.label}</label>
                  <span className="d-flex gap-1 fs-xs">
                    <span className={'d-flex align-items-center text-' + item.last.color}>
                      <span className="ff-numerals">{item.last.amount}</span>
                      <i
                        className={
                          item.last.color === 'success' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'
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
