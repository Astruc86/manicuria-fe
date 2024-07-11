import React, { useEffect, useState } from "react";
import { useStepperContext } from "../../context/StepperContext";
import HorarioItem from "./HorarioItem";
import "./horario-list.css";
import citasService from "../../services/citasService";

const HorarioList = () => {
  const { seleccionHorario, setSeleccionHorario, profesionalSeleccionado, seleccionDia, listaProfesionalesBE } =
    useStepperContext();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {

        if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
          const result = await citasService.traerHorasPrimerProfesional(
            seleccionDia,
            listaProfesionalesBE
          );
          setHorarios(result);
        } else {
          const result =
            await citasService.traerHorasDisponiblesPorDiaProfesional(
              seleccionDia,
              profesionalSeleccionado.id
            );
          setHorarios(result);
        }
      } catch (error) {
        console.error("Error fetching horarios:", error);
      }
    };

    fetchHorarios();
  }, []);

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
