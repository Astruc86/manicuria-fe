import React, { useEffect, useState } from 'react';
import data from "../../json/profesional.json";
import "./profesional-item.css"; // Asegúrate de tener el archivo CSS correcto

const ProfesionalItem = ({ profesional, handleClick, isSelected }) => {
  const className = isSelected ? 'profesional-item-wrapper selected' : 'profesional-item-wrapper';

  return (
    <div className={className} onClick={() => handleClick(profesional)}>
      <div className="profesional-info d-flex justify-content-between">
        <p>{profesional.nombre}</p>
      </div>
    </div>
  );
};

const ProfesionalList = () => {
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);

  useEffect(() => {
    setProfesionales(["Primer profesional disponible", ...data]);
  }, []);

  const handleClick = (profesional) => {
    setProfesionalSeleccionado(profesional);
  };

  return (
    <div className="profesional-list">
      {profesionales.map((profesional, index) => (
        <ProfesionalItem
          key={index}
          profesional={profesional}
          handleClick={handleClick}
          isSelected={profesional === profesionalSeleccionado}
        />
      ))}
    </div>
  );
};

export default ProfesionalList;