import { useState,useRef,useEffect } from 'react'
import PrimaryButton from './PrimaryButton'

const OTP = () =>{
    const [otp,setOtp]=useState(new Array(6).fill(""))
    const inputRefs=(useRef([]))

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

    
    // const handleSubmit= async (event) =>{
    //     event.preventDefault();
    //     const data={
    //         "code":otp.join(""),
    //         "email":email
    //     }
    //     setLoading(true)
    //     setError(null)
    //     const response=await axios.post(`${API_BASE_URL}/advertiser/verify/`,data)
    //     if (response.data.status==200){
    //         navigate('/login')
    //     }else{
    //         setError(response.data.message)
    //     }   
    //     setLoading(false)
    // }

    return (
        <>
                <div id="signup-verification-form" className="flex-1 rounded-2xl">
                    <form className="flex flex-col justify-center items-center gap- bg-white rounded-2xl h-full w-full">
                        <div className="text-textBlack text-primaryHeader text-center font-roboto font-bold leading-tight">
                            OTP Verification
                        </div>
                        <div className="text-subheadingLightGray text-subHeader font-roboto leading-tight mt-4">
                            An OTP Has Been Sent To
                        </div>
                        <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                            xyx@fakemail.com
                        </div>
                        <div id="otp" className="flex flex-row gap-2 mt-8">
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
                                            />
                                        )
                                    }
                                )
                            }
                            
                        </div>
                            <PrimaryButton
                                className="w-[425px] p-3 text-backgroundWhite mt-8"
                                text = "Sign In"
                            />
                    </form>
                </div>
        </>
    )
}

export default OTP