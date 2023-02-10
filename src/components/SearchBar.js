import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../App';
import { SSearchBar } from './styles';

const SearchBar = () => {
  const { setDebouncedSearchTerm } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  // every key strike is registered, but we only save it to context after 0,5s inactivity
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
    <div className="container">
      <SSearchBar>
        <input
          type="text"
          onChange={handleInput}
          placeholder="What beer are you looking for?"
          value={searchTerm}
        />
      </SSearchBar>
    </div>
  );
};

export { SearchBar };
