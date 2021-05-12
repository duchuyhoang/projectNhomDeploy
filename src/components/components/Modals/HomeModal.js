import React, { useState } from 'react';
import { CNModal } from '@Components/shared/CNModal/CNModal';
import { LoginForm } from '@Components/components/LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

export const HomeModal = ({ selectedModal, setSelectedHomeModal, ...rest }) => {
  return (
    <CNModal {...rest}>
      {selectedModal === 'login' ? (
        <LoginForm {...rest} setSelectedHomeModal={setSelectedHomeModal} />
      ) : (
        <RegisterForm
          {...rest}
          setSelectedHomeModal={setSelectedHomeModal}
        ></RegisterForm>
      )}
    </CNModal>
  );
};
