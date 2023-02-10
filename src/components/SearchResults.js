import React, { useContext } from "react";
import { SearchContext } from "../App";
import useUntappd from '../utils/useUntappd';
import { STableGrid } from "./styles";
import "../styles.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResults = () => {

  const { debouncedSearchTerm: searchParam, selectedBeers, setSelectedBeers } = useContext(SearchContext);
  // get search results from untappd API via useUntappd util
  const { beerData, isLoading } = useUntappd({ searchParam });

  const addBeer = (beer) => {
    if (!selectedBeers.includes(beer)) {
      setSelectedBeers([...selectedBeers, beer]);
      localStorage.setItem(
        "selectedBeers",
        JSON.stringify([...selectedBeers, beer])
      );
      // toast time
      toast.success('🍻 Beer added to the list.', {
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
          <li key={item.bid}>
            <button onClick={() => addBeer(item.beer)}>
              <span>{item.beer.beer_name}<br />
              {item.checkin_count.toLocaleString('nl-NL')} checkins</span>
              <img src={item.beer.beer_label} alt="" />
              <span>{item.brewery.brewery_name}</span>
            </button>
          </li>
        ))}
      </STableGrid>
      <ToastContainer />
    </div>
  )
};

export default SearchResults;
