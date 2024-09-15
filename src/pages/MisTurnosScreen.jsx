import React from "react";
import { useMisTurnos } from "../hooks/useMisTurnos";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";

const MisTurnosScreen = () => {
  const { turnos, isLoading, isError } = useMisTurnos();
  return (
    <div className="container">
      <h1>Mis turnos screen</h1>
      {turnos.length > 0 &&
        turnos.map((turno) => {
          return (
            <div key={turno.id}>
              <h3>{turno.nombreServicio}</h3>
              <p>
                ${turno.precioServicio} - {turno.duracionServicio} min
              </p>
              <p>{turno.nombreProfesional}</p>
              <p>
                {turno.fechaCita} - {turno.horaCita}
              </p>
              <p>{turno.dni}</p>
            </div>
          );
        })}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>
          Error cargando los turnos. Por favor, intente de nuevo más tarde.
        </h3>
      )}
      {!isError && !isLoading && turnos.length === 0 && (
        <h3>No hay turnos reservados</h3>
      )}
    </div>
  );
};

export default MisTurnosScreen;
