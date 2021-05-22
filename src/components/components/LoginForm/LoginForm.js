import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CNButton } from '@Components/shared/CNButton/CNButton';
import useIsMobile from '@Core/hooks/useIsMobile';
import { FormControl, FormHelperText, makeStyles } from '@material-ui/core';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import { CNTextField } from '@Components/shared/CNTextField/CNTextField';
import { CNCheckBox } from '@Components/shared/CNCheckBox/CNCheckBox';
import { uuid } from '@Ultis/uuid';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    // margin: '12px 20px 0 0',
    fontSize: '15px',
    lineHeight: '1.6',
  },

  checkBoxStyle: {
    height: '20px',
    width: '20px',
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
    margin: '0',
  },

  iconTextFieldStyle: {
    height: '28px',
    width: '28px',
  },
  formStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '70%',
    marginTop: '40px',
  },
  helperTextStyles: {
    color: 'red',
    position: 'absolute',
    bottom: '-18px',
  },
  formControlCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
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
  color: #141414;
  width: 100%;
  padding: 30px;
  padding-top: 20px;
`;

//Header
const HeaderLogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;
const HeaderLogInClose = styled.a``;
const HeaderLogInText = styled.h2`
  color: #006c70;
  font-size: 18px;
`;
// Line Cross Text "Or"
const LineHeaderLogIn = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  > * {
    &:first-child {
      position: absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 5px;
      background-color: #fff;
      text-transform: capitalize;
      color: #006c70;
      font-size: 14px;
      font-weight: 700;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    /*  */
  }
`;
//Checkbox, forgot password
const UnderTextField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > * {
    &:last-child {
      text-decoration: none;
      color: #8b91dd;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.75;
    }
  }
`;
const CheckboxForm = styled.div`
  padding: 0;
`;

// Text and <a>
const UnderButton = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
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

  const [checkBoxState, setCheckBoxState] = useState([
    {
      label: 'Keep me signed in',
      value: 'Keep me signed in',
      id: uuid(),
      isChecked: false,
    },
  ]);

  //visible password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  //validate form
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Email is not valid'),
    password: yup.string().required('Please enter your password'),
    keepLogin: yup
      .boolean()
      .test('keep', 'Please keep login!', (value) => value),
  });

  const { control, formState, handleSubmit } = useForm({
    defaultValue: {
      email: '',
      password: '',
      keepLogin: false,
    },
    resolver: yupResolver(schema),
  });
  console.log('Error:', formState.errors);

  const handleLoginSubmit = (values) => {
    console.log(values);
  };

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
          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className={logInFormStyle.formStyle}
          >
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
            <LineHeaderLogIn>
              <span>Or</span>
            </LineHeaderLogIn>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <FormControl fullWidth>
                  <CNTextField
                    type="text"
                    placeholder="Enter your email"
                    className={logInFormStyle.textFieldStyle}
                    inputChange={onChange}
                    fullWidth
                    error={!!formState.errors['email']}
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
                  <FormHelperText className={logInFormStyle.helperTextStyles}>
                    {formState.errors['email']?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange } }) => (
                <FormControl fullWidth>
                  <CNTextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    error={!!formState.errors['password']}
                    inputChange={onChange}
                    className={logInFormStyle.textFieldStyle}
                    fullWidth
                    endAdornment={
                      <SVGIcon
                        name="password"
                        width="15px"
                        height="15px"
                        fill="#006c70"
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        style={{ cursor: 'pointer' }}
                        className={logInFormStyle.iconTextFieldStyle}
                      />
                    }
                  ></CNTextField>
                  <FormHelperText className={logInFormStyle.helperTextStyles}>
                    {formState.errors['password']?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />

            <UnderTextField>
              <CheckboxForm>
                <Controller
                  name="keepLogin"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <FormControl className={logInFormStyle.formControlCheckBox}>
                      <CNCheckBox
                        label={checkBoxState.label}
                        data={checkBoxState}
                        checkBoxState={checkBoxState}
                        setCheckBoxState={setCheckBoxState}
                        key={checkBoxState.id}
                        error={!!formState.errors['keepLogin']}
                        value={checkBoxState.value}
                        className={logInFormStyle.checkBoxStyle}
                        onChange={onChange}
                      ></CNCheckBox>
                      <FormHelperText
                        className={logInFormStyle.helperTextStyles}
                      >
                        {formState.errors['keepLogin']?.message}
                      </FormHelperText>
                      <span className={logInFormStyle.textCheckBox}>
                        Keep me signed in
                      </span>
                    </FormControl>
                  )}
                />
              </CheckboxForm>
              <a href="#">Lost Your Password?</a>
            </UnderTextField>

            <CNButton
              buttonType="main"
              fullWidth
              type="submit"
              className={logInFormStyle.buttonLogInStyle}
            >
              Login
            </CNButton>
          </form>

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
