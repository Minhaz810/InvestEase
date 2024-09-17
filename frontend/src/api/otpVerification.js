import BASE_URL from "./init";

const OTPVerification = async (email,otp) =>{
    const url = `${BASE_URL}/user/verify-user`
    const payload = {
        "email":email,
        "otp":otp,
    }
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(payload)
    })

    let result =  await response.json()
    if (!response.ok){
        result = {
            "status":"error",
            "message":result["error"]
        }
    }else{
        result = {
            "status":"success",
            "data": result
        }
    }
    return result
}

export default OTPVerification