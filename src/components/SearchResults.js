import React, { useContext } from "react";
import { SearchContext } from "../App";
import getBeers from '../utils/getBeers';
import { STableGrid } from "./styles";
import "../styles.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResults = () => {

  const { debouncedSearchTerm: searchParam, selectedBeers, setSelectedBeers } = useContext(SearchContext);
  // get search results from untappd API via getBeers util
  const { beerData, isLoading } = getBeers({ searchParam });

  const addBeer = (beer) => {
    if (!selectedBeers.includes(beer)) {
      setSelectedBeers([...selectedBeers, beer]);
      localStorage.setItem(
        "selectedBeers",
        JSON.stringify([...selectedBeers, beer])
      );
      // toast time
      toast.success('🦄 Bier toegevoegd aan lijst!', {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container">
        Loading...
      </div>
    );
  }

  // no data found
  if (!Object.values(beerData).length > 0 && !isLoading) {
    return (
      <div className="container">
        Nothing.
      </div>
    );
  }
  return (
    <div className="container">
      <STableGrid>
        {beerData.beers.map((item) => (
          <li key={item.bid} onClick={() => addBeer(item.beer)}>
            <span>{item.beer.beer_name}</span>
            <img src={item.beer.beer_label} alt="" />
            <span>{item.brewery.brewery_name}</span>
          </li>
        ))}
      </STableGrid>
      <ToastContainer />
    </div>
  )
};

export default SearchResults;
