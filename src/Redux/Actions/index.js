export const USERNAME_LOGIN_DUMMY = "USERNAME_LOGIN_DUMMY";
export const PASSWORD_LOGIN_DUMMY = "PASSWORD_LOGIN_DUMMY";


export const handleUsernameDispatch = (dataUsername) => {

     return {
         type:USERNAME_LOGIN_DUMMY,
         payload:dataUsername
     }

 }
 export const handlePasswordDispatch = (dataPassword) => {

    return {
        type:PASSWORD_LOGIN_DUMMY,
        payload:dataPassword
    }

}