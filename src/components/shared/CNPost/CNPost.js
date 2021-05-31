import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CNFavourite from '../CNFavourite/CNFavourite';
import { CNPropertyLabel } from '../CNPropertyLabel/CNPropertyLabel';
const useStyles = makeStyles((theme) => ({
  paper: {
    boxSizing: 'border-box',
    width: '360px',
    minHeight: '400px',
    padding: '10px',
    backgroundColor: '#fff',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  image: {
    display: 'inline-block',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius: '4px',
    '&::before': {
      content: '""',
      backgroundColor: '#1d293e',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      opacity: '0.4',
    },
  },
  labelItem: {
    display: 'block',
    position: 'absolute',
    top: '10px',
    left: '10px',
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
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1.4',
    textDecoration: 'none',
  },
}));

const Slider = styled.div``;

const ItemSlide = styled.div`
  max-width: 100%;

  overflow: hidden;
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
`;
const PriceItem = styled.a`
  font-size: 22px;
  color: #fff;
  line-height: 1.7;
  font-weight: 700;
  display: inline-block;
  flex: 1 1 auto;
`;
const ContentProperty = styled.div``;
const PropertyType = styled.div``;
const PropertyTitle = styled.div``;
const PropertyLocation = styled.div``;
const PropertyMetas = styled.div``;
const Bottom = styled.div``;

function CNPost(props) {
  const classes = useStyles();
  return (
    <Paper elevation={4} className={classes.paper}>
      <Slider>
        <ItemSlide>
          <img
            className={classes.image}
            src={
              'https://www.demoapus-wp1.com/homeo/wp-content/uploads/2020/04/8-850x550.jpg'
            }
          />
          <CNPropertyLabel
            className={classes.labelItem}
            children={`For Sale`}
          />
          <ItemBottom>
            <PriceItem>$5000</PriceItem>
            <CNFavourite />
          </ItemBottom>
        </ItemSlide>
      </Slider>
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
              Phòng trọ
            </a>
          </Typography>
        </PropertyTitle>
        <PropertyLocation></PropertyLocation>
        <PropertyMetas></PropertyMetas>
      </ContentProperty>
      <Bottom></Bottom>
    </Paper>
  );
}

export default CNPost;
