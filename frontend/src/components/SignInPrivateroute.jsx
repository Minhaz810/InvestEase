import { useState,useContext,useEffect} from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";


const SignInPrivateRoute =({children})=>{
    const accessToken = localStorage.getItem("accessToken")

    return !accessToken? children: <Navigate to="/main"/>
}
export default SignInPrivateRoute