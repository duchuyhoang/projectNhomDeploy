import React from 'react';
import { useAuth } from "@Core/hooks/useAuth";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { CNAvatar } from "@Components/shared/CNAvatar/CNAvatar";
import {DropDownUserInfo} from "./DropDownUserInfo";

const BaseText = styled.div`
color:${props => props.theme.palette.text.secondary};
font-family:${props => props.theme.typography.fontFamily};
font-size:23px;
cursor:pointer;

`

const DropDownUser=styled.div`
visibility:hidden;
position:absolute;
top:100%;
left:50px;
background:#fff;
color:black;
width:200px;
padding: 10px 0px;
border-radius: 10px;
transition:all 0.5s;
transform:rotateX(90deg);

&::before{
content:"";
position:absolute;
top:-11px;
left:10px;
width: 0; 
  height: 0; 
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 13px solid #fff;
}
`


const Container = styled(BaseText)`
display:flex;
font-weight:bold;
position:relative;
&:hover ${DropDownUser}{
    transform:rotateX(0deg);
    visibility:visible;
}
&:hover{
    color:${props => (props.theme.palette.primary.main)};
}
`;
const RegisterText = styled.div`
display:inline-block;
display:flex;
align-items:center;
&:hover{
    color:${props => props.theme.palette.primary.main};
}

`;

const UserName=styled.p`
display:flex;
align-items:center;
white-space:nowrap;
/* max-width:200px; */
overflow:hidden;
`

export const UserInfo = ({ setSelectedHomeModal, setHomeModalOpen }) => {
    const userInfo = useAuth();
    return (
        <Container>
            {userInfo.isLogin ? (
            
            <>
            <CNAvatar type="small" src={userInfo.avatar} />
            
            <UserName style={{marginLeft:10}}>{userInfo.lastName}  {userInfo.middleName}   {userInfo.firstName}</UserName>
<DropDownUser>
    <div style={{overflow:"hidden"}}>
        <DropDownUserInfo signOutHandle={userInfo.signOut}/>
    </div>

</DropDownUser>
            </>
            )  : (
                <>
                    <SVGIcon name="user" width="25" height="25" style={{ fill: "#fff", margin: "0 5px" }} />
                    <RegisterText
                        onClick={(e) => {
                            setSelectedHomeModal("login");
                            setHomeModalOpen(true)
                        }}
                    >Login</RegisterText>
                /
                    <RegisterText onClick={() => {
                        setSelectedHomeModal("register");
                        setHomeModalOpen(true)
                    }}>Register</RegisterText>
                </>
            )}

        </Container>
    )




}