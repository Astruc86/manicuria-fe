import React, { useEffect, useState } from 'react';
import data from "../../json/servicio.json";
import { useStepperContext } from '../../context/StepperContext'; 
import "./servicio-item.css";

const ServicioItem = ({ servicio, handleClick, isSelected }) => {
  const className = isSelected ? 'servicio-item-wrapper selected' : 'servicio-item-wrapper';

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
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    try {
      setServicios(data);
    } catch (error) {
      console.error("Error loading services data:", error);
    }
  }, []);

  const handleClick = (servicio) => {
    setSeleccionServicio(servicio);
  };

  return (
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
  );
};

export default ServicioList;