import {combineReducers} from "redux";
import { createSelector } from "reselect";

import homeRoomReducer,{homeRoomAdapter,getLatestHomeRoom} from "./homeRoom";


const selectSelf=(state)=> state.room



// Home room
const selectHomeRoom=createSelector(selectSelf,(state)=>state.homeRoom)
const homeRoomSelectors=homeRoomAdapter.getSelectors(selectHomeRoom);




const homeRoomSelectAll=createSelector(homeRoomSelectors.selectAll,(state)=>state)



// homeRoomSelectors.selectAll

export const roomSelectors={
    homeRoomSelectAll
}

export const roomActions={
    getLatestHomeRoom,
    // getById:
}


export default combineReducers({
 homeRoom:homeRoomReducer,

})