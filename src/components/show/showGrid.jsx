import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGeid';
import ShowCard from './showCard';

const ShowGrid = ({ show }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTARE', showId });
    } else {
      dispatchStarred({ type: 'STARE', showId });
    }
  };
  return (
    <FlexGrid>
      {show.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
