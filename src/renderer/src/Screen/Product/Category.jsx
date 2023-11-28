import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Button, Card, Col, Nav, Form, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Category() {
  ///// Skin Switch /////
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
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product Management
              </li>
            </ol>
            <h4 className="main-title mb-0">Welcome to Dashboard</h4>
          </div>

          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <Button variant="white" className="btn-icon">
              <i className="ri-share-line fs-18 lh-1"></i>
            </Button>
            <Button variant="white" className="btn-icon">
              <i className="ri-printer-line fs-18 lh-1"></i>
            </Button>
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Generate
              <span className="d-none d-sm-inline"> Report</span>
            </Button>
          </div>
        </div>

        <Row className="g-3">
          <Col xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Categories</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <Row>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon ">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="4" md="4" lg="4" className="p-1">
                    <Card className="card-one">
                      <Card.Body className="p-3">
                        <div className="text-center p-3 bg-white rounded mb-3">
                          <Image
                            style={{ height: '150px' }}
                            src="https://www.petron.com/wp-content/uploads/2020/10/Blaze-Racing-BR450-Premium-Multi-Grade-20W-50.jpg"
                            fluid={true}
                            alt="..."
                          />
                        </div>

                        <h6 className="fw-semibold text-dark lh-4">Category Name</h6>
                        <p className="mb-3 fs-sm text-secondary">
                          this is a category short Description
                        </p>
                        <div className="d-flex justify-content-between">
                          <Button
                            style={{ marginRight: '5px' }}
                            as="a"
                            variant="primary"
                            className="btn-sm w-100"
                          >
                            View Products
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ri-delete-bin-fill"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4" style={{ height: '400px' }}>
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Create a New Category</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="setting-item ">
                  <Row className="g-2 align-items-center">
                    <Col md>
                      <div className="p-1">
                        <h6>Category Name</h6>
                      </div>
                      <Form.Control type="text" placeholder="eg.100-25484" />
                    </Col>
                  </Row>

                  <Row className="g-2 align-items-center">
                    <Col md>
                      <div className="p-1">
                        <h6>Description</h6>
                      </div>
                      <Form.Control type="textarea" placeholder="eg.100-25484" />
                    </Col>
                  </Row>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Picture</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Row className="g-2 align-items-center">
                    <Col className=' d-flex justify-content-end'>
                      <Button
                        variant="primary"
                        className="d-flex  align-items-center gap-2"
                      >
                        Create
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  )
}
