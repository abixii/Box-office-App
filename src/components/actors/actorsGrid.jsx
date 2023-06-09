import { FlexGrid } from '../common/FlexGeid';
import ActorCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          death={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
