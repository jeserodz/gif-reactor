import React from 'react';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

const Footer = () => (
  <Container className="animated fadeIn slow delay-2s">
    Made with ️️
    <span role="img" aria-label="love">❤️</span>
    <Link href="https://github.com/jeserodz">by Jesé Rodríguez</Link>
    <span role="img" aria-label="love"> 🚀</span>
    <Link href="https://github.com/jeserodz/gif-reactor">
      <code> GitHub</code>
    </Link>
  </Container>
);


const Container = styled.div`
  font-family: 'Pacifico', sans-serif;
  font-size: 0.9rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: ${breakpoints.md.max}px) {
    font-size: 0.5rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export default Footer;
