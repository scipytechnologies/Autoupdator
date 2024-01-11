import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Nav, Card, Button, Table } from 'react-bootstrap'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import mainservice from '../../Services/mainservice'

export default function PostInventory() {
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
    const res = await mainservice.createInventoryManagement(form, user.PumpId)
    console.log("pumpid",user.PumpId)
    if (res.data != null) {
      console.log(res.data)
    } else {
      console.log(res)
    }
  }

  const onUpdateHandler = (event) => {
    event.preventDefault()
    console.log(uform)
    updateInventoryManagement(uform)
  }

  async function updateInventoryManagement(uform) {
    const res = await mainservice.updateInventoryManagement(id, uform)
    console.log("updateId", id)
    if (res.data != null) {
      console.log(res.data, "Inventory Details Updated")
    }
    else {
      console.log(res.data)
    }
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  console.log(uform, "uformresult2details")
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async () => {
    if (id) {
      setEditMode(true)
      const res = await mainservice.getInventoryManagementById(id);
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
            <Link to="#">Inventory</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Inventory
          </li>
        </ol>
        <h2 className="main-title">Add Inventory</h2>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Create a New Inventory</Card.Title>
            <Card.Text>short Description</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>SKU</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="SKUNo" value={uform.SKUNo} placeholder="eg.100-25484" onChange={onChangeHandler}/>
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Item Name</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="ItemName" value={uform.ItemName} placeholder="eg.100-25484" onChange={onChangeHandler}/>
                </Col>
                <Col md>
                  <h6>Brand</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="Brand" value={uform.Brand} placeholder="Petrol" onChange={onChangeHandler} />
                </Col>
                <Col md>
                  <h6>Category</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="ItemCategory" value={uform.ItemCategory} placeholder="eg.100-25484" onChange={onChangeHandler} />
                </Col>
              </Row>
            </div>

            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md>
                  <h6>Current Stock</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="CurrentStock" value={uform.CurrentStock} placeholder="600 Litre" onChange={onChangeHandler}/>
                </Col>
                <Col md>
                  <h6>Price</h6>
                </Col>
                <Col md>
                  <Form.Control type="text" name="Price" value={uform.Price} placeholder="35000/-" onChange={onChangeHandler} />
                </Col>
                <Col md>
                  <h6>Expiry Date</h6>
                </Col>
                <Col md>
                <Form.Control type="Date" name="ExpiryDate" value={uform.ExpiryDate} placeholder="Date" onChange={onChangeHandler}/>
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
                  <Form.Control as="textarea" rows="3" name="Description" value={uform.Description} placeholder="Enter tagline" onChange={onChangeHandler}/>
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