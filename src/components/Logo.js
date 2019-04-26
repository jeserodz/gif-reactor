import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/images/logo.svg';
import breakpoints from '../utils/breakpoints';

const Logo = () => (
  <Image className="animated fadeInDown" />
);

const Image = styled.div`
  width: 504px;
  height: 175px;
  min-height: 175px;
  background-image: url(${logoImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation-delay: .5s;

  @media (max-width: ${breakpoints.md.max}px) {
    width: 245px;
    height: 75px;
    min-height: 75px;
  }
`;

export default Logo;
