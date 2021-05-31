import React from 'react';
import { Footer } from '@Components/components/Footer/Footer';
import { Stretcher } from '@Components/components/Stretcher/Stretcher';
import { ServiceComponent } from '@Components/components/ServiceComponent/ServiceComponent';
import { FindHomeComponent } from '@Components/components/FindHomeComponent/FindHomeComponent';
import CNProgressBar from '@Components/shared/CNProgressBar/CNProgressBar';
import CNPost from '@Components/shared/CNPost/CNPost';

const MainHome = (props) => {
  return (
    <>
      <FindHomeComponent />
      <CNProgressBar value={50} label={'HoaYeuChang'} />
      <ServiceComponent />
      <Stretcher />
      <CNPost />
      <Footer />
    </>
  );
};

export default MainHome;
