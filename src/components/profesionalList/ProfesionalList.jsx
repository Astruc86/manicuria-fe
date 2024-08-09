import React, { useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import data from "../../json/profesionales.json";
import "./profesional-item.css";
import profesionalesService from "../../services/profesionalesService";
import { useQuery } from "@tanstack/react-query";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

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
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    seleccionServicio,
    setEsPrimerProfesional
  } = useStepperContext();

  const {
    data: profesionales = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["profesionales"],
    queryFn: () => profesionalesService.traerPorServicio(seleccionServicio.id),
  });

  const primerProfesional = {
    id: 0,
    nombre: "Primer Profesional Disponible",
    listaServicios: [],
  };

  const profesionalesPrimerProfesional = profesionales && [
    primerProfesional,
    ...profesionales,
  ];

  const handleClick = (profesional) => {
    setProfesionalSeleccionado(profesional);
    if(profesional.id === 0) {
      setEsPrimerProfesional(true)
    }
    else {
      setEsPrimerProfesional(false)
    }
  };

  return (
    <>
      {profesionalesPrimerProfesional.length > 0 && (
        <div className="profesional-list">
          {profesionalesPrimerProfesional.map((profesional, index) => (
            <ProfesionalItem
              key={index}
              profesional={profesional}
              handleClick={handleClick}
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
