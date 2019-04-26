import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

const ResultsGrid = ({ searchTerm, data, onScrollEnd, onThumbnailPress }) => {
  // Detects when user scrolls to the end
  function handleOnScroll(event) {
    const { scrollHeight, clientHeight, scrollTop } = event.target;
    if (clientHeight + scrollTop > scrollHeight - 20) {
      onScrollEnd();
    }
  }

  return (
    <Container
      key={searchTerm}
      className="animated fadeIn"
      visible={data.length}
      onScroll={handleOnScroll}
    >
      {data.map((item, index) => (
        <Thumbnail
          key={item.id}
          imageUrl={item.images.preview_gif.url}
          onClick={() => onThumbnailPress(index)}
        />
      ))}
    </Container>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onScrollEnd: PropTypes.func.isRequired,
  onThumbnailPress: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: 880px;
  background: rgba(0,0,0,0.25);
  border-radius: 1rem;
  overflow-y: auto;
  margin-bottom: 2rem;
  display: ${props => (props.visible ? 'block' : 'none')};

  @media (max-width: ${breakpoints.md.max}px) {
    width: 300px;
  }
`;

const Thumbnail = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: rgba(0,0,0,0.50);
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 10px;
  cursor: pointer;
  transition: all .1s;
  box-sizing: border-box;
  border: 0.33rem solid #00B689;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  @media (max-width: ${breakpoints.md.max}px) {
    width: 130px;
    height: 130px;
  }
`;

export default ResultsGrid;
