import ActiveSlider from "./ActiveSlider"

const IntroCard = () =>{
    return (
        <>
        <div className="w-full bg-cardLight ml-8 mt-8">
            <div className="pl-8 pt-8">
                <img src="/Images/InvestEase.png" alt="Logo" className="w-16 h-16"/>
            </div>
            <div className="pl-8 pt-4">
                <div className="text-textBlack text-primaryHeader font-roboto font-bold leading-tight">
                    <span className="block">Smart Investment</span>
                    <span>Bigger Returns</span>
                </div>
            </div>
            <div className="pl-8 pt-4">
                <div className="text-subheadingGray font-roboto pr-8">
                    Take control of your financial future with our expert-driven investment strategies. Whether you're a beginner looking to get started or a seasoned investor seeking to refine your approach, we provide tailored guidance to help you make smarter choices. Our comprehensive services include personalized investment plans, market analysis, risk management, and ongoing support. We work with you to understand your financial goals, develop strategies to maximize returns, and navigate market complexities. Trust us to be your partner in achieving financial success and securing a prosperous future.
                </div>
            </div>
            <div className="pl-8 pt-16 pb-8 pr-32">
                <ActiveSlider/>
            </div>
        </div>
        </>
    )
}

export default IntroCard