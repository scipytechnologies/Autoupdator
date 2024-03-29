import { React, useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Card, Offcanvas, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import mainservice from "../../Services/mainservice";
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import { useSelector } from "react-redux";

function InventoryDetails() {
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [data, setData] =  useState([])
    const inventoryData = useSelector((state) => state.pumpstore.InventoryManagement)
    const pumpId = useSelector((state) => state.loginedUser.PumpId)

    async function getInventoryManagement() {
        setData(inventoryData)
    }
    useEffect(() => {
        getInventoryManagement()
    }, [])

    async function deleteInventoryManagement(pumpId,inventoryId) {
        const res = await mainservice.deleteInventoryManagement(pumpId,inventoryId);
        if(res.data != null) {
            console.log("deleted");
            getInventoryManagement()
        }
        else{
            console.log(res.message);
        }
    }

    const onDeleteHandler = (item) => {
        const inventoryId = item.InventoryManagementId
        console.log("invenId",inventoryId);
        deleteInventoryManagement(pumpId,inventoryId);
    }

    return (

        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/InventoryDetails">Inventory</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Inventory Details</li>
                        </ol>
                        <h4 className="main-title mt-2 mb-0">Inventory Details</h4>
                    </div>

                    <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/addinventory')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Inventory<span className="d-none d-sm-inline"></span>
                    </Button>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={inventoryData.map((item) => [
                                item.InventoryManagementId,
                                item.InventoryManagementName,
                                _(
                                    <>
                                        <ButtonGroup>
                                            <Button size="sm" variant='white' onClick={() => handleCanvas()}><i className='ri-eye-line'></i></Button>
                                            <Button className='p-0' variant="white">


                                                <Dropdown drop="end">
                                                    <Dropdown.Toggle variant='white' size="sm" className='btn-no-outline'>
                                                        <i className='ri-more-2-fill' color="primary"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => navigate(`/dashboard/addinventory/?id=${item.InventoryManagementId}`)}>Edit</Dropdown.Item>
                                                        <Dropdown.Item style={{ color: 'red' }} onClick={() => onDeleteHandler(item)}>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Button>
                                        </ButtonGroup>

                                    </>

                                )
                            ])
                            }
                            columns={['Inventory Management Id', 'Inventory Management Name', 'Action']}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                    </Card.Body>                 
                </Card>
                <Footer />
            </div>
        </>
    )
}
export default InventoryDetails