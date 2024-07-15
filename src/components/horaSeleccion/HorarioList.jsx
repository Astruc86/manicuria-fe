import React, { useEffect, useState } from "react";
import horarioData from "../../json/citaHoraDTO.json";
import horarioPrimerProfesionalData from "../../json/citaHoraPrimerProfesionalDTO.json";
import { useStepperContext } from "../../context/StepperContext";
import HorarioItem from "./HorarioItem";
import "./horario-list.css";

const HorarioList = () => {
  const {
    seleccionHorario,
    setSeleccionHorario,
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    profesionalViejo,
    setProfesionalViejo,
  } = useStepperContext();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    try {
      if (
        profesionalSeleccionado &&
        (profesionalSeleccionado.id === 0 || profesionalViejo)
      ) {
        setHorarios(horarioPrimerProfesionalData);
      } else {
        setHorarios(horarioData);
      }
    } catch (error) {
      console.error("Error al cargar los datos del cronograma:", error);
    }
  }, []);

  const handleClick = (horario) => {
    setSeleccionHorario(horario);
    if (profesionalSeleccionado.id === 0 || profesionalViejo) {
      setProfesionalViejo(profesionalSeleccionado);
      setProfesionalSeleccionado({ id: horario.listaProfesionales[0] });
    }
  };

  return (
    <div className="horario-list">
      {horarios.map((horario) => (
        <HorarioItem
          key={horario.id}
          horario={horario}
          handleClick={handleClick}
          isSelected={horario === seleccionHorario}
        />
      ))}
    </div>
  );
};
export default HorarioList;
