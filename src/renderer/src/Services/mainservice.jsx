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

export default {
  GetUserById,
  Login,
  Auth,
  CreateTank,
  GetTankDetails,
  PostDipStock,
  PostEmployee
}
