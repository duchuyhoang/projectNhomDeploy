import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useButtonStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: props.buttonType === "main" ? theme.palette.primary.main : "#24334A",
    color: props.buttonType==="main" ? theme.palette.primary.main : "#24334A",
    borderRadius: props.buttonType==="main" ? "6px" : "20px",
    margin:"10px 0",
    minWidth:"130px",
    height:"50px",
    fontWeight:"800",
    
  }),
  contained: (props) => ({
    color: theme.palette.text.secondary,
    fontWeigth:"600",
    boxShadow:"none",

  }),
  outlined: (props) => ({
    border: "2px solid",
    borderColor: props.buttonType === "main" ? theme.palette.primary.main : " #24334A",
  })
})

)

export const CNButton = ({ buttonType,children ,...rest }) => {
  const buttonStyle = useButtonStyles({ buttonType })
  const [variant, setVariant] = useState("contained")
  function setHoverIn() {
    setVariant("outlined")
  }
  function setHoverOut() {
    setVariant("contained")
  }
  return (
    <Button
      classes={buttonStyle}
      variant={variant}
      onMouseOver={() => setHoverIn()}
      onMouseOut={() => setHoverOut()}
      {...rest}

    >
      {children}
    </Button>
  );
}