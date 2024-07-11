import React, { useEffect, useState } from 'react';
import horarioData from "../../json/citaHoraDTO.json";
import horarioPrimerProfesionalData from "../../json/citaHoraPrimerProfesionalDTO.json";
import { useStepperContext } from '../../context/StepperContext'; 
import HorarioItem from './HorarioItem';
import './horario-list.css';

const HorarioList = () => {
  const { seleccionHorario, setSeleccionHorario, profesionalSeleccionado } = useStepperContext();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    try {
      if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
        setHorarios(horarioPrimerProfesionalData)
      } else {
        setHorarios(horarioData);
      }
    } catch (error) {
      console.error("Error al cargar los datos del cronograma:", error);
    }
  }, [profesionalSeleccionado]);

  const handleClick = (horario) => {
    setSeleccionHorario(horario);
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