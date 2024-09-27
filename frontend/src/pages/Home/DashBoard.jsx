import React from "react";
import { useEffect,useState } from "react";
import { FetchMutualFundList } from "../../api/mutualFund";
import InvestmentProfitChart from "../../components/investmentProfitChart";
import PrimaryButton from "../../components/PrimaryButton";

const Dashboard = () =>{
    const [mutualFundList,setMutualFundList] = useState([])
    const [fetchError,setFetchError] = useState("")
    const [totalInvestment,setTotalInvestment] = useState(30000)
    const [profit,setProfit] = useState(200)
    const [returnPercent,setReturnPercent] = useState(2.50)
    const [activeMutualFundNumber,setActiveMutualFundNumber] = useState(2)
    const [loading,setLoading] = useState(false)

    const accessToken = localStorage.getItem("accessToken")
    useEffect(()=>{
        const GetMutualFundList = async () =>{
            const response = await FetchMutualFundList(accessToken)
                if (response['status'] == "success"){
                    let data = response['data']
                    setMutualFundList(data)
                }else{
                    setFetchError("Sorry Something Went Wrong, Our Team is Woking On this!")
                }
            }
            GetMutualFundList()
        }
        ,[])
        console.log(mutualFundList)

    return(
        <div>
            <div className="grid grid-cols-3 gap-8 max-w-[1600px] mt-8">
                <div className="ml-8 w-full border-2 border-subheadingLightGray shadow-md rounded-md pl-8 py-12">
                    <div className="text-textBlack text-subHeader font-roboto font-bold">
                        Total Investment
                    </div>
                    <div className="flex gap-4">
                        <div className="text-textBlack text-primaryHeader font-roboto font-bold">
                            ${totalInvestment}
                        </div>
                        <div className="mt-6 bg-textBlack h-6 w-6 rounded-full flex items-center justify-center">
                            {returnPercent >= 0.0 &&
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M12 3 L6 9 H11 V18 H13 V9 H18 L12 3 Z" />
                            </svg>
                            )}
                            {returnPercent <0.0 &&
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M12 21 L6 15 H11 V6 H13 V15 H18 L12 21 Z" />
                            </svg>)
                            }
                        </div>
                        <div className="mt-6 font-roboto text-subheadingLightGray font-bold text-[18px]">
                            {returnPercent>=0.0?`+ ${returnPercent}`:`- ${Math.abs(returnPercent)}`}%
                        </div>
                    </div>
                    
                    <div className="font-roboto text-subheadingLightGray text-[24px]">
                        You have <span className="text-textBlack font-bold">${profit}</span> Profit This Month
                    </div>
                    <div className="font-roboto text-textBlack text-[18px] mt-4">
                        Active Mutual Fund :<span className="text-textBlack font-bold">{activeMutualFundNumber}</span>
                    </div>
                </div>
                <div className="ml-8 w-full border border-subheadingLightGray shadow-md rounded-md p-2">
                    <InvestmentProfitChart/>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center ml-8 w-full rounded-md">
                    <div className="text-[32px] text-textBlack font-roboto font-bold">
                        Want More Info?
                    </div>
                    <div className="flex gap-2">
                        <div className="text-subHeader text-subheadingLightGray
                            font-roboto font-bold hover:text-textBlack hover:border-b-4 hover:border-subheadingGray cursor-pointer">
                            Leave a meassage
                        </div>
                        <div className="w-[4px] bg-subheadingGray"></div>
                        <div className="text-subHeader text-subheadingLightGray
                            font-roboto font-bold hover:text-textBlack hover:border-b-4 hover:border-subheadingGray cursor-pointer">
                            Instant chat with AI
                        </div>
                    </div>
                    <div className="text-[18px] text-textBlack font-roboto text-center mx-8">
                            If you leave a message, You will get a reply withinn 48 hours from our agent
                    </div>
                </div>
            </div>
            <div className="ml-8 mt-8 text-subHeader text-textBlack font-roboto font-bold ">
                Our Mutual Funds List
            </div>
            <div className="w-full border mx-8 max-w-[1800px] border-subheadingGray">
            </div>
            {mutualFundList.map((data,index)=>
            (<div key={index} className="flex items-center w-full border mx-8 mt-4 max-w-[1800px] border-subheadingLightGray rounded-lg py-6 pl-4 shadow-md">
                <div className="h-12 w-12 rounded-full bg-subheadingGray">
                    {/* <img/> */}
                </div>
                <div className="ml-4">
                    <div className="text-subHeader w-[600px] text-textBlack font-roboto font-bold ">
                        {data.name}
                    </div>
                    <div className="text-textBlack font-roboto">
                        {data.fund_sub_group.sub_group_name}
                    </div>
                </div>
                <div className="ml-24">
                    <div className="text-[18px] text-textBlack font-roboto font-bold ">
                        Minimum Investment
                    </div>
                    <div className="text-textBlack font-roboto">
                        ${data.minimum_investment}
                    </div>
                </div>
                <div className="ml-24">
                    <div className="text-[18px] text-textBlack font-roboto font-bold pr-12">
                        Return Comparison
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-[20px] font-roboto text-subheadingGray">
                            5%
                        </div>
                        <div className="border w-full h-[16px] rounded-full ">
                            <div className="relative rounded-full left-0 top-0 h-full bg-cardDark" style={{ width: `${(data.minimum_investment/5000)*100}%` }}></div>
                        </div>
                        <div className="text-[20px] font-roboto text-subheadingGray">
                            9%
                        </div>
                    </div>
                    
                </div>
                <div className="ml-24">
                    <div className="text-[18px] text-textBlack font-roboto font-bold ">
                        Current Return
                    </div>
                    <div className="text-textBlack font-roboto">
                        {(data.minimum_investment/5000)*100} %
                    </div>
                </div>
                <div className="ml-auto mr-8">
                    <PrimaryButton
                        className="w-full p-3 text-backgroundWhite"
                        text = "More Details"
                        loading={loading}
                        rounded="lg"
                    />
                </div>
            </div>)
            )
            }
            <div className="mt-12">

            </div>
        </div>
    )
}

export default Dashboard