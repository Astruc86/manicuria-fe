import React, { useEffect, useState } from 'react';
import data from "../../json/servicio.json";
import "./servicio-item.css"

const ServicioItem = ({ servicio, handleClick, isSelected }) => {
  const className = isSelected ? 'servicio-item-wrapper selected' : 'servicio-item-wrapper';

  return (
     <div className={className} onClick={() => handleClick(servicio)}>
      <div className="servicio-info d-flex justify-content-between" >
        <p>{servicio.nombre}</p>
        <p>{servicio.duracion} min</p>
        <p>${servicio.precio}</p>
      </div>
      <>
        <p>{servicio.descripcion}</p>
      </>
    </div>
  );
};

const ServicioList = () => {
  const [servicios, setServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  useEffect(() => {
    //Aca va el fetch
    setTimeout(() => {
      setServicios(data); 
    }, 1000); // Simula un segundo de carga
  }, []);

  const handleClick = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  return (
    <div className="servicio-list" >
      {servicios.map((servicio, index) => (
        <ServicioItem
          key={index}
          servicio={servicio}
          handleClick={handleClick}
          isSelected={servicio === servicioSeleccionado}
        />
      ))}
    </div>
  );
};

export default ServicioList;