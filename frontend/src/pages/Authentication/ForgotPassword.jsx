import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

const ForgotPassword = () =>{
    return(
        <>
        <div className="flex justify-center items-center px-[600px] h-screen">
            
            <div className="w-full">
                <div className="flex justify-center mb-12">
                    <img src="/Images/InvestEase.png" alt="Logo" className="w-16 h-16"/>
                </div>
                <div>
                    <div className="text-textBlack text-primaryHeader text-center font-roboto font-bold leading-tight">
                        Forgot Password
                    </div>
                    <div className="text-subheadingLightGray text-center text-subHeader font-roboto leading-tight mt-4">
                        Enter Your Email
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

                    <PrimaryButton
                        className="w-full p-3 text-backgroundWhite"
                        rounded="md"
                        text = "Confirm"
                    />
                </div>

                <div className="mt-8 text-center text-subheadingGray font-medium font-roboto ">
                    Don't Have Any Account? <span className="text-cardDark font-bold">Registration</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword