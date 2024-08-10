import React from "react";
import "./resumenFinal.css";
import CircularIndeterminate from "../Progress/CircularIndeterminate";
import { useDatosResumen } from "../../hooks/useDatosResumen";

const ResumenFinal = () => {
  const {
    profesional,
    servicio,
    precio,
    duracion,
    dia,
    hora,
    isLoading,
    isError,
  } = useDatosResumen({ tipo: "final" });

  return (
    <>
      {profesional && (
        <div className="resumen-final-container">
          <div className="resumen-final">
            <h2 className="bold-text">Resumen</h2>
            <p>
              <span className="bold-text">Servicio:</span> {servicio}
            </p>
            <p>
              <span className="bold-text">Precio:</span> {precio}
            </p>
            <p>
              <span className="bold-text">Duración:</span> {duracion} min
            </p>
            <p>
              <span className="bold-text">Profesional:</span> {profesional}
            </p>
            <p>
              <span className="bold-text">Día: </span>
              {dia}
            </p>
            <p>
              <span className="bold-text">Hora: </span>
              {hora}
            </p>
          </div>
        </div>
      )}

      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h1>
          Error cargando los datos. Por favor, intente de nuevo más tarde.
        </h1>
      )}
    </>
  );
};

export default ResumenFinal;
