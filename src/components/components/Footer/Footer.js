import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNButton } from "@Components/shared/CNButton/CNButton";
import useIsMobile from "@Core/hooks/useIsMobile";
import styled from 'styled-components';
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import {CNTextField} from "@Components/shared/CNTextField/CNTextField";
const useFooterStyles = makeStyles((theme) => ({
    textField : {
        width: "76%",
        backgroundColor:"#fff",
        color:"#C5CDD9"
    },
    styleBtn: {
        minWidth:"50px !important",
        borderRadius:"50%",
        backgroundColor:"#fff",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            
        },
        marginLeft: "10px",
    },
    styleIcon : {
        '&:hover': {
            color: "#fff"
        }
    }

}))

    
    const FooterContainer= styled.div`
        font-size: 14px;
        box-sizing: border-box;
        
    `
    // about site container 
    const TopFooterContainer = styled.div`
        background-color: #202040 ;
        width:100%;
        flex-wrap: wrap;
        justify-content:space-around;
        display:  ${props => props.isMobile ? "inline-block": "inline-flex" };
        font-family: ${props=> props.theme.typography.fontFamily};
        padding:  ${props => props.isMobile ? "20px 0 20px 0" : "70px 0px 70px 0px"};
        
    `
    const AboutSite = styled.div`
        width:100%;
        color: #C5CDD9;
        max-width:  ${props => props.isMobile ? "inherit" : "234px"};
        margin: ${props => props.isMobile ? "10px 0 10px 20px" : "0"};
    `

    const AboutSiteHeader= styled.h2`
        padding: 0;
        margin: 0;
        line-height: 1;
        color: #fff;
    `
    const AboutSiteContent = styled.p`
        
        margin: 20px 0 20px 0;
        font-style: 14px;
        padding: 0;
        line-height: 30px;
        font-weight: 400;
        max-width: 234px;
    `

    // quick links container    
    const QuickLinks = styled.div`
        color: #C5CDD9;
        width:100%;
        max-width: ${ props => props.isMobile? "inherit" : "200px"};
        margin: ${ props => props.isMobile? "10px 0 10px 20px" : "0"};
    `
    const QuickLinksHeader= styled.h2`
        padding: 0;
        margin: 0;
        line-height: 1;
        color: #fff;
    `
    const QuickLinksList = styled.ul`
        margin: 20px 0 20px 0;
        padding: 0;
        list-style: none;
    `
    const QuickLinksItems = styled.li`
        padding-bottom: 10px; 
        
    `
    const QuickLinksLinks = styled.a`
        color: #C5CDD9;
        text-decoration: none; 
        &:hover{
            margin-left: 10px;
            color: #fff;
        }
        transition: all 0.4s;
    `

    // contact container
    const Contact = styled.div`
        width:100%;
        color:#C5CDD9;
        max-width: ${props => props.isMobile? "inherit" : "200px"};
        margin: ${props => props.isMobile? "10px 0 10px 20px" : "0"};
    `
    const ContactHeader = styled.h2`
        padding: 0;
        margin: 0;
        line-height: 1;
        color: #fff;
    `
    const ContactContent = styled.p`
        margin: 20px 0 20px 0;
    `

    // follow container
    const Follow = styled.div`
        width:100%;
        color:#C5CDD9;
        max-width:  ${props => props.isMobile? "inherit" : "260px"};
        margin: ${props => props.isMobile? "10px 0 10px 20px" : "0"};
    `
    const FollowHeader = styled.h2`
        padding: 0;
        margin: 0;
        line-height: 1;
        color: #fff;
    `
    const FollowIconList = styled.div`
        margin:20px 0 0 0;
        
    `
    const FollowIcon = styled.a`
        margin: 0 20px 0 0;
    `
    const SubscribeHeader =styled.h2`
        margin:20px 0 20px 0;
        line-height: 1;
        color: #fff;
    `
    const FollowInput = styled.div``

    // Bottom Footer

    const BottomFooterContainer = styled.div`
        height: 92px;
        background-color: #1A1A38;
        margin: 0;
        padding: 0;
        display: ${props => props.isMobile ? "inline-block": "inline-flex" };
        justify-content: space-around;
        color: #C5CDD9;
        font-weight: 400;
        width: 100%;
        font-family: ${props=> props.theme.typography.fontFamily};
    `
    const ListContainer = styled.div`
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: ${props => props.isMobile ? "20px 0 0 0": "auto" };
    `
    const MadeByContent = styled.p`
        text-align: ${props => props.isMobile ? "center " : "right"};
        width: 100%;
        margin: ${props => props.isMobile ? "15px 0 0 0": "0 15px 0 0" };
    `
    const BottomFooterList = styled.ul`
        padding: 0;
        list-style: none;
        display:flex;
        margin:0;
        text-align:center;
        align-items:center;
        justify-content: space-evenly;
    `
    const BottomFooterItems = styled.li``
    const BottomFooterLinks = styled.a`
        color:#C5CDD9;
        text-decoration: none; 
        margin: 10px;
        &:hover{
            
            color: #fff;
        }
        transition: all 0.4s;
    `
    const MadeByContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;      
    `
    

export const Footer =(props) => {
    const footerStyles =useFooterStyles();
    const {isMobile} = useIsMobile();

    return(
        <FooterContainer>
            <TopFooterContainer isMobile={isMobile} >
                <AboutSite isMobile={isMobile}>
                    <AboutSiteHeader>About Site</AboutSiteHeader>
                    <AboutSiteContent>We’re reimagining how you buy, sell andrent. It’s now easier to get into a place youlove. So let’s do this, together.</AboutSiteContent>
                </AboutSite>

                <QuickLinks isMobile={isMobile}>
                    <QuickLinksHeader>Quick Link</QuickLinksHeader>

                    <QuickLinksList>
                        <QuickLinksItems>
                            <QuickLinksLinks href="#" >About Us</QuickLinksLinks>
                        </QuickLinksItems>
                        <QuickLinksItems>
                            <QuickLinksLinks href="#" > Terms & Conditions</QuickLinksLinks>
                        </QuickLinksItems>
                        <QuickLinksItems>
                            <QuickLinksLinks href="#" >User’s Guide</QuickLinksLinks>
                        </QuickLinksItems>
                        <QuickLinksItems>
                            <QuickLinksLinks href="#" >Support Center</QuickLinksLinks>
                        </QuickLinksItems>
                        <QuickLinksItems>
                            <QuickLinksLinks href="#" >Press Info</QuickLinksLinks>
                        </QuickLinksItems>

                    </QuickLinksList>

                </QuickLinks>

                <Contact isMobile={isMobile}>
                    <ContactHeader>Contact Us</ContactHeader>
                    <ContactContent>info@findhouse.com</ContactContent>
                    <ContactContent>Collins Street West, Victoria 8007, Australia.</ContactContent>
                    <ContactContent>+1 246-345-0695</ContactContent>
                </Contact>

                <Follow isMobile={isMobile}>
                <FollowHeader>Follow us</FollowHeader>
                <FollowIconList>
                    <FollowIcon href="/#">
                        <SVGIcon name="facebook" width="15px" height="15px" className= {footerStyles.styleIcon} />
                    </FollowIcon>
                    <FollowIcon href="#">
                        <SVGIcon name="twitter" width="15px" height="15px" />
                    </FollowIcon>
                    <FollowIcon href="#">
                        <SVGIcon name="instagram" width="15px" height="15px" />
                    </FollowIcon>
                    <FollowIcon href="#">
                        <SVGIcon name="pinterest" width="15px" height="15px" />
                    </FollowIcon>
                    <FollowIcon href="#">
                        <SVGIcon name="dribbble" width="15px" height="15px" />
                    </FollowIcon>
                    <FollowIcon href="#">
                        <SVGIcon name="google" width="15px" height="15px" />
                    </FollowIcon>
                </FollowIconList>
                
                <SubscribeHeader>Subscribe</SubscribeHeader>
                <FollowInput>
                    <CNTextField type="largeBorderRadius" placeholder="Your email" className={footerStyles.textField} ></CNTextField>
                    <CNButton className={footerStyles.styleBtn} >
                        <SVGIcon name="arrowright" width="12" height="12" />
                    </CNButton>
                </FollowInput>
                
               </Follow>
            </TopFooterContainer>

            <BottomFooterContainer isMobile={isMobile}>
                <ListContainer isMobile={isMobile}>
                    <BottomFooterList>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Home </BottomFooterLinks>
                        </BottomFooterItems>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Listing </BottomFooterLinks>
                        </BottomFooterItems>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Property </BottomFooterLinks>
                        </BottomFooterItems>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Pages </BottomFooterLinks>
                        </BottomFooterItems>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Blog </BottomFooterLinks>
                        </BottomFooterItems>
                        <BottomFooterItems>
                            <BottomFooterLinks href="#">Contact </BottomFooterLinks>
                        </BottomFooterItems>
                    </BottomFooterList>
                </ListContainer>
                <MadeByContainer>
                    <MadeByContent isMobile={isMobile} >© 2020 Homeo. Made with love.</MadeByContent>
                </MadeByContainer>
            </BottomFooterContainer>

        </FooterContainer>

    )

}

