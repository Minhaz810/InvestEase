import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { useEffect,useState } from "react";
import SignUpAPI from "../../api/signUp";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password1,setPassword1] = useState("")
    const [password2,setPassword2] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleFormSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const response = await SignUpAPI(name,email,password1,password2)
        if(response['status'] == 'error'){
            let error = response['message']
            setError(error)
        }else{
            navigate("/otp")
        }
    }
    
    return(
        <>
        <div className="flex justify-between gap-40">
            <div className="w-5/12">
            <IntroCard/>
            </div>
            
            <div className="w-7/12 mt-20 pr-64">
                <div>
                    <div className="text-textBlack text-primaryHeader font-roboto font-bold leading-tight">
                        Get Started
                    </div>
                    <div className="text-subheadingLightGray text-subHeader font-roboto leading-tight mt-4">
                        Create Your Acccount Now
                    </div>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="mt-16">
                        <InputField
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setPassword1(e.target.value)}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setPassword2(e.target.value)}}
                        />
                    </div>
                    <div className="mt-12">

                        <PrimaryButton
                            className="w-full p-3 text-backgroundWhite"
                            text = "Sign Up"
                        />
                    </div>
                </form>

                <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                    Already Have An Account? <span className="text-cardDark font-bold">Sign In</span>
                </div>
            </div>

        </div>
        </>
    )
}

export default SignUp