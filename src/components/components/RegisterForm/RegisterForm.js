import { CNSelect } from '@Components/shared/CNSelect/CNSelect';
import { CNTextField } from '@Components/shared/CNTextField/CNTextField';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import useIsMobile from '@Core/hooks/useIsMobile';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
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
  max-height: ${(props) => (props.isMobile ? '240' : '690')}px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  max-width: 810px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 15px;
  box-sizing: border-box;
  vertical-align: middle;
  animation: ${upToDown} ease-in-out 0.3s;
`;
const FormLeft = styled.div`
  width: 50%;
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
  padding: 15px 30px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-height: 500px;
  /* background-color: #aaa; */
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

  const { handleSubmit, control } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      retypePassword: '',
      role: null,
    },
  });

  return (
    <FormRegister isMobile={isMobile}>
      <FormLeft>
        <Img
          isMobile={isMobile}
          src={
            'https://g5p6r6b9.stackpathcdn.com/homeo/wp-content/uploads/2020/02/bg-register.jpg'
          }
          alt="room"
        />
      </FormLeft>
      <FormContent>
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
        <form onSubmit={handleSubmit((value) => {
          console.log(value);
        })}>

          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange } }) => (
              <CNTextField
                type="text"
                placeholder="User name"
                className={RegisterStyle.textFieldStyle}
                endAdornment={<SVGIcon name="user" width="21px" height="21px" />}
                fullWidth
                inputChange={onChange}
              ></CNTextField>
            )}
          />

          <Controller
            control={control}
            name="email"
            autoComplete="new-email"
            render={({ field: { onChange } }) => (
              <CNTextField
                type="email"
                placeholder="Email"
                className={RegisterStyle.textFieldStyle}
                fullWidth
                endAdornment={<SVGIcon name="user" width="21px" height="21px" />}
                inputChange={onChange}
              />
            )}

          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <CNTextField
                autoComplete="new-password"
                type="password"
                placeholder="Password"
                className={RegisterStyle.textFieldStyle}
                fullWidth
                endAdornment={
                  <SVGIcon name="password" width="21px" height="21px" />
                }
                name="password"
                inputChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="retypePassword"
            render={({ field: { onChange } }) => (
              <CNTextField
                type="password"
                placeholder="Re-enter Password"
                fullWidth
                className={RegisterStyle.textFieldStyle}
                endAdornment={
                  <SVGIcon name="password" width="21px" height="21px" />
                }
                inputChange={onChange}
              ></CNTextField>
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
                  onChange(e ? e.value : null)
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
