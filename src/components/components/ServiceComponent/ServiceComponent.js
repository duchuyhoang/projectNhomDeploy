import React,{useState} from 'react'
import styled, { css } from 'styled-components'
import { makeStyles } from "@material-ui/core"
import { CNCard } from '@Components/shared/CNCard/CNCard'
import useIsMobile from "@Core/hooks/useIsMobile"
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";

const useServiceComponentStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "block",

        height: "100%",
        paddingTop: 40,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: `${theme.palette.primary.main}`,
            "& $SVGContainer": {
                backgroundColor: "#fff",
                transition: ".2s"
            },
            "& $CardTitle": {
                color: "#fff",
                transition: ".3s",
                transitionDelay: ".2s"
            },
            "& $CardInfo": {
                color: "#fff",
                transition: ".3s",
                transitionDelay: ".4s"
            },
        },
    },
    SVGContainer: {},
    SVGStyles: {
        fill: `${theme.palette.primary.main}`
    },
    CardTitle: {},
    CardInfo: {}

}))
const alignCenter = css`
display: flex;
justify-content:center;
align-items:center;
`
const Background = styled.div`
    width: 100%;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
   
    padding: 60px 0;
    font-family: ${props => props.theme.typography.fontFamily};
    max-width:1200px;
    width:100%;
    text-align: center;
    
`
const ContainerHeading = styled.h3`
    color: ${props => props.theme.palette.text.primary};
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 16px;
    margin-top:0;
    font-weight: 500;
`
const ContainerDescription = styled.p`
    font-size: 20px;
     color: ${props => props.theme.palette.text.primary};
    margin-bottom: 16px;
    font-weight: 300;
`
const ContainerCardList = styled.div`
display: ${props => props.isMobile ? "block" : "flex"};
flex-wrap: wrap;
justify-content:center;
align-items:stretch;
`
const CardWrapper = styled.div`
    width: ${props => props.isMobile ? "100%" : "31%"};
    margin: ${props => props.isMobile ? "0 0 20px 0" : "0 10px 40px"};
    border-radius: 10px;
    cursor: pointer;
    padding: ${props => props.isMobile ? "10px" : "20px"};
    box-sizing: border-box;
`
const SVGContainer = styled.div`
    
    border-radius:100%;
    height: 160px;
    width:160px;
    background-color:#FFE8E9;
    ${alignCenter};
`
const CardTitle = styled.h3`
    font-size:24px;
    font-weight:800;
    text-transform:capitalize;
    color: ${props => props.theme.palette.text.primary};
`
const CardInfo = styled.p`
font-size:14px;
color: ${props => props.theme.palette.text.primary};
`
export const ServiceComponent = (props) => {
    const { isMobile } = useIsMobile();
    const serviceComponentStyles = useServiceComponentStyles();

    const [cardList, setCardList] = useState([{
        SVGIcon: "highFive",
        title: "Trusted By Thousands",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "home",
        title: "Wide Renge Of Properties",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "profitcalculator",
        title: "Financing Made Easy",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    }, {
        SVGIcon: "home",
        title: "Wide Renge Of Properties",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "profitcalculator",
        title: "Financing Made Easy",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    }])

    return (
        <Background>
            <Container>
                <ContainerHeading>Why Choose Us</ContainerHeading>
                <ContainerDescription>We provide full service at every step</ContainerDescription>
                <ContainerCardList isMobile={isMobile}>

                    {cardList.map((item) => {
                        return <CardWrapper isMobile={isMobile}>
                            <CNCard
                                className={serviceComponentStyles.cardContainer}
                                headerComponent={
                                    <SVGContainer className={serviceComponentStyles.SVGContainer}>
                                        <SVGIcon className={serviceComponentStyles.SVGStyles} name={item.SVGIcon} width="80px" height="80px" /></SVGContainer>
                                }
                                bodyComponent={
                                    <>
                                        <CardTitle className={serviceComponentStyles.CardTitle}>{item.title}</CardTitle>
                                        <CardInfo className={serviceComponentStyles.CardInfo}>{item.description}</CardInfo>
                                    </>
                                }
                                footerComponent={false} />
                        </CardWrapper>

                    })}
                </ContainerCardList>
            </Container>
        </Background>
    )
}