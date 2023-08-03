import {
   REGISTER_USER,
   LOGIN_USER,
   AUTH_USER,
} from "../__actions/user_actions";

export default function user(state = {}, action ){
    // eslint-disable-next-line default-case
    switch(action.type) {
        case REGISTER_USER:
            return {...state, register : action.payload};
            // eslint-disable-next-line no-unreachable
            break;
        case LOGIN_USER:
            return {...state, loginSuccess : action.payload};
            // eslint-disable-next-line no-unreachable
            break;
        case AUTH_USER:
            return {...state, userData : action.payload};
            break;
            default:
                return state;
    }
}