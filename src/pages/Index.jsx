import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index({ people, createPeople }) {
  // State to hold the Form data
  const [newForm, setNewForm] = useState({
    name: '',
    image: '',
    title: '',
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    createPeople(newForm);
    setNewForm({
      name: '',
      image: '',
      title: '',
    });
  };

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
  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <button type="submit">Create Person</button>
      </form>
      {people ? loaded() : loading()}
    </section>
  );
}

export default Index;
