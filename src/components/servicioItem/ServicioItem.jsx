import React, { useEffect } from 'react';
import data from "../../json/servicio.json";
import { useAppContext } from '../../context/TurnoContext'; 
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
      <>
        <p>{servicio.descripcion}</p>
      </>
    </div>
  );
};

const ServicioList = () => {
  const { seleccionServicio, setSeleccionServicio } = useAppContext();
  const [servicios, setServicios] = React.useState([]);

  useEffect(() => {
    setServicios(data);
  }, []);

  const handleClick = (servicio) => {
    console.log("Servicio clickeado:", servicio); 
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