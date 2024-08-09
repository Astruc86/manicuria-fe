import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import HorarioItem from "./HorarioItem";
import "./horario-list.css";
import citasService from "../../services/citasService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

const HorarioList = () => {
  const {
    seleccionHorario,
    setSeleccionHorario,
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    seleccionDia,
    esPrimerProfesional,
  } = useStepperContext();

  const queryClient = useQueryClient();
  const fetchHorarios = () => {
    if (esPrimerProfesional) {
      const storedProfesionales = queryClient.getQueryData(["profesionales"]);

      return citasService.traerHorasPrimerProfesional(
        seleccionDia,
        storedProfesionales
      );
    } else {
      return citasService.traerHorasDisponiblesPorDiaProfesional(
        seleccionDia,
        profesionalSeleccionado.id
      );
    }
  };

  const {
    isLoading,
    isError,
    data: horarios = [],
  } = useQuery({
    queryKey: ["horarios"],
    queryFn: fetchHorarios,
  });

  const handleClick = (horario) => {
    if (esPrimerProfesional) {
      setProfesionalSeleccionado({ id: horario.listaProfesionales[0] });
    }
    setSeleccionHorario(horario);
  };

  return (
    <>
      {horarios.length > 0 && (
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
      )}

      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h1>
          Error cargando los horarios. Por favor, intente de nuevo más tarde.
        </h1>
      )}
      {!isError && !isLoading && horarios.length === 0 && (
        <h1>No hay horarios disponibles.</h1>
      )}
    </>
  );
};
export default HorarioList;
