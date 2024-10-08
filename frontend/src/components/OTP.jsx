import { useState,useRef,useEffect } from 'react'
import PrimaryButton from './PrimaryButton'
import OTPVerification from '../api/otpVerification'
import ResendOTP from '../api/resendOTP'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { SetAccessToken } from '../api/setToken'
import { SetRefreshToken } from '../api/setToken'


const OTP = ({email}) =>{
    const [otp,setOtp]=useState(new Array(6).fill(""))
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const inputRefs=(useRef([]))
    const [seconds, setSeconds] = useState(10);
    const [resendMessage,setResendMessage] = useState("")

    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [seconds]);

    const handleChange=(event,index)=>{
        const value=event.target.value
        if (isNaN(value)) return

        const newOTP=[...otp]
        newOTP[index]=value
        setOtp(newOTP)
        if(value && index<otp.length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus()
        }
    }

    const handleOnKeyDown=(event,index)=>{
        if(event.key=="Backspace" && !otp[index] && index>0){
            inputRefs.current[index-1].focus()
        }
    }

    useEffect(()=>{
        if (inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        if(otp.join("").length!=6){
            setError("Please fill up all the fields")
            setOtp(new Array(6).fill(""))
            setLoading(false)
        }else{
            let otpStr = otp.join("")
            const response = await OTPVerification(email,otpStr)
            if(response['status'] == "error"){
                let error = response['message']
                setError(error)
                setOtp(new Array(6).fill(""))
                setLoading(false)
            }else{
                navigate("/signin")
                setLoading(false)
            }
        }
    }

    const ResendOTPHandler = async () =>{
        const response = await ResendOTP(email)
        if(response['status'] == "error"){
            let error = response['message']
            setError(error)
            setOtp(new Array(6).fill(""))
        }
        else{
            let message = response.data['message']
            setResendMessage(message)
            setSeconds(10)
        }
    }

    return (
        <>
            <div id="signup-verification-form" className="flex-1 rounded-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap- bg-white rounded-2xl h-full w-full">
                    <div className="text-textBlack text-primaryHeader text-center font-roboto font-bold leading-tight">
                        OTP Verification
                    </div>
                    <div className="text-subheadingLightGray text-subHeader font-roboto leading-tight mt-4">
                        An OTP Has Been Sent To
                    </div>
                    <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                        {email}
                    </div>
                    <div id="otp" className="flex flex-row gap-2 mt-8 mb-8">
                        {otp.map((value,index)=>{
                            return (
                                        <input type="text" 
                                            ref={(input)=>(inputRefs.current[index]=input)}
                                            maxLength="1"
                                            className="text-subheadingGray text-2xl text-center border-2 border-formBlue w-16 h-16 flex justify-center items-center rounded-md"
                                            key={index}
                                            value={value}
                                            onChange={(event)=>(handleChange(event,index))}
                                            onKeyDown={(event)=>(handleOnKeyDown(event,index))}
                                            onFocus={(event)=>{setError("")}}
                                        />
                                    )
                                }
                            )
                        }
                    
                    </div>
                        {error &&
                        (<div className="text-danger text-wrap text-center font-bold mt-6 mb-2">
                            {error}
                        </div>)
                        }
                        {resendMessage &&
                        (<div className="text-cardDark text-wrap text-center font-bold mt-6 mb-2">
                            {resendMessage}
                        </div>)
                        }
                        <div>
                        {seconds>0 ?
                            (<div className='text-subheadingLightGray font-bold mb-1 cursor-not-allowed disabled'>
                                Resend OTP in {`${seconds}s`}
                            </div>):
                            (
                            <div className='text-subheadingGray font-bold mb-1 cursor-pointer hover:text-cardDark' onClick={ResendOTPHandler}>
                                Resend OTP
                            </div>
                            )
                        }
                        <PrimaryButton
                            className="w-[425px] p-3 text-backgroundWhite"
                            text = "Confirm"
                            rounded="md"
                            loading={loading}
                        />
                        </div> 
                </form>
            </div>
        </>
    )
}

export default OTP