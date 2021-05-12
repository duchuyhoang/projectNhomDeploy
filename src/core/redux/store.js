import {combineReducers,configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth";
import currentUserReducer from "./user";
const reducer={
auth:authReducer,
currentUser:currentUserReducer
}
const rootReducer=combineReducers(reducer)


const resettableReducer=(state,action)=>{
    if(action.type==="auth/log_out/fulfilled"){
        return rootReducer(undefined,action)
    }
    else{
        return rootReducer(state,action);
    }
}


export const store=configureStore({
    reducer:resettableReducer
})