import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://api.untappd.com/v4/search/beer?q=Pliny&client_id=96744A10E35D7444CBEA73A8E323CE59C38E6FFE&client_secret=2C57CCC066BD6407A71D1F4F17C1E59605C0DBAB",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  console.log(data.response.beers.items);
  return (
    <div>
      <h1>SWR Test included</h1>
      {/* <h1>{data && data?.response?.beers.items}</h1> */}
    </div>
  );
}
