import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { useLocation,Link} from "react-router-dom";

const SignIn = () =>{
    const location = useLocation()
    const {status} = location.state || {}
    
    return(
        <>
        <div className="flex justify-between gap-40 items-center">
            <div className="w-5/12">
                <IntroCard/>
            </div>
            
            <div className="w-7/12 mt-20 pr-64">
                {status == "success" &&(
                    <div className="text-center mb-12 font-roboto flex items-center justify-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-green-500 mr-2" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Your Email Has Been Verified!
                    </div>
                )}
                <div>
                    <div className="text-textBlack text-primaryHeader font-roboto font-bold leading-tight">
                        Sign In
                    </div>
                    <div className="text-subheadingLightGray text-subHeader font-roboto leading-tight mt-4">
                        Sign In To Your Account
                    </div>
                </div>
                <div className="mt-8">
                    <InputField
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                        required={true}
                    />
                </div>
                <div className="mt-8">
                    <InputField
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                        required={true}
                    />
                </div>

                <div className="mt-12">

                    <PrimaryButton
                        className="w-full p-3 text-backgroundWhite"
                        text = "Sign In"
                    />
                     <div className="text-right font-bold text-cardDark font-roboto mt-2">
                        Forgot Password
                    </div>
                </div>

                <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                    Don't Have Any Account? <span className="text-cardDark font-bold"><Link to="/signup">Registration</Link></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn