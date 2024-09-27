import { useState,useContext} from "react";
import { Navigate } from "react-router-dom";
import AccessOTPContext from "../contexts/AccessOTPContext";
import { jwtDecode } from "jwt-decode";

const OTPPrivateRoute =({children})=>{
    const {canAccessOTP} = useContext(AccessOTPContext)
    return (canAccessOTP) ? children: <Navigate to="/signin"/>
}
export default OTPPrivateRoute