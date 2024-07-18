import React from "react";
import { useTurno } from "../context/TurnosContext";

export const MisTurnosScreen = () => {
  console.log("MisTurnosScreen");
  const { turnos, agregarTurno } = useTurno();
  console.log("turno", turnos);
  return (
    <>
      Mis Turnos screen
      {turnos &&
        turnos.map((turno) => (
          <div key={turno.id}>
            <p>{turno.nombreProfesional}</p>
            <p>{turno.fechaCita}</p>
            <p>{turno.horaCita}</p>
          </div>
        ))}
    </>
  );
};
