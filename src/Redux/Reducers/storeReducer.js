import {USERNAME_LOGIN_DUMMY, PASSWORD_LOGIN_DUMMY} from "../Actions";


const initialState = {

    usernameLoginDummy: 'test username dummy',
    passwordLoginDummy: ' test password dummy',
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


        default: return state;
    }





}