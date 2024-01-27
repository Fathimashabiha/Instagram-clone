import { combineReducers } from "redux";
import { UserSlice } from "../Feature/UserSlice";


export const rootReducer = combineReducers({
    user: UserSlice.reducer,

});