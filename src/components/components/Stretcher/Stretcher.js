import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNButton } from "@Components/shared/CNButton/CNButton";
import useIsMobile from "@Core/hooks/useIsMobile";
import styled from 'styled-components';

const useStretcherStyles = makeStyles((theme) => ({
  
  styleBtn: {
    width: "200px",
    height: "60px",
    backgroundColor:"#FF787C",
    "&:hover" :{
      backgroundColor:'#fff' 
    },
  },

}))


export const Stretcher = (props) => {
  const {isMobile} = useIsMobile();

  const stretcherStyle = useStretcherStyles()

  const HeaderStretcher = styled.h1`
      color: #fff;
      font-size: ${isMobile ? "22px" : "30px"};
      margin: ${isMobile ? "16px 0 16px 0" : "0"};
      line-height: 1;
      padding-bottom:${isMobile ? "0" : "10px"};
    `
  const BodyStretcher = styled.p`
      color:#fff;
      margin:  ${isMobile ? "-18px 0 0 0" : "-34px 0 0 0"};
      font-size: ${isMobile ? "14px" : "16px"};
  `
  const RootStretcher = styled.div`
      display: flex;
      height: ${isMobile ? "180px" : "150px"};
      width: 100%;
      background-color: ${props=> props.theme.palette.primary.main};
      justify-content: ${isMobile ? "space-between" : "space-around"};
      font-family: ${props=> props.theme.typography.fontFamily};
      flex-direction: ${isMobile ? "column" : "row"};
  `
  const TextContainer = styled.div`
      display:  flex ;
      width:  100% ;
      height: 100% ;
      margin-left:  ${isMobile ? "16px" : "0"}; 
      flex-direction:  column ;
      justify-content:  space-evenly ;
      text-align: ${isMobile ? "inherit" : "center"};
  `

  const BtnContainer = styled.div`
      display:  ${isMobile ? "inline-block" : "flex"};
      width: 100%;
      height: 100%;
      margin-left: ${isMobile ? "16px" : "0"};    
      justify-content: ${isMobile ? "inherit" : "center"};
      align-items: ${isMobile ? "inherit" : "center"};
  `
  return (
    <RootStretcher classes={stretcherStyle} >
      <TextContainer >
        <HeaderStretcher className={stretcherStyle.styleHeader}>Become a Real Estate Agent</HeaderStretcher>
        <BodyStretcher className={stretcherStyle.styleBody} >We only work with the best companies around the globe</BodyStretcher>
      </TextContainer>

      <BtnContainer >       
          <CNButton type="main" className={stretcherStyle.styleBtn} >Register Now</CNButton>
      </BtnContainer>
      
    </RootStretcher>

  )

}