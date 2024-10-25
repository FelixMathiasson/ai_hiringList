import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [people, setPeople] = useState([]);
  const [hired, setHired] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => setPeople(data.results));
  }, []);

  const hirePerson = (person) => {
    setHired([...hired, person]);
    setPeople(people.filter(p => p.login.uuid !== person.login.uuid));
  };

  const updatePerson = (updatedPerson) => {
    setHired(hired.map(person => person.login.uuid === updatedPerson.login.uuid ? updatedPerson : person));
  };

  return (
    <div>
      <h1>My React App</h1>
      <Outlet context={{ people, hired, hirePerson, updatePerson }} />
    </div>
  );
};

export default App;
