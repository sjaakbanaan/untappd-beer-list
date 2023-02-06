import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../App";
import { ResultList } from "./ResultList";

// Untappd credentials
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const SearchResult = () => {
  const { debouncedSearchTerm: searchParam } = useContext(SearchContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [error, setError] = useState(null);

  const apiEndpoint = `https://api.untappd.com/v4/search/beer?q=?${searchParam}/`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      // return false on first load since search is still empty then
      if (searchParam.length < 3) {
        setValidationError(true);
        return false;
      }
      const API_URL = `${apiEndpoint}&client_id=${clientId}&client_secret=${clientSecret}`;

      try {
        const response = await axios.get(API_URL);
        const result = response?.data?.response?.beers.items;
        // console.log(result);

        if (result) setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
        setValidationError(false);
      }
    }
    fetchData();
  }, [searchParam, apiEndpoint]);

  if (validationError) {
    return <p>Search for a beer name, minimum of 3 characters needed.</p>;
  }

  if (loading) {
    return <p>Loading beers...</p>;
  }
  if (error) {
    return <p>Error fetching results from api: {error.message}</p>;
  }

  if (data) {
    // console.log(data);
    return (
      <>
        <h3>Results for "{searchParam}"</h3>
        {data && data.length ? (
          <ResultList data={data} />
        ) : (
          <p>Nothing, please change your search.</p>
        )}
      </>
    );
  }

  return <p>Something went wrong...</p>;
};

export { SearchResult };
