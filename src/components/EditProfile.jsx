import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updatePerson } = useContext(AppContext);
  const { person } = location.state;
  const [editedPerson, setEditedPerson] = useState(person);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson({ ...editedPerson, name: { ...editedPerson.name, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePerson(editedPerson);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="first" value={editedPerson.name.first} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="last" value={editedPerson.name.last} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
