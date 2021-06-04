import { CNAvatar } from '@Components/shared/CNAvatar/CNAvatar';
import { CNPropertyLabel } from '@Components/shared/CNPropertyLabel/CNPropertyLabel';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import RoomCardIcon from './RoomCardIcon';
import Moment from 'react-moment';
import noImage from "@Assets/background/noImage.jpg"

import './styles.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: '"Nunito", Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.75',
    boxSizing: 'border-box',
    width: '360px',
    minHeight: '400px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    '&:hover .slick-arrow': {
      transition: 'all 0.3s ease-in-out',
      visibility: 'visible',
      opacity: '1',
    },
  },
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    objectFit: 'cover',
    backgroundPosition: 'center',
  },
  labelItem: {
    display: 'block',
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: '2',
  },
  h2Type: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.75',
    textDecoration: 'none',
  },
  h2Title: {
    color: '#484848',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.4',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  slickSlide: {
    '& .slick-slide': {
      alignItems: 'flex-start',
    },
    '& .slick-arrow': {
      zIndex: '2',
      visibility: 'hidden',
      opacity: '0',
    },
  },
  mgr: {
    marginRight: '10px',
  },
  imageContainer: {
    display: 'block!important',
    width: '100%',
    height: "270px"
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: '#fff',
  },
}));

const ItemSlide = styled.div`
  position: relative;
`;
const ItemBottom = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 5px;
  left: 0;
  z-index: 2;
`;
const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d293e;
    opacity: 0.4;
    z-index: 1;
  }
`;
const PriceItem = styled.a`
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  flex: 1 1 auto;
`;
const Top = styled.div`
  padding: 10px;
`;
const ContentProperty = styled.div`
  box-sizing: border-box;
  padding: 15px 10px 5px 10px;
`;
const PropertyType = styled.div``;
const PropertyTitle = styled.div``;
const PropertyLocation = styled.div`
  display: flex;
  align-items: center;
`;
const PropertyMetas = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding-top: 8px;
`;
const MetaItem = styled.div`
  display: inline-block;
  margin-right: 30px;
`;
const Bottom = styled.div`
  box-sizing: border-box;
  border-top: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;
const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const AvatarImg = styled.div``;
const TimeRight = styled.div`
  margin-left: auto;
`;
const AvatarAuthor = styled.div`
  color: #484848;
  padding-left: 10px;
  text-decoration: none;
  > a {
    text-decoration: none;
  }
`;

function RoomCard({ name, city, district, ward, list_images, price, capacity, acreage, user_name, user_avatar, list_utilities,createTime }) {
  const classes = useStyles();
  const settings = {
    accessibility: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Paper elevation={4} className={classes.paper}>
      <Top>
        <ItemSlide>
          <ImgWrapper>
            <Slider {...settings} className={classes.slickSlide} >

              {list_images && list_images?.length !== 0 ? list_images.map((image) => {
                return (
                  <div className={classes.imageContainer}>
                    <img
                      style={{ objectFit: "cover", height: "100%" }}
                      key={image.imagesIds}
                      className={classes.image}
                      src={
                        image.imagesLinks
                      }
                    />
                  </div>
                )
              }) :
                <div className={classes.imageContainer}>
                  <img src={noImage} style={{ objectFit: "cover", height: "100%" }} />
                </div>
              }

            </Slider>
          </ImgWrapper>
          <CNPropertyLabel
            className={classes.labelItem}
            children={`For Sale`}
          />
          <ItemBottom>
            <PriceItem>{price} VNĐ</PriceItem>
            <RoomCardIcon
              selected={false}
              icon={<SVGIcon name="favourite" className={classes.icon} />}
            />
          </ItemBottom>
        </ItemSlide>
        <ContentProperty>
          <PropertyType>
            <Typography component="h2" className={classes.h2Type}>
              <a className={classes.h2Type} href="#">
                Phòng trọ
              </a>
            </Typography>
          </PropertyType>
          <PropertyTitle>
            <Typography component="h2" className={classes.h2Type}>
              <a className={classes.h2Title} href="#">
               {name}
              </a>
            </Typography>
          </PropertyTitle>
          <PropertyLocation>
            <SVGIcon name="location" className={classes.mgr} />
            <span>{ward +" , " + district +" , " + city}</span>
          </PropertyLocation>
          <PropertyMetas>
            <MetaItem>
              <span>Capacity: {capacity}</span>
            </MetaItem>
            <MetaItem>
              <span>
                Diện tích: {acreage}
                {'\u33A1'}
              </span>
            </MetaItem>
            {/* <MetaItem>
              <span>{'Khép kín'}</span>
            </MetaItem> */}
          </PropertyMetas>
        </ContentProperty>
      </Top>
      <Bottom>
        <AvatarWrapper>
          <AvatarImg>
            <a href="#">
              <CNAvatar src={user_avatar} />
            </a>
          </AvatarImg>
          <AvatarAuthor>
            <a href="#">{user_name}</a>
          </AvatarAuthor>
        </AvatarWrapper>
        <TimeRight>
         <Moment toNow>{createTime}</Moment>
        </TimeRight>
      </Bottom>
    </Paper>
  );
}

export default RoomCard;
