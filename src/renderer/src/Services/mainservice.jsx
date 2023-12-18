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

//////////////////////////////////////////////////////////////////////////

async function getCustomer() {
  const response = await apicall.apicall('get',9000,'customer/getcustomer')
  return response
}
//////////////////////////////////////////////////////////
async function getEmployee() {
  const response = await apicall.apicall('get',9000,'employee/getemployee')
  return response
}

async function updateEmployee() {
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
///////////////////////////////////////////////////////
async function getInventoryManagement() {
  const response = await apicall.apicall('get',9000,'InventoryManagementRouter/getInventoryManagement')
  return response
}

async function getProduct() {
  const response = await apicall.apicall('get',9000,'ProductRouter/getProduct')
  return response
}

async function getSalesAndBilling() {
  const response = await apicall.apicall('get',9000,'SalesAndBilling/getSalesAndBilling')
  return response
}

async function getDipStock(id) {
  const response = await apicall.apicall('get',9000,`DipStockRouter/getDipStock/${id}`)
  return response
}

async function getPump() {
  const response = await apicall.apicall('get',9000,'pump/getpump')
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
  deleteEmployee,
}
