import React from "react";
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import SharedNavbar from "../pages/SharedNavbar";

const Main = () =>{
    return(
        <div>
            <SharedNavbar/>
            <Outlet/>
        </div>
    )
}
export default Main