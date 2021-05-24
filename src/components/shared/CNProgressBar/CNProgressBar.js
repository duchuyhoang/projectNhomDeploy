import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useBoxContainer = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));
const useBoxTypoStyled = makeStyles((theme) => ({
  root: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
const useTextStyed = makeStyles((theme) => ({
  root: {
    fontSize: '14px',
    lineHeight: '1.75',
  },
}));

const useProgressStyled = makeStyles((theme) => ({
  root: {
    height: '10px',
  },
  colorPrimary: {
    backgroundColor: '#F5F5F5',
  },
  bar: {
    backgroundColor: '##ff5a5f',
  },
}));

function CNProgressBar({ label, value, ...rest }) {
  const boxContainer = useBoxContainer();
  const boxTypoStyled = useBoxTypoStyled();
  const textStyled = useTextStyed();
  const progressStyled = useProgressStyled();
  return (
    <Box classes={boxContainer}>
      <Box classes={boxTypoStyled}>
        <Typography classes={textStyled}>{label}</Typography>
        <Typography classes={textStyled}>{value}%</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        color="primary"
        classes={progressStyled}
        value={value}
        {...rest}
      />
    </Box>
  );
}

export default CNProgressBar;
