import React, { useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import data from "../../json/profesionales.json";
import "./profesional-item.css";
import profesionalesService from "../../services/profesionalesService";

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
  } = useStepperContext();
  const [profesionales, setProfesionales] = React.useState([]);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const result = await profesionalesService.traerPorServicio(
          seleccionServicio.id
        );
        const primerProfesional = {
          id: 0,
          nombre: "Primer profesional disponible",
          listaServicios: [],
        };
        setProfesionales([primerProfesional, ...result]);
      } catch (error) {
        console.error("Error fetching profesionales:", error);
      }
    };

    fetchProfesionales();
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
