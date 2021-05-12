import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useIsMobile from "@Core/hooks/useIsMobile";
import styled, { keyframes} from 'styled-components';

const useCooperateStyles = makeStyles((theme) => ({

}))

const CooperateContainer = styled.div`
    height:314px;
    width:100%;
    background-color:#fff;
    font-family: ${props => props.theme.typography.fontFamily};
    text-align:center;
`
//Text
const CooperateText = styled.div`
  height:144px;
  color: #484848;
  margin:0;
  padding:15px;
  display: flex;
  flex-direction: column;
`
const HeaderCooperate = styled.h1`
      font-size:30px;
      line-height: 1;
      margin:38px 0 0 0;
    `
const BodyCooperate = styled.p`
      font-size:16px;
      
  `
//List img
const scaleItem = keyframes`
    from {
        transform: scale(100%);
    }
    to {
        transform: scale(50%);
    }
`
const CooperateImg = styled.div`
  width:100%;
  padding:0;
  margin:0;
  height:168px;
`
const CompanyList = styled.ul`
  display:flex;
  margin: 0 0 54px 0;
  padding:0;
  justify-content: space-around;
  list-style:none;
  &:hover { 
    &> li > a > img {
    transform: scale(0.9);
    }
  }
`
const CompanyItem = styled.li`
  width:100%;
  listItem {
    background-color:#ccc;
  }
  
`
const CompanyImg = styled.img`
  transition: all 0.3s ease-in-out 0s;
  &:hover { 
    transform: scale(1) !important;
  }
`
const CompanyLink = styled.a``

export const CooperateForm = (props) => {
  const { isMobile } = useIsMobile();

  const cooperateStyles = useCooperateStyles()

  return (
    <>
        <CooperateContainer>
            <CooperateText>
                <HeaderCooperate>Our Partners</HeaderCooperate>
                <BodyCooperate>We only work with the best companies around the globe</BodyCooperate>
            </CooperateText>
            <CooperateImg>
            <CompanyList>
              <CompanyItem>
                <CompanyLink href="#">
                  <CompanyImg alt="Image" src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/brand01.png"></CompanyImg>
                </CompanyLink>
              </CompanyItem>
              <CompanyItem>
                <CompanyLink href="#">
                  <CompanyImg alt="Image" src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/brand03.png"></CompanyImg>
                </CompanyLink>
              </CompanyItem>
              <CompanyItem>
                <CompanyLink href="#">
                  <CompanyImg alt="Image" src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/brand05.png"></CompanyImg>
                </CompanyLink>
              </CompanyItem>
              <CompanyItem>
                <CompanyLink href="#">
                  <CompanyImg alt="Image" src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/brand04.png"></CompanyImg>
                </CompanyLink>
              </CompanyItem>
              <CompanyItem>
                <CompanyLink href="#">
                  <CompanyImg alt="Image" src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/brand06.png"></CompanyImg>
                </CompanyLink>
              </CompanyItem>
            </CompanyList>

            </CooperateImg>
        </CooperateContainer>

    </>
  )

}

