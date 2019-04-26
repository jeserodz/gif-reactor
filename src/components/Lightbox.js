import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import closeImage from '../assets/images/close.svg';
import breakpoints from '../utils/breakpoints';

const Lightbox = ({
  visible,
  image,
  details,
  onClosePress,
  onPreviousPress,
  onNextPress,
}) => {
  if (!visible) return null;

  return (
    <Container className="animated fadeIn faster">
      <Slideshow className="animated zoomIn fast">
        <Image source={image} />
        <Controls>
          <Control onClick={onPreviousPress}>Previous</Control>
          <Control>{details}</Control>
          <Control onClick={onNextPress}>Next</Control>
        </Controls>
      </Slideshow>
      <CloseButton onClick={onClosePress} />
    </Container>
  );
};

Lightbox.propTypes = {
  visible: PropTypes.bool.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  details: PropTypes.string.isRequired,
  onClosePress: PropTypes.func.isRequired,
  onPreviousPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};

const borderStyle = '1px solid #00B689';

const Container = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slideshow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.7);
  border-radius: 1rem;
  border: ${borderStyle};
  box-shadow: 0px 2px 4px #000;
`;

const Image = styled.div`
  width: 720px;
  height: 480px;
  border-radius: 1rem 1rem 0 0;
  background-image: url(${({ source }) => (source ? source.images.original.url : '')});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.sm.max}px) {
    width: 300px;
    height: 350px;
  }
`;

const Controls = styled.div`
  display: flex;
  border-top: ${borderStyle};
`;

const Control = styled.div`
  flex: 1;
  height: 64px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease;
  user-select: none;

  &:hover {
    font-size: 1.2em;
  }

  &:first-child {
    border-radius: 0 0 0 1rem;
    border-right: ${borderStyle};
  }

  &:last-child {
    border-radius: 0 0 1rem 0;
    border-left: ${borderStyle};
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  background-color: rgba(0,0,0,0.8);
  border-radius: 32px;
  border: ${borderStyle};
  background-image: url(${closeImage});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Lightbox;
