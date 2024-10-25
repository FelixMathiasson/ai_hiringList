import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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

  const firePerson = (person) => {
    setPeople([...people, person]);
    setHired(hired.filter(p => p.login.uuid !== person.login.uuid));
  };

  return (
    <AppContext.Provider value={{ people, hired, hirePerson, updatePerson, firePerson }}>
      {children}
    </AppContext.Provider>
  );
};
