import { useState,useContext,useEffect} from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

const SignInPrivateRoute =({children})=>{
    const accessToken = localStorage.getItem("accessToken")
    const isVerified = accessToken?jwtDecode(accessToken)['is_verified']:false

    return (accessToken && isVerified)? <Navigate to="/main"/>:children 
}
export default SignInPrivateRoute