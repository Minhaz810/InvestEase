import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { useEffect,useState } from "react";
import SignUpAPI from "../../api/signUp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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
        if (password1!=password2){
            setError("Password fields didn't match!")
            setLoading(false)
        }else{
            const response = await SignUpAPI(name,email,password1,password2)
            if(response['status'] == 'error'){
                let error = response['message']
                setLoading(false)
                setError(error)
            }else{
                localStorage.setItem("isRegistered","True")
                navigate("/otp",{state:{email}})
                setLoading(false)
            }
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
                            onFocus={(e)=>{setError("")}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            onFocus={(e)=>{setError("")}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setPassword1(e.target.value)}}
                            onFocus={(e)=>{setError("")}}
                        />
                    </div>
                    <div className="mt-8">
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 border border-subheadingLightGray rounded-md focus:outline-none focus:border-primary"
                            required={true}
                            onChange={(e)=>{setPassword2(e.target.value)}}
                            onFocus={(e)=>{setError("")}}
                        />
                    </div>
                    <div className="mt-10">
                        <div className="text-danger text-wrap text-center font-bold mb-2">
                            {error}
                        </div>
                        <PrimaryButton
                            className="w-full p-3 text-backgroundWhite hover:bg-hover"
                            text = "Sign Up"
                            loading = {loading}
                        />
                    </div>
                </form>

                <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                    Already Have An Account? 
                    <span className="text-cardDark font-bold">
                        <Link to="/signin">
                            Sign In
                        </Link>
                    </span>
                </div>
            </div>

        </div>
        </>
    )
}

export default SignUp