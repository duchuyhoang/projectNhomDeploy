import React, { useState } from "react";
import styled from 'styled-components'
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { SideBar } from "./SideBar"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const NavBarContainer = styled.section`
display:flex;
width:100%;
background-color:${props => {
        return props.theme.palette.text.secondary
    }};
align-items:center;
position:fixed;
/* border-bottom:1px solid ${props => {
        return props.isSmallVer ? props.theme.border.main : "transparent"

    }}; */
padding:15px 0px;
z-index:1000;
`;

const Col3 = styled.div`
width:25%;
`;

const Col6 = styled.div`
width:50%;
`

const UserIcon = styled(SVGIcon)`
fill:#484848;
cursor: pointer;
margin-right:15px;
&:hover{
    fill:${props => props.theme.palette.primary.main}
}
`;

const MenuIconContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:${props => props.theme.palette.primary.main};
width:50px;
height:50px;
border-radius:4px;
margin-left:15px;
cursor:pointer;
&:hover{
    background-color:${props => props.theme.palette.primary.dark};
};

`;


export const SmallScreenNavBar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <NavBarContainer>

                <Col3>
                    <MenuIconContainer>
                        <SVGIcon name="menu" width="30" height="35" style={{ fill: "white" }} onClick={() => {
                            setIsOpen(true)
                        }} />
                    </MenuIconContainer>
                </Col3>

                <Col6 style={{ textAlign: "center" }}>
                    <SVGIcon name="logo" width="200" height="50" style={{ marginLeft: "10px" }} />
                </Col6>

                <Col3 style={{ textAlign: "right" }}>
                    <UserIcon name="userFilled" width="35" height="35" />
                </Col3>


            </NavBarContainer>

                <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )




}