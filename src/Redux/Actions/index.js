export const USERNAME_LOGIN_DUMMY = "USERNAME_LOGIN_DUMMY";
export const PASSWORD_LOGIN_DUMMY = "PASSWORD_LOGIN_DUMMY";
export const LOGIN_AUTH_BOOL = "LOGIN_AUTH_BOOL";

export const handleUsernameDispatch = (dataUsername) => {

    return {
        type: USERNAME_LOGIN_DUMMY,
        payload: dataUsername
    }

}
export const handlePasswordDispatch = (dataPassword) => {

    return {
        type: PASSWORD_LOGIN_DUMMY,
        payload: dataPassword
    }

}

export const handleLoginAuthBool = (state) => {

    return {
        type: LOGIN_AUTH_BOOL,
        payload: state
    }


}


// future action for API call to backend for forms and bcyrpt