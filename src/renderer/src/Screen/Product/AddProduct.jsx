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

export default function PostProduct() {
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
      <div style={{ marginTop: '50px' }} className="main p-4 p-lg-5">
        <ol className="breadcrumb fs-sm mb-2">
          <li className="breadcrumb-item">
            <Link to="#">dashboard</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Product</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Product
          </li> 
        </ol>
        <h2 className="main-title">Add Product</h2>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Create a New Product</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>SKU</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Product Name</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
                <Col md>
                  <h6>Category</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="eg.100-25484" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col>
                  <h6>Description</h6>
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
                  <h6>Brand</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>Tax</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="600 Litre" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Price</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Petrol" />
                </Col>
                <Col md>
                  <h6>Margin</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="35000/-" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                <h6>Preview</h6>
                <p> Product Name : <b> Product</b></p>
                <p> Category : <b> Category</b></p>
                <p> Sales Price : <b> Rs.1200</b></p>
                <p> Profit : <b style={{color:'green'}}> +70</b></p>
                </Col>
                <Col md className='d-flex justify-content-end'>
                  <Form.Group controlId="formFile" className="mb-3 w-50">
                    <Form.Label>Upload Picture</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
  
          </Card.Body>
        </Card>


        <Card className="card-settings mt-4">
          <Card.Body className="p-0">
            <div className="setting-item d-flex justify-content-end">
              <Button variant="primary" className="d-flex align-items-center gap-2">
                <i className="ri-bar-chart-2-line fs-18 lh-1"></i> Save
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Footer />
      </div>
    </React.Fragment>
  )
}
