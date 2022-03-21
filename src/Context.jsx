import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState('all');
  const [data, setData] = useState(
    [
      {title: 'Bloom', id: 1, status: 'active'},
      {title: 'Exe', id: 2, status: 'completed'}
    ]);  

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        data,
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
