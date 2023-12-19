import apicall from './interceptor'

async function Login(data) {
  // console.log(data);
  const response = await apicall.apicall('post', 9000, 'user/signin', data)
  return response
}
async function Auth(data) {
  const response = await apicall.apicall('post', 9000, 'user/auth', data)
  return response
}
async function GetUserById(id) {
  const response = await apicall.apicall('get', 9000, `user/getuser/${id}`)
  return response
}
async function CreateTank(data, id) {
  const response = await apicall.apicall('put', 9000, `pump/createTank/${id}`, data)
  return response
}

async function GetTankDetails(id) {
  const response = await apicall.apicall('get', 9000, `pump/getpumpbyid/${id}`)
  return response
}

async function PostDipStock(data) {
  const response = await apicall.apicall('post',9000,`DipStockRouter/createDipStock`,data)
  return response
}

async function PostEmployee(data,id) {
  const response = await apicall.apicall('post',9000,`employee/createemployee/${id}`,data)
  return response
}

////////////////////////////////{Customer}//////////////////////////////////////////
async function createCustomer(data) {
  const response = await apicall.apicall('post',9000,'customer/createemployee',data)
  return response
}
async function getCustomer() {
  const response = await apicall.apicall('get',9000,'customer/getcustomer')
  return response
}

async function getCustomerById(id) {
  const response = await apicall.apicall('get',9000,`customer/getcustomerbyid/${id}`)
  return response
}

async function updateCustomer(id,data) {
  const response = await apicall.apicall('put',9000,`customer/updatecustomer/${id}`,data)
  return response
}

async function deleteCustomer(id) {
  const response = await apicall.apicall('delete',9000,`customer/deletecustomer/${id}`)
  return response
}
//////////////////////////{Employee}////////////////////////////////
async function getEmployee() {
  const response = await apicall.apicall('get',9000,'employee/getemployee')
  return response
}

async function updateEmployee(id, data) {
  const response = await apicall.apicall('put',9000,`employee/updateemployee/${id}`,data)
  return response
}

async function getEmployeeById(id) {
  const response = await apicall.apicall('get',9000,`employee/getemployeebyid/${id}`)
  return response
}

async function deleteEmployee(id) {
  const response = await apicall.apicall('delete',9000,`employee/deleteemployee/${id}`)
  return response
}
/////////////////////{inventory}//////////////////////////////////
async function getInventoryManagement() {
  const response = await apicall.apicall('get',9000,'InventoryManagementRouter/getInventoryManagement')
  return response
}
async function createInventoryManagement(data) {
  const response = await apicall.apicall('post',9000,'InventoryManagementRouter/createInventoryManagement',data)
  return response
}
async function getInventoryManagementById(id) {
  const response = await apicall.apicall('get',9000,`InventoryManagementRouter/getInventoryManagementById/${id}`)
  return response
}

async function updateInventoryManagement(id,data) {
  const response = await apicall.apicall('put',9000,`InventoryManagementRouter/updateInventoryManagement/${id}`,data)
  return response
}

async function deleteInventoryManagement(id) {
  const response = await apicall.apicall('delete',9000,`InventoryManagementRouter/deleteInventoryManagement/${id}`)
  return response
}
///////////////////////{Product}////////////////////////////////////////
async function createProduct(data) {
  const response = await apicall.apicall('post',9000,'ProductRouter/createProduct',data)
  return response
}

async function getProduct() {
  const response = await apicall.apicall('get',9000,'ProductRouter/getProduct')
  return response
}
async function getProductById(id) {
  const response = await apicall.apicall('get',9000,`ProductRouter/getProductById/${id}`)
  return response
}

async function updateProduct(id,data) {
  const response = await apicall.apicall('put',9000,`ProductRouter/updateProduct/${id}`,data)
  return response
}

async function deleteProduct(id) {
  const response = await apicall.apicall('delete',9000,`ProductRouter/deleteProduct/${id}`)
  return response
}
//////////////////////////////{Sales}////////////////////////////////////////
async function createSalesAndBilling(data) {
  const response = await apicall.apicall('post',9000,'SalesAndBilling/createSalesAndBilling',data)
  return response
}
async function getSalesAndBilling() {
  const response = await apicall.apicall('get',9000,'SalesAndBilling/getSalesAndBilling')
  return response
}
async function getSalesAndBillingById(id) {
  const response = await apicall.apicall('get',9000,`SalesAndBilling/getSalesAndBillingById/${id}`)
  return response
}

async function updateSalesAndBilling(id,data) {
  const response = await apicall.apicall('put',9000,`SalesAndBilling/updateSalesAndBilling/${id}`,data)
  return response
}

async function deleteSalesAndBilling(id) {
  const response = await apicall.apicall('delete',9000,`SalesAndBilling/deleteSalesAndBilling/${id}`)
  return response
}
////////////////////////{Dipstock}////////////////////////////
async function createDipStock(data) {
  const response = await apicall.apicall('post',9000,'DipStockRouter/createDipStock',data)
  return response
}
async function getDipStock(id) {
  const response = await apicall.apicall('get',9000,`DipStockRouter/getDipStock/${id}`)
  return response
}
async function getDipStockById(id) {
  const response = await apicall.apicall('get',9000,`DipStockRouter/getDipStockById/${id}`)
  return response
}

async function updateDipStock(id,data) {
  const response = await apicall.apicall('put',9000,`DipStockRouter/updateDipStock/${id}`,data)
  return response
}

async function deleteDipStock(id) {
  const response = await apicall.apicall('delete',9000,`DipStockRouter/deleteDipStock/${id}`)
  return response
}
/////////////////////////{Pump}//////////////////////////////////
async function createPump(data) {
  const response = await apicall.apicall('post',9000,'pump/createpump',data)
  return response
}
async function getPump() {
  const response = await apicall.apicall('get',9000,'pump/getpump')
  return response
}
async function getPumpById(id) {
  const response = await apicall.apicall('get',9000,`pump/getpumpbyid/${id}`)
  return response
}

async function updatePump(id,data) {
  const response = await apicall.apicall('put',9000,`pump/updatepump/${id}`,data)
  return response
}
async function createFuel(id,data) {
  const response = await apicall.apicall('put',9000,`pump/createFuel/${id}`,data)
  return response
}

async function deletePump(id) {
  const response = await apicall.apicall('delete',9000,`pump/deletepump/${id}`)
  return response
}


export default {
  GetUserById,
  Login,
  Auth,
  CreateTank,
  GetTankDetails,
  PostDipStock,
  PostEmployee,getCustomer,getEmployee,getInventoryManagement,getProduct,getSalesAndBilling,getDipStock,getPump,updateEmployee,getEmployeeById,
  deleteEmployee,createCustomer,getCustomerById,updateCustomer,deleteCustomer,createInventoryManagement,getInventoryManagementById,updateInventoryManagement,deleteInventoryManagement,
  createProduct,getProductById,updateProduct,deleteProduct,createSalesAndBilling,getSalesAndBillingById,updateSalesAndBilling,deleteSalesAndBilling,createDipStock,
  getDipStockById,updateDipStock,deleteDipStock,createPump,getPumpById,updatePump,createFuel,deletePump
}
