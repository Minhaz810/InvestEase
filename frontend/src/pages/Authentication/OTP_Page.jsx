import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import OTP from "../../components/OTP";

const OTPPage = () =>{
    return(
        <>
        <div className="flex justify-between gap-40 items-center">
            <div className="w-5/12">
            <IntroCard/>
            </div>
            
            <div className="w-7/12 mt-20 pr-64">
                <OTP/>   
                <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                    Already Have An Account? <span className="text-cardDark font-bold">Sign In</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default OTPPage