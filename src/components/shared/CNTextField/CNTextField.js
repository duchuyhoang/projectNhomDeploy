import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
// import { Controller } from 'react-hook-form';
import '../CNTextField/CNTextField.css';

const useTextFiledContentStyles = makeStyles((theme) => ({
  root: (props) => ({
    border: `2px solid #d8d8d8`,
    width: 300,
    borderRadius: props.largeBorderRadius === true ? 50 : 5,
    padding: '6px 20px 6px 0',
  }),
  input: (props) => ({
    color: theme.palette.text.primary,
    padding: '6px 20px',
    fontSize: 18,
    fontWeight: 500,
    '&::placeholder': {
      color: 'black',
      fontWeight: 500,
    },
  }),
  fullWidth: (props) => ({
    width: '100%',
  }),
}));

export const CNTextField = ({
  largeBorderRadius,
  inputChange,
  form,
  name,
  ...rest
}) => {
  const textFieledStyles = useTextFiledContentStyles({ largeBorderRadius });
  return (
    // <Controller
    //   name={name}
    //   control={form.control}
    //   render={({ field: { onChange, onBlur, value, name }, formState }) => (

      <Input
             
      disableUnderline={true}
      classes={textFieledStyles}
      onChange={inputChange}
      inputProps={{
          'aria-label': 'Description',
      }}
      {...rest}
   
  />
    //   )}
    // />
  );
};
