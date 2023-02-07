import useSWR from 'swr';

// Untappd credentials
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const fetcher = (url) => fetch(url).then((res) => res.json());

function getBeers({ searchParam }) {
  const fetcherOptions = { revalidateOnFocus: false };
  const beerData = {};

  const { data, isLoading } = useSWR(
    `https://api.untappd.com/v4/search/beer?q=${searchParam}&client_id=${clientId}&client_secret=${clientSecret}`,
    fetcher,
    fetcherOptions
  );
  if (data && Object.keys(data).length > 0) {
    beerData.beers = data.response?.beers?.items;
  }
  // maybe get beer ratings later and add it to beerData..

  return {
    beerData: Object.values(beerData).length > 0 && beerData,
    isLoading: isLoading
  };
}

export default getBeers;
