
export const SetAccessToken = (accessToken) =>{
    localStorage.setItem("accessToken",accessToken)
}
export const SetRefreshToken = (refreshToken) =>{
    localStorage.setItem("refreshToken",refreshToken)
}