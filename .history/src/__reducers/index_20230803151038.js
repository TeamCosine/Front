import { combineReducers } from "redux";
import user from './user_reducers';

const rootReducer = combineReducers({
    user,
})