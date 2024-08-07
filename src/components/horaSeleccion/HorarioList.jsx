import React, { useEffect, useState } from "react";
import { useStepperContext } from "../../context/StepperContext";
import HorarioItem from "./HorarioItem";
import "./horario-list.css";
import citasService from "../../services/citasService";

const HorarioList = () => {
  const {
    seleccionHorario,
    setSeleccionHorario,
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    profesionalViejo,
    setProfesionalViejo,
    seleccionDia,
    listaProfesionalesBE,
  } = useStepperContext();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        if (
          profesionalSeleccionado &&
          (profesionalSeleccionado.id === 0 || profesionalViejo)
        ) {
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
          isSelected={horario.id === seleccionHorario?.id}
        />
      ))}
    </div>
  );
};
export default HorarioList;
