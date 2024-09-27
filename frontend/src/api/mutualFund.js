import BASE_URL from "./init";

export const FetchMutualFundList = async (token,id="") =>{
    const url = `${BASE_URL}/mutual-fund/mutual-fund-list?id=${id}`
    const response = await fetch(url,{
        method :"GET",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`,
        }
    })

    let result = await response.json()

    if(!response.ok){
        result = {
            "status" :response.status,
            "message":result['detail']
        }    
    }else{
        result = {
            "status":"success",
            "data"  :result['data'] 
        }
    }

    return result
}