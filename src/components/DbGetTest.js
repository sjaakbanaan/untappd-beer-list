import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DbGetTest = () => {
  const fetcherOptions = { revalidateOnFocus: false };

  const { data, isLoading } = useSWR(
    'http://localhost:3003/users',
    fetcher,
    fetcherOptions
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // eslint-disable-next-line no-console
  console.log(data);
  return <div>hoi</div>;
};

export { DbGetTest };
