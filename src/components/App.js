import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Logo, SearchInput, ResultsGrid, Lightbox } from '.';
import { search } from '../services';

const PAGE_SIZE = 20;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // Fetch GIFs each time searchTerm or offset changes
  const fetchData = async () => {
    if (searchTerm) {
      setSearching(true);
      const { data, pagination } = await search(searchTerm, offset, PAGE_SIZE);
      setSearching(false);
      setResults([...results, ...data]);
      setTotal(pagination.total_count);
    }
  };

  // Clear collected data and scroll on new search
  const handleSearchTermChange = (value) => {
    setSearchTerm('');
    setResults([]);
    setOffset(0);
    setSearchTerm(value);
  };

  // Load next page if available
  const handleScrollEnd = () => {
    if (offset < total - PAGE_SIZE) {
      setOffset(offset + PAGE_SIZE);
    }
  };

  const handleThumbnailPress = (index) => {
    setSlideshowIndex(index);
    setSlideshowVisible(true);
  };

  const handlePreviousSlide = () => {
    const reset = (slideshowIndex - 1 < 0);
    setSlideshowIndex(reset ? results.length - 1 : slideshowIndex - 1);
  };

  const handleNextSlide = () => {
    const reset = (slideshowIndex + 1 >= results.length);
    setSlideshowIndex(reset ? 0 : slideshowIndex + 1);
  };

  useEffect(() => { fetchData(); }, [searchTerm, offset]);

  return (
    <Container>
      <Logo />
      <SearchInput
        searching={searching}
        onSearchTermChange={handleSearchTermChange}
      />
      <ResultsGrid
        searchTerm={searchTerm}
        data={results}
        onScrollEnd={handleScrollEnd}
        onThumbnailPress={handleThumbnailPress}
      />
      <Lightbox
        visible={slideshowVisible}
        image={results.length && results[slideshowIndex]}
        details={`${slideshowIndex + 1}/${results.length}`}
        onClosePress={() => setSlideshowVisible(false)}
        onPreviousPress={handlePreviousSlide}
        onNextPress={handleNextSlide}
      />
      <Footer className="animated fadeIn slow delay-2s">
        Made with ️️
        <span role="img" aria-label="love">❤️</span>
        by Jesé Rodríguez
        <span role="img" aria-label="love">🚀</span>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #46ace5, #9E34FC);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  font-family: 'Pacifico', sans-serif;
  font-size: 0.9rem;
  color: white;
  margin-bottom: 1rem;
`;

export default App;
