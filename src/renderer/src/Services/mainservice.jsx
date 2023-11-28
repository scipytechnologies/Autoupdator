import apicall from './interceptor'

async function Login(data) {
  // console.log(data);
  const response = await apicall.apicall('post', 9000, 'user/signin', data)
  return response
}
async function Auth(data) {
  // console.log(data);
  const response = await apicall.apicall("post", 9000, "user/auth", data);
  return response;
}
async function GetUserById(id) {
  const response = await apicall.apicall("get", 9000, `user/getuser/${id}`)
  return response
}

export default {
  GetUserById,Login,Auth
}
   