import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const BasePage =()=>{
    const {user} = useContext(AuthContext)
    
    return(
        <div>
            Hello {user}
        </div>
    )
}

export default BasePage