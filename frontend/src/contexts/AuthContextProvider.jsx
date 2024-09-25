import React,{useState,useEffect} from "react";
import AuthContext from "./AuthContext";
import { jwtDecode} from "jwt-decode";


const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState(()=>{
        const accessToken = localStorage.getItem('accessToken');
        return accessToken ? jwtDecode(accessToken)['name']:null
    })
    
    const updateUser = (accessToken) =>{
        setUser(jwtDecode(accessToken)['name'])
    }

    return(
        <AuthContext.Provider value={{user,updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider