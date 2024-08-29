import React, { useEffect, useState } from "react";
import { useMisTurnos } from "../hooks/useMisTurnos";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import "../styles/AgendaScreen.css";
import dayjs from "dayjs";

const AgendaScreen = () => {
  const { turnos, isLoading, isError } = useMisTurnos();
  const [turnosConfirmados, setTurnosConfirmados] = useState([]);

  useEffect(() => {
    if (turnos.length > 0) {
      setTurnosConfirmados(turnos);
    }
  }, [turnos]);

  const isPastDate = (date) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  return (
    <>
      <h1>AgendaScreen</h1>
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h1>Error cargando los turnos. Por favor, intente de nuevo más tarde.</h1>
      )}
      {!isError && !isLoading && turnosConfirmados.length === 0 && (
        <h1>No hay turnos reservados</h1>
      )}
      <div className="turnos-confirmados">
        {turnosConfirmados.map((turno) => (
          <div
            key={turno.id}
            className={`turno ${
              isPastDate(turno.fechaCita) ? "past" : "future"
            }`}
          >
            <div className="header">
              <span>
                {dayjs(turno.fechaCita).format("DD-MM-YYYY")} | {turno.horaCita} hs
              </span>
            </div>
            <div className="content">
              <div className="details">
                <span>
                  <strong>Servicio:</strong> {turno.nombreServicio}
                </span>
                <span>
                  <strong>Duración:</strong> {turno.duracionServicio} min
                </span>
              </div>
              <div className="details">
                <span>
                  <strong>Profesional:</strong> {turno.nombreProfesional}
                </span>
                <span>
                  <strong>DNI cliente:</strong> {turno.dni}
                </span>
              </div>
              <div className="total">
                <span>
                  <strong>TOTAL</strong>
                </span>
                <span>${turno.precioServicio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AgendaScreen;