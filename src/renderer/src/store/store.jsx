import { configureStore } from '@reduxjs/toolkit'
import loginedUser from './loginedUser'
import pumpstore from './pump'

export default configureStore({
  reducer: {
    loginedUser: loginedUser,
    pumpstore : pumpstore  
  }
})
