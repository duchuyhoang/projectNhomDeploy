import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#ff5a5f' : '#0f151f')};
  opacity: ${(props) => (props.active ? '1' : '0.5')};
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #ff5a5f;
    opacity: 1;
  }
`;

function RoomCardIcon({ selected, icon, ...rest }) {
  const [isActive, setIsActive] = useState(selected);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Box
      onClick={handleClick}
      active={isActive}
      data-original-title="Add Favorite"
      {...rest}
    >
      {icon}
    </Box>
  );
}

export default RoomCardIcon;
