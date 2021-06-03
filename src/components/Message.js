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
import CNStar from './shared/CNStar/CNStar';
import { CNPropertyLabel } from './shared/CNPropertyLabel/CNPropertyLabel';
import { CNTab } from './shared/CNTab/CNTab'
import { roomSelectors, roomActions } from '../core/redux/room/index'


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
  const dispatch = useDispatch();
  // const state=useSelector(state=>state);
  // console.log("state",state);

  useEffect(() => {
    dispatch(roomActions.getLatestRoom())
  }, [])
  const listRoom = useSelector(state => state.room)
  const test = useSelector(roomSelectors.roomSelector.selectAll) // lay ra o day
  console.log(listRoom)
  console.log(test)

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
  const tabList = [
    { label: "Overview", component: <h1>Lorem ipsum dolor sit amet, consectet</h1> },
    { label: "Properties", component: <h1>From Quất Lâm with love  </h1> },
    { label: "Reviews", component: <h1>Sếp Huy đẹp trai!!!</h1> },
  ];
  return (
    <>
      <CooperateForm></CooperateForm>
      <CNSelect customComponents={{ DropdownIndicator }} />
      <CNStar values="2.5" size="medium" />
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
      <CNPropertyLabel type="feature">Feature</CNPropertyLabel>
      <CNPropertyLabel >For Sale</CNPropertyLabel>
      <CNPropertyLabel >For Rent</CNPropertyLabel>
      <CNTab tabList={tabList} />

    </>
  );
};


export default Message