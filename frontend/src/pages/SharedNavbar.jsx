import React, { useEffect,useState,useRef } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

const SharedNavbar =()=>{
    const {user} = useContext(AuthContext)
    const [open,setOpen] = useState(false)
    const menuRef = useRef(null)

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return(
        <div className="sticky top-0 z-10">
        <div className="flex flex-row shadow-md h-auto bg-backgroundWhite pt-4 gap-8">
            <div>
                <img src="/Images/InvestEase.png" alt="Logo" className="w-12 h-12 ml-12"/>
            </div>
            <div className="flex flex-row text-navbar justify-between pt-4 gap-8 ml-8">
                <NavLink
                    to = "/main/dashboard"
                    className={({ isActive}) =>
                        isActive ? "cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold" : "text-subheadingLightGray font-roboto font-bold hover:text-textBlack cursor-pointer"
                      }
                >
                DashBoard
                </NavLink>

                <NavLink
                    to = "/main/mutual-fund-list"
                    className={({ isActive}) =>
                        isActive ? "cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold" : "text-subheadingLightGray font-roboto font-bold hover:text-textBlack cursor-pointer"
                      }
                >
                Mutual Fund List
                </NavLink>

                <NavLink
                    to = "/main/portfolio"
                    className={({ isActive}) =>
                        isActive ? "cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold" : "text-subheadingLightGray font-roboto font-bold hover:text-textBlack cursor-pointer"
                      }
                >
                Portfolio
                </NavLink>

                <NavLink
                    to = "/main/friends-n-family"
                    className={({ isActive}) =>
                        isActive ? "cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold" : "text-subheadingLightGray font-roboto font-bold hover:text-textBlack cursor-pointer"
                      }
                >
                Friends And Family
                </NavLink>

                <NavLink
                    to = "/main/financial-news"
                    className={({ isActive}) =>
                        isActive ? "cursor-pointer border-b-4 border-textBlack text-textBlack font-roboto font-bold" : "text-subheadingLightGray font-roboto font-bold hover:text-textBlack cursor-pointer"
                      }
                >
                Financial News
                </NavLink>             
            </div>
            <div className="flex flex-row ml-auto mr-12 gap-8">
                <div className="inline-block my-4 cursor-pointer">
                    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12C6.34315 12 5 13.3431 5 15V45C5 46.6569 6.34315 48 8 48H56C57.6569 48 59 46.6569 59 45V15C59 13.3431 57.6569 12 56 12H8Z" fill="black"/>
                        <path d="M8 16L32 32L56 16" stroke="white" stroke-width="2"/>
                        <circle cx="50" cy="14" r="14" fill="red"/>
                        <text x="50" y="21" font-size="20" font-family="Roboto, sans-serif" font-weight="bold" text-anchor="middle" fill="white">1</text>
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
                    <div className="ml-2 cursor-pointer transition-transform transform hover:scale-110" onClick={()=>{setOpen(!open)}}>
                        {!open &&
                            (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16L6 10H18L12 16Z" fill="black"/>
                            </svg>
                            )
                        }
                        {open &&
                            (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8L18 14H6L12 8Z" fill="black"/>
                            </svg>
                            )
                        }
                    </div>
                 </div>
            </div>
        </div>
        
        {open &&
            (
            <div
                ref={menuRef} 
                className="flex flex-col items-center mr-12 h-43 w-48 mt-2 rounded-b-md shadow-md bg-cardLightWhite z-50 absolute right-0"
            >
                <div className="text-subheadingGray font-roboto font-bold w-full py-2 pl-4 cursor-pointer hover:bg-subheadingGray hover:text-backgroundWhite rounded-t-md">
                    Profile
                </div>
                <div className="h-[1px] w-full bg-cardLight"></div>
                <div className="text-subheadingGray font-roboto font-bold w-full py-2 pl-4 cursor-pointer hover:bg-subheadingGray hover:text-backgroundWhite">
                    Transactions
                </div>
                <div className="h-[1px] w-full bg-cardLight"></div>
                <div className="text-subheadingGray font-roboto font-bold w-full py-2 pl-4 cursor-pointer hover:bg-subheadingGray hover:text-backgroundWhite">
                    Documents
                </div>
                <div className="h-[1px] w-full bg-cardLight"></div>
                <div className="text-subheadingGray font-roboto font-bold w-full py-2 pl-4 cursor-pointer hover:bg-subheadingGray hover:text-backgroundWhite flex-grow rounded-b-md">
                    Settings
                </div>
            </div>
            )
        }
    </div>
    )
}

export default SharedNavbar