import React, { createContext, useState, useContext } from "react";

export const turnosInitialState =
  JSON.parse(window.sessionStorage.getItem("turnos")) || [];

export const actualizarLocalStorage = (turnos) => {
  window.sessionStorage.setItem("turnos", JSON.stringify(turnos));
};

const TurnosContext = createContext();

export const TurnosProvider = ({ children }) => {
  const [turnos, setTurnos] = useState(turnosInitialState);

  const agregarTurno = (turno) => {
    const nuevoTurno = crearTurno(turno);
    actualizarLocalStorage([...turnos, nuevoTurno])
    setTurnos([...turnos, nuevoTurno]);
  };

  //objeto turno
  const crearTurno = (turno) => {
    const id = generarId();
    const nuevoTurno = {
      fechaCita: turno.cita.fecha,
      horaCita: turno.cita.hora,
      nombreServicio: turno.servicio.nombre,
      duracionServicio: turno.servicio.duracion,
      precioServicio: turno.servicio.precio,
      nombreProfesional: turno.profesional.nombre,
      dni: turno.dni,
      id: id,
    };
    return nuevoTurno;
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
      }}
    >
      {children}
    </TurnosContext.Provider>
  );
};

export const useTurnosContext = () => useContext(TurnosContext);
