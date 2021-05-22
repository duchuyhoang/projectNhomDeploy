import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';

const useStyleStar = makeStyles((theme) => ({
  root: (props) => ({}),
  iconEmpty: (props) => ({
    color: '#e1e1e1',
  }),
  iconHover: { color: '#bcc52a' },
  iconFocus: { color: '#bcc52a' },
  iconActive: { color: '#bcc52a' },
  iconFilled: { color: '#bcc52a' },
}));

function CNStar({ values, size, ...rest }) {
  const [value, setValue] = useState(values);
  const stylesStar = useStyleStar();
  return (
    <div>
      <Rating
        name="half-rating"
        value={value}
        classes={stylesStar}
        precision={0.5}
        size={size}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        {...rest}
      />
    </div>
  );
}

export default CNStar;
