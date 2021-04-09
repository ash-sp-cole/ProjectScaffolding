import {USERNAME_LOGIN_DUMMY, PASSWORD_LOGIN_DUMMY, LOGIN_AUTH_BOOL} from "../Actions";


const initialState = {

    usernameLoginDummy: '',
    passwordLoginDummy: '',
    loginBoolAuth: false

}


export const storeReducer = (state = initialState, action) => {
    console.log("store value of " + state.usernameLoginDummy + "  " +  state.passwordLoginDummy)
    
    switch (action.type) {
     

        case USERNAME_LOGIN_DUMMY:

            return {
                ...state,
                usernameLoginDummy: action.payload,

            };


        case PASSWORD_LOGIN_DUMMY:

                return {
                    ...state,
                    passwordLoginDummy: action.payload,
    
                };

        case LOGIN_AUTH_BOOL:

                return{
                    ...state,
                    loginBoolAuth:action.payload
                }


        default: return state;
    }





}