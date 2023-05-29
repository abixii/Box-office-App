import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import { useStarredShows } from '../lib/useStarredShows';
import ShowGrid from '../components/show/showGrid';
import { TextCenter } from '../components/common/TextCenetr';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <TextCenter>NO shows were starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <TextCenter>Error occured:{starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows Are Loading</TextCenter>;
};
export default Starred;
