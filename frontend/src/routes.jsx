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
import SharedNavbar from "./pages/SharedNavbar"
import SignInPrivateRoute from "./components/SignInPrivateroute"
import Dashboard from "./pages/Home/DashBoard"
import Main from "./layout/Main"
import MutualFundList from "./pages/Home/MutualFundList"
import Portfolio from "./pages/Home/Portfolio"
import FriendsAndFamily from "./pages/Home/FriendsAndFamily"
import FinancialNews from "./pages/Home/FinancialNews"
import { Navigate } from "react-router-dom"


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
                <Main/>
            </PrivateRoute>
            ),
            children: [
                {
                    path: "",
                    element: <Navigate to="dashboard" />
                },
                {
                    path:"dashboard",
                    element: <Dashboard/>
                },
                {
                    path:"mutual-fund-list",
                    element: <MutualFundList/>
                },
                {
                    path:"portfolio",
                    element: <Portfolio/>
                },
                {
                    path:"friends-n-family",
                    element: <FriendsAndFamily/>
                },
                {
                    path:"financial-news",
                    element: <FinancialNews/>
                },
                
            ]
        }
    ]
  )

export default router