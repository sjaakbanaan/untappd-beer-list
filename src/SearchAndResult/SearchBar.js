import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

const SearchBar = () => {
  const { setDebouncedSearchTerm } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div>
      <input type="text" onChange={handleInput} value={searchTerm} />
    </div>
  );
};

export { SearchBar };
