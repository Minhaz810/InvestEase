import BASE_URL from "./init"

const SignInAPI = async (email,password) =>{
    const url = `${BASE_URL}/user/token`;
    const payload = {
        "email" :email,
        "password":password,
    }
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(payload)
    })

    let result = await response.json()

    if (!response.ok){
        result = {
            "status":"error",
            "message":result['detail']
        }
    }else{
        result = {
            "status":"success",
            "data":result
        }
    }

    return result
}

export default SignInAPI