import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState('all');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')));

  const handleDelete = (id) => {
    let tempData = data.filter((item) => item.id !== id)
    setData(tempData);
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        data,
        setData,
        handleDelete
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
