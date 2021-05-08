import React,{useState} from "react";
import {CNModal} from "@Components/shared/CNModal/CNModal";
import {LoginForm} from "@Components/components/LoginForm/LoginForm";

export const HomeModal=({selectedModal,setSelectedHomeModal,...rest})=>{
return (
<CNModal {...rest}>

{selectedModal==="login" ?
    <LoginForm {...rest}  setSelectedHomeModal={setSelectedHomeModal}/> 
    :

    <div>Register form  in here</div>

}




</CNModal>
)



}

