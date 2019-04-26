import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import debounce from '../utils/debounce';
import breakpoints from '../utils/breakpoints';
import loadingImage from '../assets/images/loading.svg';

function SearchInput({ searching, onSearchTermChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    event.persist();

    debounce(() => {
      onSearchTermChange(event.target.value);
    });

    setValue(event.target.value);
  };

  return (
    <Container className="animated fadeIn slow delay-1s">
      <Loading visible={searching} />
      <Input
        placeholder="Type here to search..."
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  searching: PropTypes.bool,
  onSearchTermChange: PropTypes.func,
};

SearchInput.defaultProps = {
  searching: false,
  onSearchTermChange: () => {},
};

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 500px;
  height: 42px;
  min-height: 42px;
  padding: 0 2em;
  border: none;
  border-radius: 100px;
  background: rgba(0,0,0,0.25);
  outline: none;
  font-family: 'Patua One', sans-serif;
  font-size: 1rem;
  color: white;
  margin-bottom: 2rem;

  &::placeholder {
    color: white;
  }

  @media (max-width: ${breakpoints.md.max}px) {
    width: 125px;
    font-size: 0.7rem;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  right: -64px;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: rgba(0,0,0,0.25);
  background-image: url(${loadingImage});
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotate} 0.25s linear infinite;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity .3s linear;
`;

export default SearchInput;
