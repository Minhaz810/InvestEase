import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Shared =()=>{
    const {user} = useContext(AuthContext)
    
    return(
        <div className="flex flex-row shadow-md h-auto bg-backgroundWhite pt-4 gap-8">
            <div>
                <img src="/Images/InvestEase.png" alt="Logo" className="w-12 h-12 ml-12"/>
            </div>
            <div className="flex flex-row text-navbar justify-between pt-4 gap-8 ml-8">
                <div className=" cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold ">
                    Dashboard
                </div>
                <div className="text-subheadingLightGray font-roboto font-bold">
                    Mutual Fund List
                </div>
                <div className="text-subheadingLightGray font-roboto font-bold">
                    Portfolio
                </div>
                <div className="text-subheadingLightGray font-roboto font-bold">
                    Friends and Family
                </div>              
                <div className="text-subheadingLightGray font-roboto font-bold">
                    Mutual Fund News
                </div>              
            </div>
            <div className="flex flex-row ml-auto mr-12 gap-8">
                <div className="inline-block my-4 cursor-pointer">
                    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12C6.34315 12 5 13.3431 5 15V45C5 46.6569 6.34315 48 8 48H56C57.6569 48 59 46.6569 59 45V15C59 13.3431 57.6569 12 56 12H8Z" fill="black"/>
                        <path d="M8 16L32 32L56 16" stroke="white" stroke-width="2"/>
                        <circle cx="50" cy="14" r="14" fill="red"/>
                        <text x="50" y="21" font-size="20" font-family="Roboto, sans-serif" font-weight="bold" text-anchor="middle" fill="white">5</text>
                    </svg>
                </div>
                <div className="inline-block my-4 cursor-pointer">
                    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 2C35.3137 2 38 4.68629 38 8V11.4721C45.4734 14.1831 50.6094 21.3046 50.6094 29.608V41.6956L55.2651 49.5396C55.911 50.6582 55.0613 52 53.7954 52H10.2046C8.93865 52 8.08897 50.6582 8.73488 49.5396L13.3906 41.6956V29.608C13.3906 21.3046 18.5266 14.1831 26 11.4721V8C26 4.68629 28.6863 2 32 2Z" fill="black"/>
                        <circle cx="44" cy="14" r="14" fill="red"/>
                        <text x="44" y="21" font-size="20" font-family="Roboto" font-weight="bold" text-anchor="middle" fill="white">3</text>
                    </svg>
                </div>
                <div className="flex items-center">
                    <div className="inline-block h-10 w-10 rounded-full bg-subheadingLightGray overflow-hidden">
                        <img src="/Images/Profile Image.png" alt="Logo" className="object-cover h-full w-full"/>
                    </div>
                    <div className="ml-2 cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L6 10H18L12 16Z" fill="black"/>
                        </svg>
                    </div>
                 </div>
            </div>     
        </div>
    )
}

export default Shared