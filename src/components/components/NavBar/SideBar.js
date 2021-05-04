import React, { useState, useCallback } from "react";
import styled, { css } from 'styled-components'
import "./Sidebar.css"
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { siblingUntil, parentUntil } from "@Ultis/until";
import { Link } from "react-router-dom";
import { CNButton } from "@Components/shared/CNButton/CNButton";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AddIcon from '@material-ui/icons/Add';
const mockData = {
    home: [],
    properties: [
        {
            type: "parent", title: "Grid",
            children: [
                {
                    type: "parent", link: "", title: "Grid V1", children: [
                        { type: "link", title: "List 1", link: "" },
                        { type: "link", title: "List 2", link: "" },
                        { type: "link", title: "List 3", link: "" },
                        { type: "link", title: "List 4", link: "" },
                        { type: "link", title: "List 5", link: "" },
                    ]
                },
                { type: "link", link: "", title: "Grid V2" },
                { type: "link", link: "", title: "Grid V3" },
                { type: "link", link: "", title: "Grid V4" },
                { type: "link", link: "", title: "Grid V5" },
            ]
        },
        {
            type: "parent", title: "List",
            children: [{ type: "link", title: "List 1", link: "" },
            { type: "link", title: "List 2", link: "" },
            { type: "link", title: "List 3", link: "" },
            { type: "link", title: "List 4", link: "" },
            { type: "link", title: "List 5", link: "" },
            ]
        },
        { type: "link", title: "Link1" }


    ],
    members: [
        {
            type: "parent", title: "Members",
            children: [
                { type: "link", link: "", title: "Members V1" },
                { type: "link", link: "", title: "Members V2" },
                { type: "link", link: "", title: "Members V3" },
                { type: "link", link: "", title: "Members V4" },
                { type: "link", link: "", title: "Members V5" },
            ]
        },
        {
            type: "parent", title: "List",
            children: [{ type: "link", title: "List 1", link: "" },
            { type: "link", title: "List 2", link: "" },
            { type: "link", title: "List 3", link: "" },
            { type: "link", title: "List 4", link: "" },
            { type: "link", title: "List 5", link: "" },
            ]
        },
        { type: "link", title: "Link1" }


    ]



}

const BaseText = css`
color:${props => props.theme.palette.text.secondary};
font-family:${props => props.theme.typography.fontFamily};
font-size:23px;
cursor:pointer;
&:hover{
    color:${props => (props.theme.palette.primary.main)};
}`

const AlignCenter = css`
display:flex;
justify-content:center;
align-items:center;
`

const RootContainer = styled.div`
display:flex;
position:fixed;
/* visibility:hidden; */
overflow:hidden;
width:80%;
transform:translate3d(-100%,0,0);
height:100vh;
/* top:0px;
bottom:0px;
left:0px;
right:0px; */

z-index:1001;
margin:0;
transition:all 0.5s;
flex-direction:column;
list-style-type:none;
background-color:${props => props.theme.palette.text.secondary};
border:1px solid ${props => (props.theme.border.main)};
padding-inline-start: 0px;
`

const HContainer = styled.ul`
width:100%;
height:100%;
transition-delay: 3s;
flex-grow:1;
transition:transform 0.2s;
padding-inline-start: 0px;
margin-top:0px;
/* transform:translate3d(100%,0,0); */
`



const Container = styled.ul`
position:fixed;
display:flex;
flex-direction:column;
flex-grow:1;
width:100%;
left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    background-color:${props => props.theme.palette.text.secondary};
transition-delay: 3s;
transition:transform 0.2s;
transform:translate3d(100%,0,0);
padding-inline-start:0px;
margin-block-start:0px;
margin-block-end:0px;
`


const BaseItem = css`
background-color:#F7F7F7;
justify-content:space-between;
color:black;
padding:15px;
border-bottom:1px solid #fff;
&:hover{
    color:${props => (props.theme.palette.primary.main)};
}
`

const StyledLink = styled(Link)`
${BaseText};
${BaseItem};
${AlignCenter};
justify-content:flex-start;
text-decoration:none;
`


const RootItem = styled.li`
${BaseText};
${AlignCenter}
${BaseItem}
/* &:hover ${Container}{
    transform:translateX(-15px);

} */
`

const Item = styled.div`
${BaseText};
${AlignCenter};
${BaseItem}



`

const SidebarTitle = styled.div`
display:flex;
padding:15px 10px;
align-items:center;
&:hover{
    color:${props => (props.theme.palette.primary.main)};
}
`
const Title = styled.div`
flex-grow:1;
text-align:center;
${BaseText};
color:${props => props.theme.palette.text.primary};
`
const SideBarButtonContainer = styled.div`
${AlignCenter};
padding:10px 20px;
`;

const ModifiedCNButton = styled(CNButton)`
width:98%;
background-color:${props => (props.theme.palette.primary.main)}!important;
color:${props => props.theme.palette.text.secondary}!important;
cursor:pointer;
&:hover{
    border:none!important;
background-color:${props => (props.theme.palette.primary.dark)}!important;
    outline:none!important;
}

`

const RecursiveSideBar = ({ data, currentLayer, title, id }) => {
    if (!data) return null;

    return (
        <>
            <Container id={currentLayer == 0 ? id : null}>
                <SidebarTitle>
                    <SVGIcon name="arrowleft" width="30" height="30" style={{ cursor: "pointer",fill:"currentColor" }} onClick={(e) => {
                        const currentElement = e.target;
                        const parentElement = parentUntil(currentElement, "ul", 1)
                        let previousTab = parentElement

                        while (true) {
                            previousTab = previousTab.previousSibling
                            if (previousTab.classList.contains("containerClose")) {
                                break;
                            }
                        }


                        previousTab.classList.remove("containerClose");
                        previousTab.classList.add("containerOpen");
                        parentElement.classList.remove("containerOpen");

                    }} />
                    <Title>
                        {title}
                    </Title>
                </SidebarTitle>
                <div style={{ flexGrow: 1 }}>
                    {data.map((item, index) => {
                        return (
                            <>
                                {item.type === "parent" ? <Item
                                    key={item.title + index}
                                    onClick={(e) => {
                                        console.log(e.target);
                                        const currentElement = e.target;
                                        const nextSibling = siblingUntil(currentElement.parentNode.parentNode, "ul", index + 1);
                                        currentElement.parentNode.parentNode.classList.toggle("containerClose");
                                        currentElement.parentNode.parentNode.classList.remove("containerOpen");
                                        nextSibling.classList.toggle("containerOpen");
                                    }}>
                                    {item.title}
                                    <SVGIcon name="arrowright" width="20" height="20" onClick={(e) => {
                                        e.stopPropagation();
                                       const currentElement = parentUntil(e.target,"div",1);
                                       const nextSibling = siblingUntil(currentElement.parentNode.parentNode, "ul", index + 1);
                                       currentElement.parentNode.parentNode.classList.toggle("containerClose");
                                       currentElement.parentNode.parentNode.classList.remove("containerOpen");
                                       nextSibling.classList.toggle("containerOpen");
                                    }}
                                    style={{fill:"currentColor"}}
                                    />
                                </Item>
                                    :
                                    <StyledLink to={item.link}>{item.title} </StyledLink>

                                }
                            </>
                        )


                    })}
                </div>
                <SideBarButtonContainer>
                    <ModifiedCNButton startIcon={<AddIcon width="30" height="30" />}>Submit Property</ModifiedCNButton>
                </SideBarButtonContainer>
            </Container>
            {data.map((item, index) => {
                return (
                    <>
                        {item.type === "parent" ? <RecursiveSideBar data={item.children}
                            key={"recursive" + currentLayer}
                            currentLayer={currentLayer + 1}
                            title={item.title}
                        /> : null}
                    </>
                )
            })}
        </>
    )

}





export const SideBar = ({ isOpen, setIsOpen }) => {

    const [listenAwayState, setListenAwayState] = useState(false);
    const handleRootItemClick = (id) => (e) => {
        const currentElement = e.target;
        currentElement.parentNode.classList.toggle("containerClose");
        currentElement.parentNode.classList.remove("containerOpen")
        document.getElementById(id).classList.toggle("containerOpen")
    }


    return (
        <>
            <ClickAwayListener
                disableReactTree={true}
                touchEvent={false}
                onClickAway={(e) => {
                    console.log("halo");
                    if (listenAwayState) {
                        setIsOpen(false);
                        setListenAwayState(false)
                    }
                    else
                        setListenAwayState(true)
                }}>
                <RootContainer className={`${isOpen ? "open" : " "}`}>

                    <>
                        <SidebarTitle>
                            <Title>
                                Menu
                </Title>
                        </SidebarTitle>
                        <HContainer>

                            <RootItem onClick={handleRootItemClick("properties")}>Hello
                <SVGIcon name="arrowright" width="20" height="20"  style={{fill:"currentColor"}}/>
                            </RootItem>
                            <RootItem onClick={handleRootItemClick("members")}>Members
                <SVGIcon name="arrowright" width="20" height="20"  style={{fill:"currentColor"}}/>
                            </RootItem>
                            <StyledLink to="/contact">Contact</StyledLink>
                        </HContainer>

                        <SideBarButtonContainer>
                            <ModifiedCNButton startIcon={<AddIcon width="30" height="30" />}>Submit Property</ModifiedCNButton>
                        </SideBarButtonContainer>

                        <RecursiveSideBar data={mockData["properties"]} currentLayer={0} title="properties" id="properties" />
                        <RecursiveSideBar data={mockData["members"]} currentLayer={0} title="members" id="members" />
                    </>
                </RootContainer>

            </ClickAwayListener>
        </>
    )

}










