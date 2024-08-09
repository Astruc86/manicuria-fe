import React, { useContext } from "react";
import { useTurnosContext } from "../context/TurnosContext";

const MisTurnosScreen = () => {
  const { turnos } = useTurnosContext();
  return (
    <>
      <h1>Mis turnos screen</h1>
      {turnos &&
        turnos.map((turno) => {
          return (
            <div key={turno.id}>
              <h3>{turno.nombreServicio}</h3>
              <p>{turno.precioServicio}</p>
              <p>{turno.dni}</p>
            </div>
          );
        })}
    </>
  );
};

export default MisTurnosScreen;
