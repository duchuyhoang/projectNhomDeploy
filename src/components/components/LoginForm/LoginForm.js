import React, { useRef, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CNButton } from '@Components/shared/CNButton/CNButton';
import useIsMobile from '@Core/hooks/useIsMobile';
import { makeStyles } from '@material-ui/core';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import { CNTextField } from '@Components/shared/CNTextField/CNTextField';
import { CNCheckBox } from '@Components/shared/CNCheckBox/CNCheckBox';
import { uuid } from '@Ultis/uuid';

const useLogInFormStyle = makeStyles((theme) => ({
  root: {
    zIndex: 2001,
  },
  IconFbStyle: {
    padding: '0 80px 0 2px',
    height: '18px',
    width: '18px',
  },
  FbBtnStyle: {
    display: 'flex',
    justifyContent: 'start',
    margin: '12px 0 0 0',
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
  textFieldStyle: {
    width: '340px',
    border: '1px solid #ccc',
    height: '50px',
    '&>input': {
      fontSize: '14px',
      lineHeight: '1.75',
      color: '#484848',
    },
  },

  textCheckBox: {
    margin: '12px 20px 0 0',
    fontSize: '15px',
    lineHeight: '1.6',
  },

  checkBoxStyle: {
    height: '20px',
    width: '20px',
    marginLeft: '10px',
    '&>span>span>svg': {
      height: '20px',
      width: '20px',
      marginBottom: '1px',
    },
  },

  buttonLogInStyle: {
    fontSize: '16px',
    fontWeight: '700',
    width: '340px',
    textTransform: 'none',
  },

  iconTextFieldStyle: {
    height: '28px',
    width: '28px',
  },
}));

// Bass css
const AlignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Animation
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const upToDown = keyframes`
    from {
        transform: translateY(-50%);
        opacity: 0;
        transform: scale(50%);
    }
    to {
        transform: translateY(0%);
        opacity: 1;
        transform: scale(100%);
    }
`;

// Background
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  ${AlignCenter};
  z-index: 2001;
  margin: auto;
  top: 0;
  animation: ${fadeIn} linear 0.1s;
`;
// Log In Form Container
const LogInForm = styled.div`
  height: 600px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  max-width: 812px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  z-index: 2002;
  border-radius: 10px;
  box-sizing: border-box;
  vertical-align: middle;
  animation: ${upToDown} ease-in-out 0.3s;
`;
// Left Img
const FormLeft = styled.div`
  width: ${(props) => (props.isMobile ? '0' : '100% ')};
  ${AlignCenter};
  justify-content: flex-start;
  text-align: center;
  margin-left: 14px;
`;
const ModalImg = styled.img`
  width: ${(props) => (props.isMobile ? '0' : '390px')};
  height: ${(props) => (props.isMobile ? '0' : '540px')};
  border-radius: 10px 0 0 10px;
  background: #000;
  margin-bottom: 24px;
`;
// Right-Form-LogIn
const ModalContent = styled.div`
  ${AlignCenter};
  justify-content: space-evenly;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  width: 100%;
  padding: 12px 0 38px 0;
  min-width: 406px;
`;

//Header
const HeaderLogIn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: -24px;
`;
const HeaderLogInClose = styled.a`
  margin: 0 0 10px 146px;
  right: 0;
`;
const HeaderLogInText = styled.h2`
  color: #006c70;
  font-size: 18px;
  margin-left: 150px;
`;
// Line Cross Text "Or"
const LineHeaderLogIn = styled.div`
  width: 100%;
  position: relative;
  text-align: center;

  > * {
    &:first-child {
      position: relative;
      padding: 0 5px;
      background-color: #fff;
      text-transform: capitalize;
      color: #006c70;
      font-size: 14px;
      font-weight: 500;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 340px;
    height: 1px;
    background-color: #ebebeb;
    ${AlignCenter};
    margin-left: 24px;
  }
`;
//Checkbox, forgot password
const UnderTextField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 0 10px 0;
  padding-bottom: 10px;

  > * {
    &:last-child {
      text-decoration: none;
      color: #8b91dd;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.75;
      margin-right: 15px;
    }
  }
`;
const CheckboxForm = styled.div``;

// Text and <a>
const UnderButton = styled.div`
  font-size: 15px;
  > * {
    &:last-child {
      text-decoration: none;
      color: #662426;
      font-size: 15px;
      font-weight: 700;
      font-size: 14px;
    }
  }
`;
export const LoginForm = ({
  showModal,
  setShowModal,
  setSelectedHomeModal,
}) => {
  const { isMobile } = useIsMobile();
  const logInFormStyle = useLogInFormStyle();

  const modalRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const [checkBoxState, setCheckBoxState] = React.useState([
    {
      label: 'Keep me signed in',
      value: 'Keep me signed in',
      id: uuid(),
      isChecked: false,
    },
  ]);

  return (
    <>
      <LogInForm className="modal">
        <FormLeft isMobile={isMobile}>
          <ModalImg
            isMobile={isMobile}
            src="https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/bg-login.jpg"
            alt="room"
          />
        </FormLeft>

        <ModalContent>
          <HeaderLogIn>
            <HeaderLogInText>Login</HeaderLogInText>
            <HeaderLogInClose href="#">
              <SVGIcon
                name="close"
                width="10px"
                height="10px"
                fill="#006c70"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </HeaderLogInClose>
          </HeaderLogIn>
          <CNButton className={logInFormStyle.FbBtnStyle}>
            <SVGIcon
              name="facebook"
              width="15px"
              height="15px"
              fill="#506dab"
              className={logInFormStyle.IconFbStyle}
            />
            Login with Facebook
          </CNButton>

          <CNTextField
            type="smallBorderRadius"
            placeholder="Enter usename or email"
            className={logInFormStyle.textFieldStyle}
            endAdornment={
              <SVGIcon
                name="user"
                width="15px"
                height="15px"
                fill="#006c70"
                className={logInFormStyle.iconTextFieldStyle}
              />
            }
          ></CNTextField>
          <CNTextField
            type="password"
            placeholder="Enter password"
            className={logInFormStyle.textFieldStyle}
            endAdornment={
              <SVGIcon
                name="password"
                width="15px"
                height="15px"
                fill="#006c70"
                className={logInFormStyle.iconTextFieldStyle}
              />
            }
          ></CNTextField>

          <UnderTextField>
            <CheckboxForm>
              <CNCheckBox
                label={checkBoxState.label}
                data={checkBoxState}
                checkBoxState={checkBoxState}
                setCheckBoxState={setCheckBoxState}
                key={checkBoxState.id}
                value={checkBoxState.value}
                className={logInFormStyle.checkBoxStyle}
              ></CNCheckBox>
              <span className={logInFormStyle.textCheckBox}>
                Keep me signed in
              </span>
            </CheckboxForm>
            <a href="#">Lost Your Password?</a>
          </UnderTextField>

          <CNButton type="main" className={logInFormStyle.buttonLogInStyle}>
            Login
          </CNButton>

          <UnderButton>
            Don't you have an account?
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedHomeModal('register');
              }}
            >
              {' '}
              Register
            </a>
          </UnderButton>
        </ModalContent>
      </LogInForm>
    </>
  );
};
