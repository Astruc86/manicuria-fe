import React, { useEffect, useState } from 'react';
import data from "../../json/servicio.json";
import "./servicio-item.css"

const ServicioItem = ({ servicio, handleClick, isSelected }) => {
  const className = isSelected ? 'servicio-item-wrapper selected' : 'servicio-item-wrapper';

  return (
    <div className={className} onClick={() => handleClick(servicio)}>
      <div className="servicio-info">
        <h3>{servicio.nombre}</h3>
        <p>{servicio.descripcion}</p>
      </div>
      <div className="servicio-detalles">
        <span>{servicio.duracion} min</span>
        <span>${servicio.precio}</span>
      </div>
    </div>
  );
};

const ServicioList = () => {
  const [servicios, setServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  useEffect(() => {
    // Simula una carga asíncrona de datos (puedes ajustarlo a tu método real)
    // Por ejemplo, si usas fetch o axios, cargarías los datos aquí.
    setTimeout(() => {
      setServicios(data); // Carga los datos del JSON en el estado
    }, 1000); // Simula un segundo de carga
  }, []);

  const handleClick = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  return (
    <div className="servicio-list">
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