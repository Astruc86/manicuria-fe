import React, { useEffect, useState } from 'react';
// Importa el archivo JSON (puedes usar fetch o axios para cargarlo)
import data from "../../json/servicio.json";

const ServicioItem = ({ servicio }) => {
  return (
    <div className="servicio-item">
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

  useEffect(() => {
    // Simula una carga asíncrona de datos (puedes ajustarlo a tu método real)
    // Por ejemplo, si usas fetch o axios, cargarías los datos aquí.
    setTimeout(() => {
      setServicios(data); // Carga los datos del JSON en el estado
    }, 1000); // Simula un segundo de carga
  }, []);

  return (
    <div className="servicio-list">
      {servicios.map((servicio, index) => (
        <ServicioItem key={index} servicio={servicio} />
      ))}
    </div>
  );
};

export default ServicioList;