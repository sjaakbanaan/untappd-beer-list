import { createContext, useState } from 'react';
import SearchResults from './components/SearchResults';
import { SelectedBeers } from './components/SelectedBeers';
import { SearchBar } from './components/SearchBar';
import { DbGetTest } from './components/DbGetTest';
import './styles.css';

// set a SearchContext as a state manager for all our search-related components
export const SearchContext = createContext();

const App = () => {
  // states to use in context: 1. searched word 2. the beers on your list
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedBeers, setSelectedBeers] = useState(
    JSON.parse(localStorage.getItem('selectedBeers')) || []
  );

  return (
    <div className="wrapper">
      <h1>Untappd List Creator</h1>
      <DbGetTest />
      <SearchContext.Provider
        value={{
          debouncedSearchTerm,
          setDebouncedSearchTerm,
          selectedBeers,
          setSelectedBeers,
        }}
      >
        <SearchBar />
        {debouncedSearchTerm && <SearchResults />}
        {selectedBeers && <SelectedBeers />}
      </SearchContext.Provider>
    </div>
  );
};

export default App;
