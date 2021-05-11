import React from 'react';
import { useAuth } from "@Core/hooks/useAuth";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { CNAvatar } from "@Components/shared/CNAvatar/CNAvatar";


const BaseText = styled.div`
color:${props => props.theme.palette.text.secondary};
font-family:${props => props.theme.typography.fontFamily};
font-size:23px;
cursor:pointer;
&:hover{
    color:${props => (props.theme.palette.primary.main)};
}`

const Container = styled(BaseText)`
display:flex;
font-weight:bold;
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
max-width:200px;
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