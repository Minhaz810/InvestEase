import React from "react"
import {createBrowserRouter} from 'react-router-dom'
import SignUp from "./pages/Authentication/SignUp"
import SignIn from "./pages/Authentication/SignIn"
import ForgotPassword from "./pages/Authentication/ForgotPassword"
import ResetPassword from "./pages/Authentication/Reset Passwod"
import OTPPage from "./pages/Authentication/OTP_Page"
import AccessOTPContextProvider from "./contexts/RegistrationContextProvider"
import PrivateRoute from "./components/OTPPrivateRoute"

const router = createBrowserRouter([
        {
            path : "/signin",
            element :<SignIn/>
        },
        {
            path : "/",
            element :(
            <AccessOTPContextProvider>
                <SignIn/>
            </AccessOTPContextProvider>
            )
        },
        {
            path : "/signup",
            element :(
            <AccessOTPContextProvider>
                <SignUp/>
            </AccessOTPContextProvider>     
            )
        },
        {
            path:"/otp",
            element:(
                <AccessOTPContextProvider>
                    <PrivateRoute>
                        <OTPPage/>
                    </PrivateRoute>
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
        }
    ]
  )

export default router