import React, { useState } from "react";
import { SResultList } from "./styles";

const ResultList = ({ data }) => {
  const [selectedBeers, setSelectedBeers] = useState(
    JSON.parse(localStorage.getItem("selectedBeers")) || []
  );

  const addBeer = (beer) => {
    if (!selectedBeers.includes(beer)) {
      setSelectedBeers([...selectedBeers, beer]);
      localStorage.setItem(
        "selectedBeers",
        JSON.stringify([...selectedBeers, beer])
      );
    }
  };

  const removeBeer = (beer) => {
    if (selectedBeers.includes(beer)) {
      const removeBeer = selectedBeers.filter((item) => item !== beer);
      setSelectedBeers(removeBeer);
      localStorage.setItem("selectedBeers", JSON.stringify(removeBeer));
    }
  };

  return (
    <div>
      <SResultList>
        {data.map((item) => (
          <li key={item.bid} onClick={() => addBeer(item.beer)}>
            <span>{item.beer.beer_name}</span>
            <img src={item.beer.beer_label} alt="" />
          </li>
        ))}
      </SResultList>
      <h2>Selected Beers</h2>
      <SResultList>
        {selectedBeers.map((beer) => (
          <li key={beer.bid}>
            <button onClick={() => removeBeer(beer)}>remove</button>
            <span>{beer.beer_name}</span>
            <img src={beer.beer_label} alt="" />
          </li>
        ))}
      </SResultList>
    </div>
  );
};

export { ResultList };
