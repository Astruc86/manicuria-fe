import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useStepperContext } from "../context/StepperContext";
import citasService from "../services/citasService";
import { useTurnosContext } from "../context/TurnosContext";

export function useHorarios() {
  const {
    seleccionHorario,
    setSeleccionHorario,
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    seleccionDia,
    esPrimerProfesional,
  } = useStepperContext();

  const { turnos } = useTurnosContext();

  const queryClient = useQueryClient();
  const fetchHorarios = () => {
    if (esPrimerProfesional) {
      const storedProfesionales = queryClient.getQueryData(["profesionales"]);

      return citasService.traerHorasPrimerProfesional(
        seleccionDia,
        storedProfesionales,
        turnos
      );
    } else {
      return citasService.traerHorasDisponiblesPorDiaProfesional(
        seleccionDia,
        profesionalSeleccionado.id,
        turnos
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

  const seleccionarHorario = (horario) => {
    if (esPrimerProfesional) {
      setProfesionalSeleccionado({ id: horario.listaProfesionales[0] });
    }
    setSeleccionHorario(horario);
  };

  return { horarios, isLoading, isError, seleccionarHorario, seleccionHorario };
}
