import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Show({ people, updatePeople, deletePeople }) {
  const { id } = useParams();
  const person = people.find((p) => p._id === id);
  let navigate = useNavigate();

  // State for Form
  const [editForm, setEditForm] = useState(person);

  // handleChange function for Form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit function for Form
  const handleSubmit = (event) => {
    event.preventDefault();
    updatePeople(editForm, person._id);
    navigate('/');
  };

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <button type="submit">Update Person</button>
      </form>
    </div>
  );
}

export default Show;
