import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DbGetTest = () => {
  const fetcherOptions = { revalidateOnFocus: false };

  const { data: users, isLoading } = useSWR(
    'http://localhost:3003/beers',
    fetcher,
    fetcherOptions
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // eslint-disable-next-line no-console
  // console.log(users);

  return (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>k</th>
          <th>k</th>
          <th>k</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.brewery_name}</td>
            <td>{user.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // return <div>hoi</div>;
};

export { DbGetTest };
