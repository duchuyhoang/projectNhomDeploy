import React from "react";
import {Link} from "react-router-dom";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import styled from "styled-components"
import {useAuth} from "@Core/hooks/useAuth";



const DropDownItem=styled.div`
display:flex;
/* justify-content:space-around; */
align-items:center;
padding:5px;
font-size:17px;
font-family:${props=>props.theme.typography.fontFamily};
color:black;
&:hover{
    background:#C5CDD9;
}
`
const DropDownContainer=styled.div`

& ${DropDownItem}:not(:last-child){
border-bottom:1px solid #C5CDD9;
}

`


const ModifiedIcon=styled(SVGIcon)`
margin-right:10px;
`


export const DropDownUserInfo=({signOutHandle})=>{
    
return (
<>
<DropDownContainer>

<DropDownItem>
<ModifiedIcon name="dashBoard" width="18" height="18"/>
Dash Board
</DropDownItem>


<DropDownItem onClick={signOutHandle}>
<ModifiedIcon name="signout" width="18" height="18"/>
Sign Out
</DropDownItem>

<DropDownItem>
<ModifiedIcon name="user" width="18" height="18" style={{fill:"black"}}/>
Profile
</DropDownItem>


<DropDownItem>
<ModifiedIcon name="password" width="18" height="18" style={{fill:"black"}}/>
Change Password
</DropDownItem>


<DropDownItem>
<ModifiedIcon name="message" width="16" height="16" style={{fill:"black"}}/>
Message
</DropDownItem>



</DropDownContainer>
</>
)


}