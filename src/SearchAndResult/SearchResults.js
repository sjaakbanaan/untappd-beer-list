import React, { useContext } from "react";
import useSWR from "swr";
import { SearchContext } from "../App";
import { ResultList } from "./ResultList";

// Untappd credentials
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const fetcher = (url) => fetch(url).then((res) => res.json());

const SearchResults = () => {
  const { debouncedSearchTerm: searchParam } = useContext(SearchContext);

  if (searchParam.length < 3) return <p>Use at least 2 characters to search for a beer.</p>;
  const { data, error, isLoading } = useSWR(
    `https://api.untappd.com/v4/search/beer?q=${searchParam}&client_id=${clientId}&client_secret=${clientSecret}`,
    fetcher
  );
  const results = data?.response?.beers?.items;

  if (error) return <p>An error has occurred.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Results for "{searchParam}"</h3>
        {results && results.length ? (
          <ResultList data={results} />
        ) : (
          <p>Nothing, please change your search.</p>
        )}
    </div>
  );
}

export { SearchResults };
