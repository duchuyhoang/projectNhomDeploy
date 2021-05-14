import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stretcher } from '@Components/components/Stretcher/Stretcher';
import { Footer } from '@Components/components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@Core/redux/auth';
import { SVGIcon } from '@Components/shared/SvgIcon/Icon';
import { CooperateForm } from './components/CooperateForm/CooperateForm';
import { CNSelect } from '@Components/shared/CNSelect/CNSelect';
import { components } from 'react-select';

const useStyles = makeStyles((theme) => {
  return {
    style: {
      display: 'flex',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
    },
  };
});

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SVGIcon name="userGroup" width="20px" />
      </components.DropdownIndicator>
    )
  );
};

const Message = ({ message }) => {
  const [cardList, setCardList] = useState([
    {
      SVGIcon: 'highFive',
      title: 'Trusted By Thousands',
      description:
        'Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis.',
    },
    {
      SVGIcon: 'home',
      title: 'Wide Renge Of Properties',
      description:
        'Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis.',
    },
    {
      SVGIcon: 'profitcalculator',
      title: 'Financing Made Easy',
      description:
        'Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis.',
    },
    {
      SVGIcon: 'home',
      title: 'Wide Renge Of Properties',
      description:
        'Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis.',
    },
    {
      SVGIcon: 'profitcalculator',
      title: 'Financing Made Easy',
      description:
        'Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis.',
    },
  ]);
  return (
    <>
      <CooperateForm></CooperateForm>
      <CNSelect customComponents={{ DropdownIndicator }} />
      <Stretcher></Stretcher>
      <Footer></Footer>
      {/* {isHomeModalShow && <HomeModal showModal={isHomeModalShow} setShowModal={setIsHomeModalShow} />} */}
      <button
        onClick={() => {
          dispatch(
            authActions.userLogin({
              email: 'huyhoang10032000@gmail.com',
              password: '12345',
            })
          );
        }}
      >
        Login
      </button>
    </>
  );
};

export default Message;
