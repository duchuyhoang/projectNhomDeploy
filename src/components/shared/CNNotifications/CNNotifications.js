import React,{useState} from "react";
import styled from "styled-components"


const Notifications=styled.div`
height:50%;
width:50%;
background-color:#fff;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:20px 10px;
overflow:auto;
`

export const CNNotifications=({children})=>{

    return (
        <Notifications>
            {children}
        </Notifications>
    )

}