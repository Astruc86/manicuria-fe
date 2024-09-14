import React from "react";
import { useMisTurnos } from "../hooks/useMisTurnos";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import "../styles/AgendaScreen.css";
import dayjs from "dayjs";

const AgendaScreen = () => {
  const { turnos, isLoading, isError } = useMisTurnos();

  const isPastDate = (date) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  return (
    <>
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>Error cargando los turnos. Por favor, intente de nuevo más tarde.</h3>
      )}
      {!isError && !isLoading && turnos.length === 0 && (
        <h3>No hay turnos reservados</h3>
      )}
      <div className="turnos-confirmados">
        {turnos.length > 0 &&
          turnos.map((turno) => (
            <div
              key={turno.id}
              className={`turno ${
                isPastDate(turno.fechaCita) ? "past" : "future"
              }`}
            >
              <div className="header">
                <p>
                  {dayjs(turno.fechaCita).format("DD-MM-YYYY")} | {turno.horaCita} hs
                </p>
              </div>
              <div className="content">
                <div className="details">
                  <p>
                    <strong>Servicio:</strong> {turno.nombreServicio}
                  </p>
                  <p>
                    <strong>Duración:</strong> {turno.duracionServicio} min
                  </p>
                </div>
                <div className="details">
                  <p>
                    <strong>Profesional:</strong> {turno.nombreProfesional}
                  </p>
                  <p>
                    <strong>DNI cliente:</strong> {turno.dni}
                  </p>
                </div>
                <div className="total">
                  <p>
                    <strong>TOTAL</strong>
                  </p>
                  <p>${turno.precioServicio}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AgendaScreen;