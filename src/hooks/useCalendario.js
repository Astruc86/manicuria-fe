import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useStepperContext } from "../context/StepperContext";
import citasService from "../services/citasService";
import dayjs from "dayjs";
import { useTurnosContext } from "../context/TurnosContext";
import { useMemo } from "react";

export function useCalendario() {
  const { seleccionDia, setSeleccionDia, profesionalSeleccionado } =
    useStepperContext();
  const { turnos } = useTurnosContext();
  const queryClient = useQueryClient();

  const fetchFechas = () => {
    if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
      const storedProfesionales = queryClient.getQueryData(["profesionales"]);
      return citasService.traerPrimerProfesional(storedProfesionales, turnos);
    } else {
      return citasService.traerFiltradasDisponiblesPorProfesional(
        profesionalSeleccionado.id,
        turnos
      );
    }
  };

  const {
    isLoading,
    isError,
    data = [],
  } = useQuery({
    queryKey: ["dias"],
    queryFn: fetchFechas,
  });

  const fechasDisponibles = useMemo(() => {
    return data && data.map((cita) => dayjs(cita.fecha));
  }, [data]);

  return {
    fechasDisponibles,
    isError,
    isLoading,
    seleccionDia,
    setSeleccionDia,
  };
}
