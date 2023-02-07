import React, { createContext, useState } from "react";
import { SearchBar } from "./SearchAndResult/SearchBar";
import { SearchResults } from "./SearchAndResult/SearchResults";
import "./styles.css";

export const SearchContext = createContext();

const App = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  return (
    <div>
      <h1>Untappd List Creator</h1>
      <SearchContext.Provider
        value={{ debouncedSearchTerm, setDebouncedSearchTerm }}
      >
        <SearchBar />
        {debouncedSearchTerm && <SearchResults />}
      </SearchContext.Provider>
    </div>
  );
};

export default App;
