import React, { createContext, useState, useContext } from "react";

const TurnosContext = createContext();

export const TurnosProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);
  const agregarTurno = (newTurno) => {
    setTurnos([...turnos, newTurno]);
  };
  const generarId = () => {
    const id = turnos ? turnos.length + 1 : 1;
    return id;
  };

  return (
    <TurnosContext.Provider
      value={{
        turnos,
        agregarTurno,
        generarId
      }}
    >
      {children}
    </TurnosContext.Provider>
  );
};

export const useTurnosContext = () => useContext(TurnosContext);
