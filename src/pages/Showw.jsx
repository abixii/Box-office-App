import { useParams } from 'react-router-dom';

const Showw = () => {
  const { showId } = useParams();

  return <div>show page for show {showId}</div>;
};
export default Showw;
