import React, { createContext, useState } from "react";
import { SearchBar } from "./SearchAndResult/SearchBar";
import { SearchResult } from "./SearchAndResult/SearchResult";
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
        <SearchResult />
      </SearchContext.Provider>
    </div>
  );
};

export default App;
