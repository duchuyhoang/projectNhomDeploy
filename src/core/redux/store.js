import {combineReducers,configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth";
import currentUserReducer from "./user";
const reducer={
auth:authReducer,
currentUser:currentUserReducer
}
const rootReducer=combineReducers(reducer)

export const store=configureStore({
    reducer:rootReducer
})