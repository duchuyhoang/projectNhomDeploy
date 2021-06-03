import {combineReducers,configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth";
import currentUserReducer from "./user";
import roomReducer from "./room";

const reducer={
auth:authReducer,
currentUser:currentUserReducer,
room: roomReducer
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

