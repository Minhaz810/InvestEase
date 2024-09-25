import React,{useState} from "react";
import AccessOTPContext from "./AccessOTPContext";

const AccessOTPContextProvider = ({children}) =>{
    const [canAccessOTP,setCanAccessOTP] = useState(false)

    return(
        <AccessOTPContext.Provider value={{canAccessOTP,setCanAccessOTP}}>
            {children}
        </AccessOTPContext.Provider>
    )
}

export default AccessOTPContextProvider