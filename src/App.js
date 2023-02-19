import { createContext, useState } from 'react';
import SearchResults from './components/SearchResults';
// import { SelectedBeers } from './components/SelectedBeers';
import { SearchBar } from './components/SearchBar';
import { DbGetTest } from './components/DbGetTest';
import { ThemeProvider, Preflight, x } from '@xstyled/styled-components';
import GlobalStyles from './components/styles/GlobalStyles';
import theme from './theme';

// set a SearchContext as a state manager for all our search-related components
export const SearchContext = createContext();

const App = () => {
  // states to use in context: 1. searched word 2. the beers on your list
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyles />
      <x.div padding="35px 20px">
        <x.h1>Untappd List Creator</x.h1>
        <SearchContext.Provider
          value={{
            debouncedSearchTerm,
            setDebouncedSearchTerm,
            // selectedBeers,
            // setSelectedBeers,
          }}
        >
          <SearchBar />
          {debouncedSearchTerm && <SearchResults />}
          <DbGetTest />
          {/* {selectedBeers && <SelectedBeers />} */}
        </SearchContext.Provider>
      </x.div>
    </ThemeProvider>
  );
};

export default App;
