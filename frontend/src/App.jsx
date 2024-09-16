import React from "react"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import SignUp from "./pages/Authentication/SignUp"
import SignIn from "./pages/Authentication/SignIn"
import ForgotPassword from "./pages/Authentication/ForgotPassword"
import ResetPassword from "./pages/Authentication/Reset Passwod"
import OTPPage from "./pages/Authentication/OTP_Page"


function App() {

  const router = createBrowserRouter([
    {
      path:"",
      element:<SignIn/>
    },

    {
      path : "/signin",
      element :<SignIn/>
    },
    {
      path : "/signup",
      element :<SignUp/>
    },
    {
      path:"/otp",
      element:<OTPPage/>
    },
    {
      path:"/forgot-password",
      element:<ForgotPassword/>
    },
    {
      path:"/reset-password",
      element:<ResetPassword/>
    }
  ]
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
