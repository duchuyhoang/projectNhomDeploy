import React from "react";
import Logo from "@Assets/svg/logo.svg"
import Envelope from "@Assets/svg/envelop.svg"
// import Logo from "../../../assets/svg/logo.svg";

console.log(Logo);


const IconMap={
logo:Logo,
envelope:Envelope
}



export const SVGIcon=({name,width=16,height=16,...rest})=>{
    console.log(IconMap.logo);

const MatchIcon=IconMap[name]||null;

// return null

return <MatchIcon  width={width} height={height} {...rest}  />


}