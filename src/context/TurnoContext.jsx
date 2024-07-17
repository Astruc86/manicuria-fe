import React, { createContext, useState, useContext } from "react";

const TurnoContext = createContext();

export const TurnoProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);
  const agregarTurno = (newTurno) => {
    setTurnos([...turnos, newTurno]);
  };
  const generarId = () => {
    const id = turnos ? turnos.length + 1 : 1;
    return id;
  };

  return (
    <TurnoContext.Provider
      value={{
        turnos,
        agregarTurno,
        generarId
      }}
    >
      {children}
    </TurnoContext.Provider>
  );
};

export const useTurnoContext = () => useContext(TurnoContext);

export const useTurno = () => {
  const { turnos, agregarTurno, generarId } = useContext(TurnoContext);
  return { turnos, agregarTurno, generarId };
};
