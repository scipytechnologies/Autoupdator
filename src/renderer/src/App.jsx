import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import NotFound from './pages/NotFound'
import mainservice from './Services/mainservice'

import publicRoutes from './routes/PublicRoutes'
import protectedRoutes from './routes/ProtectedRoutes'
import { useSelector, useDispatch } from 'react-redux'
import { isConnected, loggeduser, setUserProfile, setRole } from './store/loginedUser'
import Redirect from './routeProtection/ForceRedirect'
import ProtectedRoute from './routeProtection/ProtectedRoute'

// import css
import './assets/css/remixicon.css'

// import scss
import './scss/style.scss'

// set skin on load
window.addEventListener('load', function () {
  let skinMode = localStorage.getItem('skin-mode')
  let HTMLTag = document.querySelector('html')

  if (skinMode) {
    HTMLTag.setAttribute('data-skin', skinMode)
  }
})

export default function App() {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.loginedUser.isConnected)
  async function Auth() {
    if (typeof window !== 'undefined') {
      const token = JSON.parse(localStorage.getItem('user-token'))
      if (token) {
        const data = { token: token }
        const res = await mainservice.Auth(data)
        if (res.data != null) {
          console.log(res.data)
          dispatch(loggeduser(res.data._id))
          dispatch(isConnected())
          dispatch(setRole(res.data.role))
          fetchData(res.data._id)
        } else {
          console.log('error')
        }
      } else {
        // setIsconnected(false);
        // dispatch(isNotConnected())
      }
    }
  }

  const fetchData = async (id) => {
    const userData = await mainservice.GetUserById(id)
    if (userData.data != null) {
      console.log(userData.data, 'userData')
      const newUser = {
        firstName: userData.data.firstName,
        lastName: userData.data.LastName,
        // pumpID: userData.data.pumpid,
        email: userData.data.email
      }
      dispatch(setUserProfile(newUser))
      // console.log(user, 'state')
    } else {
      console.log('user data not found')
    }

    // const company = await mainservice.GetCompanyById(userData.data.Company)
    // if (company.data != null) {
    //   console.log('companyData', company.data);
    //   const newCompany = {
    //     CompanyName: company.data.CompanyName,
    //     Email: company.data.Email,
    //     PhoneNo: company.data.PhoneNo,
    //     TagLine: company.data.TagLine,
    //     CompanyDescription: company.data.CompanyDescription,
    //     Address: company.data.Address,
    //     Industry: company.data.Industry,
    //     NoOFEmployee: company.NoOFEmployee,
    //     EntityType: company.EntityType
    //   }
    //   dispatch(setCompanyProfile(newCompany))
    //   console.log(companyProfile, " Companystate");
    // }
    // else {
    //   console.log("company feching errror");
    // }

    // const index = await mainservice.GetIndexbyId(company.data.IndexId)
    // if (index.data != null) {
    //   console.log(index.data, "index");
    //   const newIndex = {
    //     CrmID: index.data.CrmID,
    //     AppointmentID: index.data.AppointmentID,
    //     OpportunityID: index.data.OpportunityID,
    //     EmployeeID: index.data.EmployeeID,
    //     InventoryID: index.data.InventoryID,
    //     InvoiceID: index.data.InvoiceID,
    //     PRJID: index.data.PRJID,
    //     RFQID: index.data.RFQID,
    //     PurchaseitemID: index.data.PurchaseitemID,
    //     PurchaseorderID: index.data.PurchaseorderID,
    //     PurchaseID: index.data.PurchaseID,
    //     SalesID: index.data.SalesID,
    //     VendorID: index.data.VendorID,
    //     NotificationID: index.data.NotificationID,
    //     PurchaseRequisitionID: index.data.PurchaseRequisitionID
    //   }
    //   dispatch(setindex(newIndex))
    //   console.log(indexData, "index from state");
    // }
    // else {
    //   console.log("something wrong with index fetching");
    // }
  }

  useEffect(() => {
    Auth()
    // console.log(id);
  }, [])
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          {protectedRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<ProtectedRoute user={active}>{route.element} </ProtectedRoute>}
                key={index}
              />
            )
          })}
        </Route>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={<Redirect user={active}> {route.element} </Redirect>}
              key={index}
            />
          )
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}