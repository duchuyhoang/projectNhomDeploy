import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import '../CNTextField/CNTextField.css';

const useTextFiledContentStyles = makeStyles((theme) => ({
  root: (props) => ({
    border: `2px solid #d8d8d8`,
    width: 300,
    borderRadius: props.largeBorderRadius === true ? 50 : 5,
    padding: '6px 20px 6px 0',
    "& input": {
      "&:-webkit-autofill": {
        transition:
          "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
      },
      "&:-webkit-autofill:focus": {
        transition:
          "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
      },
      "&:-webkit-autofill:hover": {
        transition:
          "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
      }
    }
  }
  ),
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
  error: (props) => ({
    borderColor: 'red!important',
  }),
}));

export const CNTextField = ({ largeBorderRadius, inputChange ,isAutoComplete, ...rest }) => {
  const textFieledStyles = useTextFiledContentStyles({ largeBorderRadius });
  return (
    <Input
      disableUnderline={true}
      autoComplete={isAutoComplete ? "on" : "new-password"}
      classes={textFieledStyles}
      onChange={inputChange}
      inputProps={{
        'aria-label': 'Description',
      }}
      {...rest}
    />
  );
};
