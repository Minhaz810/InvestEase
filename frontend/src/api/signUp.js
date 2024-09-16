import BASE_URL from "./init";

const SignUpAPI = async (name,email,password1,password2) =>{
    const url = `${BASE_URL}/user/registration`;
    const payload = {
        "name"  :name,
        "email" :email,
        "password_1":password1,
        "password_2":password2
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
            "message":result['error']
        }
    }else{
        result = {
            "status":"success",
            "data":result
        }
    }

    return result
}

export default SignUpAPI