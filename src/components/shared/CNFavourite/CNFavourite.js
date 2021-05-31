import { makeStyles } from '@material-ui/core';
import React from 'react';
import { SVGIcon } from '../SvgIcon/Icon';
import styled from 'styled-components';

const useStyle = makeStyles((theme) => ({
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Box = styled.div`
  width: 35px;
  height: 35px;
  color: #fff;
  background-color: #0f151f;
  opacity: 0.5;
  position: relative;
  border-radius: 6px;
`;

CNFavourite.propTypes = {};

function CNFavourite(props) {
  const classes = useStyle();
  return (
    <>
      <Box>
        <SVGIcon name="favourite" className={classes.icon} />
      </Box>
    </>
  );
}

export default CNFavourite;
