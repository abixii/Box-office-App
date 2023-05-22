export default function AppTitile(props) {
  const {
    Title = 'Box Office',
    subtitle = 'Are you looking for a movie or an actor?',
  } = props;
  return (
    <div>
      <h1>{Title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
