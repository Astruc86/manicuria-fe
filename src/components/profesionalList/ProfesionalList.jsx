import React from "react";
import "./profesional-item.css";
import CircularIndeterminate from "../Progress/CircularIndeterminate";
import { useProfesionales } from "../../hooks/useProfesionales";

const ProfesionalItem = ({ profesional, handleClick, isSelected }) => {
  const className = isSelected
    ? "profesional-item-wrapper selected"
    : "profesional-item-wrapper";

  return (
    <div className={className} onClick={() => handleClick(profesional)}>
      <div className="profesional-info d-flex justify-content-between">
        <p>{profesional.nombre}</p>
      </div>
    </div>
  );
};

const ProfesionalList = () => {
  const {
    profesionales,
    profesionalSeleccionado,
    isError,
    isLoading,
    seleccionarProfesional
  } = useProfesionales();

  return (
    <>
      {profesionales.length > 0 && (
        <div className="profesional-list">
          {profesionales.map((profesional, index) => (
            <ProfesionalItem
              key={index}
              profesional={profesional}
              handleClick={seleccionarProfesional}
              isSelected={
                profesionalSeleccionado &&
                profesional.id === profesionalSeleccionado.id
              }
            />
          ))}
        </div>
      )}
      {isLoading && <CircularIndeterminate />}
      {!isError && !isLoading && profesionales.length === 0 && (
        <h1>No hay profesionales disponibles.</h1>
      )}
      {isError && (
        <h1>
          Error cargando los profesionales. Por favor, intente de nuevo más
          tarde.
        </h1>
      )}
    </>
  );
};

export default ProfesionalList;
