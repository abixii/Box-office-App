import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForum from '../components/SearchForum';
import ShowGrid from '../components/show/showGrid';
import ActorsGrid from '../components/actors/actorsGrid';

const Homee = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),

    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>no results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid show={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }

    return null;
  };
  return (
    <div>
      <SearchForum onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Homee;
