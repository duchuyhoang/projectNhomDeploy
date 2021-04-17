import React from "react";
import Logo from "@Assets/svg/logo.svg"
import Envelope from "@Assets/svg/envelop.svg"
import User from "@Assets/svg/user.svg" 
// import Logo from "../../../assets/svg/logo.svg";


const IconMap={
logo:Logo,
envelope:Envelope,
user:User
}



export const SVGIcon=({name,width=16,height=16,...rest})=>{
const MatchIcon=IconMap[name]||null;

// return null

return <MatchIcon  width={width} height={height} {...rest}  />


}