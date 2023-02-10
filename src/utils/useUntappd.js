import useSWR from 'swr';

// Untappd credentials
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const fetcher = (url) => fetch(url).then((res) => res.json());

function useUntappd({ searchParam, beerId }) {
  const fetcherOptions = { revalidateOnFocus: false };
  let beersDataLoaded = {};
  let beerDataLoaded = {};

  if (searchParam) {
    const { data: beersData, isLoading: isLoadingBeers } = useSWR(
      `https://api.untappd.com/v4/search/beer?q=${searchParam}&client_id=${clientId}&client_secret=${clientSecret}`,
      fetcher,
      fetcherOptions
    );
    if (!isLoadingBeers) {
      if (beersData && Object.keys(beersData).length > 0) beersDataLoaded = beersData;
    }
    return {
      beersData:
        Object.values(beersDataLoaded).length > 0 &&
        beersDataLoaded?.response?.beers?.items,
      isLoading: isLoadingBeers,
    };
  }

  if (beerId) {
    const { data: beerData, isLoading: isLoadingBeer } = useSWR(
      `https://api.untappd.com/v4/beer/info/${beerId}?client_id=${clientId}&client_secret=${clientSecret}`,
      fetcher,
      fetcherOptions
    );
    if (!isLoadingBeer) {
      if (beerData && Object.keys(beerData).length > 0) beerDataLoaded = beerData;
    }
    return {
      beerData:
        Object.values(beerDataLoaded).length > 0 && beerDataLoaded?.response?.beer,
      isLoading: isLoadingBeer,
    };
  }
}

export default useUntappd;
