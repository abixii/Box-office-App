import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForum from '../components/SearchForum';
import ShowGrid from '../components/show/showGrid';
import ActorsGrid from '../components/actors/actorsGrid';

const Homee = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      if (searchOption === 'shows') {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
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
