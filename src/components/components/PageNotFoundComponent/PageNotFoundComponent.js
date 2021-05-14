import React from 'react'

import styled, { css } from 'styled-components'
import { makeStyles } from "@material-ui/core"
import { CNTextField } from '../../shared/CNTextField/CNTextField'
import { CNButton } from '../../shared/CNButton/CNButton'

import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import useIsMobile from "@Core/hooks/useIsMobile";
import PageNotFoundImg from '../../../assets/background/error.png';
const usePageNotFoundStyles = makeStyles((theme) => ({
    SVGIcon: {
        marginRight: 20,
        cursor: "pointer",
        "&:hover": {
            fill: theme.palette.primary.main,
            transition: ".2s"
        }
    },
    TextField: {
        padding: "10px 0",
        marginBottom: 20
    },
    Button: {
        textTransform: "none",
        width: "100%",
        fontSize: 18,
        padding: "12px 30px",
        height: 60,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.secondary,
            transition: ".2s"
        },

    }
}))
const AlignCenter = css`
display: flex;
justify-content: center;
align-items: center;
`
const Background = styled.div`
    background-color: #F7F7F7;
    width:100%;
    ${AlignCenter};
`
const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 70px 0;
    ${AlignCenter};
    flex-direction: column;
    padding-left: ${props => props.isMobile ? "10px" : "0"};
    padding-right: ${props => props.isMobile ? "10px" : "0"};
`
const TopImage = styled.img`
    margin-bottom: 40px;
    width: ${props => props.isMobile ? "100%" : "auto"}
`
const Slogan = styled.h4`
    font-size:40px;
    color:${props => props.theme.palette.text.primary};
    margin: 0;
    
`
const Description = styled.p`
    color:${props => props.theme.palette.text.primary};
    font-size:20px;
    text-align: center;
`
const Content = styled.div`
    ${AlignCenter};
    flex-direction: column;
    width:100%;
    
`
const TextFieldWrapper = styled.div`
width: ${props => props.isMobile ? "100%" : "60%"};
`
const ButtonWrapper = styled.div`
width: ${props => props.isMobile ? "80%" : "20%"};
`
export const PageNotFoundComponent = () => {
    const { isMobile } = useIsMobile();
    const PageNotFoundComponentStyles = usePageNotFoundStyles();
    return (
        <Background>
            <Container isMobile={isMobile}>
                <TopImage isMobile={isMobile} src={PageNotFoundImg}></TopImage>
                <Slogan>404</Slogan>
                <Description>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</Description>
                <Content className={PageNotFoundComponentStyles.Content}>
                    <TextFieldWrapper isMobile={isMobile}>
                        <CNTextField className={PageNotFoundComponentStyles.TextField} placeholder="Search" endAdornment={<SVGIcon width="30px" height="30px" className={PageNotFoundComponentStyles.SVGIcon} name="search" />} fullWidth />
                    </TextFieldWrapper>
                    <ButtonWrapper isMobile={isMobile}>
                        <CNButton type="main" className={PageNotFoundComponentStyles.Button}>Back to Home</CNButton>
                    </ButtonWrapper>

                </Content>
            </Container>
        </Background>
    )
}
