import { useState,useContext} from "react";
import { Navigate } from "react-router-dom";
import AccessOTPContext from "../contexts/AccessOTPContext";

const PrivateRoute =({children})=>{
    const {canAccessOTP} = useContext(AccessOTPContext)
    return canAccessOTP ? children: <Navigate to="/signin"/>
}
export default PrivateRoute