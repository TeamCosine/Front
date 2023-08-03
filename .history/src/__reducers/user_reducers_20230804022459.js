import {
   REGISTER_USER,
   LOGIN_USER,
   AUTH_USER,
} from "../__actions/user_actions";

export default function user(state = {}, action ){
    switch(action.type) {
        case REGISTER_USER:
            return {...state, register : action.payload};
            break;
        case LOGIN_USER:
            return {...state, loginSuccess : action.payload}
    }
}