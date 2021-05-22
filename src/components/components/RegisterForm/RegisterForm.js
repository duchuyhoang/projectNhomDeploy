import { CNSelect } from '@Components/shared/CNSelect/CNSelect';
import { CNTextField } from '@Components/shared/CNTextField/CNTextField';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import useIsMobile from '@Core/hooks/useIsMobile';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, FormHelperText, makeStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
import * as yup from 'yup';
import { CNButton } from '../../shared/CNButton/CNButton';

RegisterForm.propTypes = {};

const useRegisterStyle = makeStyles((theme) => ({
  root: {},
  inputStyle: {
    marginBottom: '5px',
  },
  buttonStyle: {
    margin: '0',
  },
  textFieldStyle: {
    error: {
      border: '1px solid red!important',
    },
    border: '1px solid #ccc',
    height: '50px',
    '&>input': {
      fontSize: '14px',
      lineHeight: '1.75',
      color: '#484848',
    },
  },
  buttonStyle: {
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'none',
    margin: '0',
  },
  formStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%',
    marginTop: '30px',
  },
  helperTextStyles: {
    color: 'red',
    position: 'absolute',
    bottom: '-18px',
  },
}));

//Animation keyframes
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

//styled component
const FormRegister = styled.div`
  height: ${(props) => (props.isMobile ? '600' : '660')}px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  width: ${(props) => (props.isMobile ? '90%' : '810px')};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 15px;
  box-sizing: border-box;
  vertical-align: middle;
  border-radius: 6px;
  animation: ${upToDown} ease-in-out 0.3s;
`;
const FormLeft = styled.div`
  width: 50%;
  width: ${(props) => (props.isMobile ? '0' : '50%')};
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const FormContent = styled.div`
  flex-grow: 1;
  padding: ${(props) => (props.isMobile ? '0' : '10px 30px 15px')};
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const FormClose = styled.p`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const ContentTitle = styled.p`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  color: #006c70;
  font-size: 18px;
  font-weight: 700;
`;
const SmallText = styled.small`
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

function RegisterForm({ setSelectedHomeModal, setShowModal, showModal }) {
  const { isMobile } = useIsMobile();
  const RegisterStyle = useRegisterStyle();

  //custom select
  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <SVGIcon name="userGroup" width="20px" />
        </components.DropdownIndicator>
      )
    );
  };
  const options = [
    { value: 'user', label: 'User' },
    { value: 'agent', label: 'Agent' },
    { value: 'agency', label: 'Agency' },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setRetypeShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  const toggleShowRetypePassword = () => {
    setRetypeShowPassword((x) => !x);
  };
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required('Please enter your User name')
      .min(4, 'Username too short. At least 4 characters is required,'),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Email is not valid'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Password length must be greater than 5'),
    retypePassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password must be equal Confirm Password'),
  });

  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      retypePassword: '',
      role: null,
    },
    resolver: yupResolver(schema),
  });
  console.log('Error:', formState.errors);
  const handleResgisterSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormRegister isMobile={isMobile}>
      <FormLeft isMobile={isMobile}>
        <Img
          src={
            'https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/bg-register.jpg'
          }
          alt="room"
        />
      </FormLeft>
      <FormContent isMobile={isMobile}>
        <ContentHeader>
          <ContentTitle>Register</ContentTitle>
          <FormClose>
            <SVGIcon
              name="close"
              width="10px"
              height="10px"
              fill="#006c70"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </FormClose>
        </ContentHeader>
        <form
          className={RegisterStyle.formStyle}
          onSubmit={handleSubmit(handleResgisterSubmit)}
        >
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <CNTextField
                  type="text"
                  placeholder="User name"
                  className={RegisterStyle.textFieldStyle}
                  error={!!formState.errors['userName']}
                  endAdornment={
                    <SVGIcon name="user" width="21px" height="21px"></SVGIcon>
                  }
                  fullWidth
                  inputChange={onChange}
                />
                <FormHelperText className={RegisterStyle.helperTextStyles}>
                  {formState.errors['userName']?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="email"
            autoComplete="new-email"
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <CNTextField
                  type="text"
                  placeholder="Email"
                  error={!!formState.errors['email']}
                  className={RegisterStyle.textFieldStyle}
                  fullWidth
                  endAdornment={
                    <SVGIcon name="user" width="21px" height="21px" />
                  }
                  inputChange={onChange}
                />
                <FormHelperText className={RegisterStyle.helperTextStyles}>
                  {formState.errors['email']?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <CNTextField
                  autoComplete="new-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={RegisterStyle.textFieldStyle}
                  error={!!formState.errors['password']}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <SVGIcon
                        name="password"
                        width="21px"
                        height="21px"
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        style={{ cursor: 'pointer' }}
                      />
                    </InputAdornment>
                  }
                  name="password"
                  inputChange={onChange}
                />
                <FormHelperText className={RegisterStyle.helperTextStyles}>
                  {formState.errors['password']?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="retypePassword"
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <CNTextField
                  type={showRetypePassword ? 'text' : 'password'}
                  placeholder="Re-enter Password"
                  fullWidth
                  error={!!formState.errors['retypePassword']}
                  className={RegisterStyle.textFieldStyle}
                  endAdornment={
                    <InputAdornment position="end">
                      <SVGIcon
                        name="password"
                        width="21px"
                        height="21px"
                        aria-label="toggle password visibility"
                        onClick={toggleShowRetypePassword}
                        style={{ cursor: 'pointer' }}
                      />
                    </InputAdornment>
                  }
                  inputChange={onChange}
                ></CNTextField>
                <FormHelperText className={RegisterStyle.helperTextStyles}>
                  {formState.errors['retypePassword']?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="role"
            render={({ field: { onChange } }) => (
              <CNSelect
                options={options}
                placeholder="Select Role"
                width={'100%'}
                customComponents={{ DropdownIndicator }}
                onChange={(e) => {
                  // Log to view what is in here
                  console.log(e);
                  onChange(e ? e.value : null);
                }}
                className={RegisterStyle.selectStyle}
              />
            )}
          />

          <CNButton
            name="registerSubmit"
            buttonType="main"
            fullWidth
            type="submit"
            className={RegisterStyle.buttonStyle}
          >
            Register
          </CNButton>
          <SmallText>
            Already have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedHomeModal('login');
              }}
            >
              Login
            </a>
          </SmallText>
        </form>
      </FormContent>
    </FormRegister>
  );
}

export default RegisterForm;
