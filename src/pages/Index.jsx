import { Link } from 'react-router-dom';

function Index({ people, createPeople }) {
  // Loaded Function
  const loaded = () => {
    return people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
    ));
  };
  // Loading Function
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return people ? loaded() : loading();
}

export default Index;
