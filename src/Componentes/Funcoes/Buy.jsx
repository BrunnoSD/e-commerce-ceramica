import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [adCarrinho, setAdCarrinho] = useState(0);

  const contador = () => {
    setAdCarrinho(adCarrinho + 1);
  };

  return (
    <CounterContext.Provider value={{ adCarrinho, contador }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };