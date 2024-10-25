import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Dashboard = () => {
  const { people, hired, hirePerson, firePerson } = useContext(AppContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>People</h2>
        <ul>
          {people.map(person => (
            <li key={person.login.uuid}>
              <Link to={`/view/${person.login.uuid}`} state={{ person }}>
                {person.name.first} {person.name.last}
              </Link>
              <button onClick={() => hirePerson(person)}>Hire</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Hired</h2>
        <ul>
          {hired.map(person => (
            <li key={person.login.uuid}>
              {person.name.first} {person.name.last}
              <Link to={`/edit/${person.login.uuid}`} state={{ person }}>Edit</Link>
              <button onClick={() => firePerson(person)}>Fire</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
