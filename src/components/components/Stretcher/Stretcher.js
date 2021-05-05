import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNButton } from "@Components/shared/CNButton/CNButton";
import useIsMobile from "@Core/hooks/useIsMobile";
import styled from 'styled-components';

const useStretcherStyles = makeStyles((theme) => ({

  styleBtn: {
    width: "200px",
    height: "60px",
    backgroundColor: "#FF787C",
    "&:hover": {
      backgroundColor: '#fff'
    },
  },

}))

const HeaderStretcher = styled.h1`
      color: #fff;
      font-size: ${props => props.isMobile ? "22px" : "30px"};
      margin: ${props => props.isMobile ? "16px 0 16px 0" : "0"};
      line-height: 1;
      padding-bottom:${props => props.isMobile ? "0" : "10px"};
    `
const BodyStretcher = styled.p`
      color:#fff;
      margin:  ${props => props.isMobile ? "-18px 0 0 0" : "-34px 0 0 0"};
      font-size: ${props => props.isMobile ? "14px" : "16px"};
  `
const RootStretcher = styled.div`
      display: flex;
      height: ${props => props.isMobile ? "180px" : "150px"};
      width: 100%;
      background-color: ${props => props.theme.palette.primary.main};
      justify-content: ${props => props.isMobile ? "space-between" : "space-around"};
      font-family: ${props => props.theme.typography.fontFamily};
      flex-direction: ${props => props.isMobile ? "column" : "row"};
  `
const TextContainer = styled.div`
      display:  flex ;
      width:  100% ;
      height: 100% ;
      margin-left:  ${props => props.isMobile ? "16px" : "0"}; 
      flex-direction:  column ;
      justify-content:  space-evenly ;
      text-align: ${props => props.isMobile ? "inherit" : "center"};
  `

const BtnContainer = styled.div`
      display:  ${props => props.isMobile ? "inline-block" : "flex"};
      width: 100%;
      height: 100%;
      margin-left: ${props => props.isMobile ? "16px" : "0"};    
      justify-content: ${props => props.isMobile ? "inherit" : "center"};
      align-items: ${props => props.isMobile ? "inherit" : "center"};
  `



export const Stretcher = (props) => {
  const { isMobile } = useIsMobile();

  const stretcherStyle = useStretcherStyles()


  return (
    <RootStretcher isMobile={isMobile}>
      <TextContainer isMobile={isMobile}>
        <HeaderStretcher isMobile={isMobile} className={stretcherStyle.styleHeader}>Become a Real Estate Agent</HeaderStretcher>
        <BodyStretcher isMobile={isMobile} className={stretcherStyle.styleBody} >We only work with the best companies around the globe</BodyStretcher>
      </TextContainer>

      <BtnContainer isMobile={isMobile}>
        <CNButton type="main" className={stretcherStyle.styleBtn} >Register Now</CNButton>
      </BtnContainer>

    </RootStretcher>

  )

}