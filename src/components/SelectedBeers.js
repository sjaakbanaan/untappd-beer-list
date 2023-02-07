import React, { useContext } from "react";
import { SearchContext } from "../App";
import { STableGrid } from "./styles";

const SelectedBeers = () => {

  const { selectedBeers, setSelectedBeers } = useContext(SearchContext);

  const removeBeer = (beer) => {
    if (selectedBeers.includes(beer)) {
      const removeBeer = selectedBeers.filter((item) => item !== beer);
      setSelectedBeers(removeBeer);
      localStorage.setItem("selectedBeers", JSON.stringify(removeBeer));
    }
  };

  if (selectedBeers && Object.values(selectedBeers).length > 0) {
    return (
      <div className="container">
        <h2>Selected Beers</h2>
        <STableGrid>
          {selectedBeers.map((beer) => (
            <li key={beer.bid} onClick={() => removeBeer(beer)}>
              <span>{beer.beer_name}</span>
              <img src={beer.beer_label} alt="" />
            </li>
          ))}
        </STableGrid>
      </div>
    )
  } else {
    return (
      <div className="container">
        Your list is empty.
      </div>
    )
  }
};

export { SelectedBeers };
