import { useState,useContext,useEffect} from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode} from "jwt-decode";


const PrivateRoute = ({ children }) => {
    const accessToken = localStorage.getItem("accessToken");
    const isVerified = accessToken?jwtDecode(accessToken)['is_verified']:false
    if(accessToken && isVerified){
        return children
    }else if (accessToken && !isVerified){
        return <Navigate to ="/otp"/>
    }
    else{
        return <Navigate to="/signin" />
    }
};

export default PrivateRoute