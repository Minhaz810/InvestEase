import React from "react"
import {createBrowserRouter} from 'react-router-dom'
import SignUp from "./pages/Authentication/SignUp"
import SignIn from "./pages/Authentication/SignIn"
import ForgotPassword from "./pages/Authentication/ForgotPassword"
import ResetPassword from "./pages/Authentication/Reset Passwod"
import OTPPage from "./pages/Authentication/OTP_Page"
import AccessOTPContextProvider from "./contexts/OTPAccessContextProvider"
import OTPPrivateRoute from "./components/OTPPrivateRoute"
import PrivateRoute from "./components/PrivateRoute"
import Shared from "./pages/Shared"
import SignInPrivateRoute from "./components/SignInPrivateroute"


const router = createBrowserRouter([
        {
            path : "/signin",
            element :(
                <AccessOTPContextProvider>
                    <SignInPrivateRoute>
                        <SignIn/>
                    </SignInPrivateRoute>
                </AccessOTPContextProvider>
          
            )
        },
        {
            path : "/",
            element :(
                <AccessOTPContextProvider>
                    <SignInPrivateRoute>
                        <SignIn/>
                    </SignInPrivateRoute>
                </AccessOTPContextProvider>
            )
        },
        {
            path : "/signup",
            element :(
                <AccessOTPContextProvider>
                    <SignInPrivateRoute>
                        <SignUp/>
                    </SignInPrivateRoute>    
                </AccessOTPContextProvider>
            )
        },
        {
            path:"/otp",
            element:(
                <AccessOTPContextProvider>
                    <OTPPrivateRoute>
                        <OTPPage/>
                    </OTPPrivateRoute>
                </AccessOTPContextProvider>
            )
        },
        {
            path:"/forgot-password",
            element:<ForgotPassword/>
        },
        {
            path:"/reset-password",
            element:<ResetPassword/>
        },
        {
            path: "/main",
            element: (
            <PrivateRoute>
                <Shared/>
            </PrivateRoute>
            ),
            children: [

            ]
        }
    ]
  )

export default router