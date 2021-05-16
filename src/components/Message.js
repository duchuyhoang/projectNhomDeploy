import React from 'react';
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
const dispatch=useDispatch()
   
    return (
        <>
            {/* <CooperateForm></CooperateForm> */}
            {/* <CNSelect customComponents={{DropdownIndicator}}/> */}
            {/* <Stretcher>

            </Stretcher> */}
            {/* <Footer>

            </Footer> */}
            <button style={{marginTop:300}} onClick={() => {
                dispatch(authActions.userLogin({
                    email: "huyhoang10032000@gmail.com",
                    password: "12345"
                }))

            }}>Login</button>

        </>
    )

}

export default Message

