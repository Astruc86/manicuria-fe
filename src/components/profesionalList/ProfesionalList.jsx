import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import data from "../../json/profesional.json";
import "./profesional-item.css";

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
    setListaProfesionalesBE,
  } = useStepperContext();
  const [profesionales, setProfesionales] = React.useState([]);

  React.useEffect(() => {
    const primerProfesional = {
      id: 0,
      nombre: "Primer Profesional Disponible",
      listaServicios: [],
    };
    const listaProfesionales = [primerProfesional, ...data];
    setProfesionales(listaProfesionales);
    setListaProfesionalesBE(data);
    console.log("Lista de Profesionales BE:", data);
  }, [setListaProfesionalesBE]);

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
          isSelected={
            profesionalSeleccionado &&
            profesional.id === profesionalSeleccionado.id
          }
        />
      ))}
    </div>
  );
};

export default ProfesionalList;
