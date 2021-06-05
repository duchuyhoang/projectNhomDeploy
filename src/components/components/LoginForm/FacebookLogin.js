import React from "react";
import { makeStyles } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
import { CNButton } from '@Components/shared/CNButton/CNButton';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import {authActions} from "@Core/redux/auth";
import {useDispatch} from "react-redux"


import "./FacebookButtonStyle.css"


const useLogInFormStyle = makeStyles((theme) => ({
  FbBtnStyle: {
    display: 'flex',
    justifyContent: 'start',
    margin: '0',
    backgroundColor: '#fff',
    border: '1px solid #506dab',
    color: '#506dab',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    width: '340px',
    textTransform: 'none',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#506dab',
      '& > span > svg': {
        fill: '#fff',
      },
    },
  },
}))



export const FacebookLoginComponent = () => {
  const logInFormStyle = useLogInFormStyle();
const dispatch=useDispatch();

  return (
    <>
      <FacebookLogin
        appId={977268439690903}
        fields="name,email,picture"
        callback={(response) => {
          dispatch(authActions.loginFacebook({email: response.email,accessToken: response.accessToken}));
          console.log("facebook", response);
        }}
        render={renderProps => (
          <CNButton className={logInFormStyle.FbBtnStyle}>
            <SVGIcon
              name="facebook"
              width="15px"
              height="15px"
              version="3.1"
              fill="#506dab"
              className={logInFormStyle.IconFbStyle}
              onClick={(e) => {
                console.log("Clicked");
              }}
            />
              Login with Facebook
          </CNButton>
        )}
      >

      </FacebookLogin>
    </>
  )
}