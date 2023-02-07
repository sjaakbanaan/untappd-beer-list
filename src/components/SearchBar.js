import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

const SearchBar = () => {
  const { setDebouncedSearchTerm } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  // every key strike is registered, but we only save it to context after 0,5s inactivity
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, setDebouncedSearchTerm]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <input type="text" onChange={handleInput} value={searchTerm} />
    </div>
  );
};

export { SearchBar };
