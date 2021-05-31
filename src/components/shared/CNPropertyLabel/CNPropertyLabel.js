import React from 'react';

import styled from 'styled-components';

const Container = styled.span`
  background-color: ${(props) =>
    props.type === 'feature'
      ? (props) => props.theme.palette.primary.main
      : '#3e4c66'};
  font-size: 16px;
  height: 25px;
  line-height: 25px;
  padding: 2px 10px;
  border-radius: 3px;
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: 300;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;
export const CNPropertyLabel = ({ type, children, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
