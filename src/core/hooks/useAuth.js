import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux"
import {authSelectors} from "@Core/redux/auth"
import {currentUserActions,currentUserSelectors} from "@Core/redux/user";


export const useAuth=()=>{

const isLogin=useSelector(authSelectors.selectIsLogin);
const userId=useSelector(authSelectors.selectCurrentUserId);
const user=useSelector(currentUserSelectors.selectUserInfo);
const dispatch=useDispatch();

useEffect(() => {
dispatch(currentUserActions.getCurrentUser({id:userId}))

},[userId,isLogin]);




return {
    ...isLogin,
    ...user,
}

}