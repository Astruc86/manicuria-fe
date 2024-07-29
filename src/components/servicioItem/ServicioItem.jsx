import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import "./servicio-item.css";
import serviciosService from "../../services/serviciosService";
import { useQuery } from "@tanstack/react-query";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

const ServicioItem = ({ servicio, handleClick, isSelected }) => {
  const className = isSelected
    ? "servicio-item-wrapper selected"
    : "servicio-item-wrapper";

  return (
    <div className={className} onClick={() => handleClick(servicio)}>
      <div className="servicio-info d-flex justify-content-between">
        <p>{servicio.nombre}</p>
        <p>{servicio.duracion} min</p>
        <p>${servicio.precio}</p>
      </div>
      <p>{servicio.descripcion}</p>
    </div>
  );
};

const ServicioList = () => {
  const { seleccionServicio, setSeleccionServicio } = useStepperContext();
  const {
    isLoading,
    isError,
    data: servicios = [],
  } = useQuery({
    queryKey: ["servicios"],
    queryFn: serviciosService.traerTodos,
  });

  const handleClick = (servicio) => {
    setSeleccionServicio(servicio);
  };

  return (
    <>
      {servicios.length > 0 && (
        <div className="servicio-list">
          {servicios.map((servicio, index) => (
            <ServicioItem
              key={index}
              servicio={servicio}
              handleClick={handleClick}
              isSelected={servicio === seleccionServicio}
            />
          ))}
        </div>
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h1>
          Error cargando los servicios. Por favor, intente de nuevo más tarde.
        </h1>
      )}
      {!isError && !isLoading && servicios.length === 0 && (
        <h1>No hay servicios disponibles.</h1>
      )}
    </>
  );
};

export default ServicioList;
