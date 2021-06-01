import React from 'react'
import useIsMobile from "@Core/hooks/useIsMobile";

import styled from 'styled-components'
import { makeStyles } from "@material-ui/core"
import clsx from 'clsx';
import { CNPropertyLabel } from '../../shared/CNPropertyLabel/CNPropertyLabel'
import { SVGIcon } from '../../shared/SvgIcon/Icon'
const useUserProfileStyles = makeStyles((theme) => {
    return {
        memberMetas: {
            "& > div": {
                marginTop: 15
            }
        },
        memberLink: {
            textDecoration: "none",
            color: theme.palette.text.primary,
            transition: "all .2s",
            "&:hover": {
                color: theme.palette.primary.main
            }
        },
        memberSocialLink: {
            marginRight: 10,
            transition: "all .2s",
            "&:hover > svg": {
                fill: theme.palette.primary.main
            }
        }

    }
})
const Container = styled.div`
    display: flex;
    align-items:${props => props.isMobile ? 'flex-start' : 'center'};
    padding: 10px;
    border: 1px solid;
    border-color: ${props => props.theme.border.main};
    flex-direction: ${props => props.isMobile ? 'column' : 'row'}; 
    background-color: #fff;
    border-radius:3px;
    box-sizing: border-box;
    font-family: ${props => props.theme.typography.fontFamily};
`
const ImageWrapper = styled.div`
    background-image: url(${props => props.avatar});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 260px;
    width: ${props => props.isMobile ? '100%' : '260px'};
    position: relative;
    border-radius: 3px;
    margin-bottom: ${props => props.isMobile ? '15px' : '0'};
`
const Label = styled.span`
    position: absolute;
    top: 10px;
    left:10px;
`

const UserInfo = styled.div`
    flex: 1;
    font-size: 14px;
    color:${props => props.theme.palette.text.primary};
    padding-left: ${props => props.isMobile ? '0' : '30px'};
`
const TitleWrapper = styled.div`
    display: flex;
   
`
const TitleName = styled.h1`
    font-size:18px;
    font-weight:700;
    margin-right: 4px;
`
const TitleFeature = styled.span`
`
const JobPropperty = styled.div`
    color: ${props => props.theme.palette.primary.main};
    margin-top: 15px;
`
const MemberMetas = styled.div`
    margin-top: 15px;
`
const MemberPhone = styled.div`
`
const MemberFax = styled.div`
`
const MemberEmail = styled.div``
const MemberWebsite = styled.div``
const MemberSocialLinks = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
`
export const UserProfile = (props) => {
    const { avatar, quantityProperty, name, job, phone, fax, email, website, link } = props;
    const { isMobile } = useIsMobile();
    const userProfileStyles = useUserProfileStyles();
    return (
        <>
            <Container isMobile={isMobile}>
                <ImageWrapper avatar={avatar} isMobile={isMobile}>
                    <Label>
                        <CNPropertyLabel type="feature">{quantityProperty} Properties</CNPropertyLabel>
                    </Label>
                </ImageWrapper>
                <UserInfo isMobile={isMobile}>
                    <TitleWrapper>
                        <TitleName>{name}</TitleName>
                        <TitleFeature title="feature">
                            <SVGIcon name="star" />
                        </TitleFeature>
                    </TitleWrapper>
                    <JobPropperty>{job}</JobPropperty>
                    <MemberMetas className={userProfileStyles.memberMetas}>
                        <MemberPhone>
                            <span>Phone: </span>
                            <a className={userProfileStyles.memberLink} href={`tel:${phone}`}>{phone}</a>
                        </MemberPhone>
                        <MemberFax>
                            <span>Fax: </span>
                            <a className={userProfileStyles.memberLink} href={`tel:${fax}`}>{fax}</a>
                        </MemberFax>
                        <MemberEmail>
                            <span>Email: </span>
                            <a className={userProfileStyles.memberLink} href={email} target="_blank">{email}</a>
                        </MemberEmail>
                        <MemberWebsite>
                            <span>Website: </span>
                            <a className={userProfileStyles.memberLink} href={website}>{website}</a>
                        </MemberWebsite>
                        <MemberSocialLinks>
                            <a className={clsx(userProfileStyles.memberLink, userProfileStyles.memberSocialLink)} target="_blank" href={link}><SVGIcon name='facebook' /></a>
                            <a className={clsx(userProfileStyles.memberLink, userProfileStyles.memberSocialLink)} target="_blank" href={link}><SVGIcon name='twitter' /></a>
                            <a className={clsx(userProfileStyles.memberLink, userProfileStyles.memberSocialLink)} target="_blank" href={link}><SVGIcon name='linkedin' /></a>
                            <a className={clsx(userProfileStyles.memberLink, userProfileStyles.memberSocialLink)} target="_blank" href={link}><SVGIcon name='dribbble' /></a>
                        </MemberSocialLinks>
                    </MemberMetas>

                </UserInfo>
            </Container>
        </>
    )
}