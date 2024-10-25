import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { person } = location.state;

  const handleHire = () => {
    // Implement the hire logic here
    navigate('/');
  };

  if (!person) return <div>Loading...</div>;

  return (
    <div>
      <h1>{person.name.first} {person.name.last}</h1>
      <button onClick={handleHire}>Hire</button>
    </div>
  );
};

export default Profile;
