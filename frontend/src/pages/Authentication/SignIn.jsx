import IntroCard from "../../components/IntroCard";
import InputField from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

const SignIn = () =>{
    return(
        <>
        <div className="flex justify-between gap-40 items-center">
            <div className="w-5/12">
            <IntroCard/>
            </div>
            
            <div className="w-7/12 mt-20 pr-64">
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
                    Don't Have Any Account? <span className="text-cardDark font-bold">Registration</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn