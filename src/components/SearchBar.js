import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../App';
import { SContainer, SSearchBar } from './styles';

const SearchBar = () => {
  const { setDebouncedSearchTerm } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  // every key strike is registered, but we only save it to context after 1s inactivity
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, setDebouncedSearchTerm]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SContainer>
      <SSearchBar>
        <input
          type="text"
          onChange={handleInput}
          placeholder="What beer are you looking for? Search for bee name, optionaly combined with the brewery name"
          value={searchTerm}
        />
      </SSearchBar>
    </SContainer>
  );
};

export { SearchBar };
