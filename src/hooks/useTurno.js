import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useStepperContext } from "../context/StepperContext";
import { useTurnosContext } from "../context/TurnosContext";
import citasService from "../services/citasService";
import turnosService from "../services/turnosService";
import { useEffect } from "react";

export function useTurno() {
  const {    
    seleccionDia,
    setSeleccionCita,
    seleccionServicio,
    profesionalSeleccionado,
    seleccionDni,
    seleccionHorario,
    limpiarStepper,
  } = useStepperContext();
  const { agregarTurno } = useTurnosContext();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: cita = null,
  } = useQuery({
    queryKey: ["cita"],
    queryFn: () =>
      citasService.traerPorProfesionalFechaHora(
        seleccionDia,
        profesionalSeleccionado.id,
        seleccionHorario.hora
      ),
    enabled: !!seleccionDni,
  });

  const fetchTurno = () => {
    const turno = {
      cita: cita,
      servicio: seleccionServicio,
      profesional: profesionalSeleccionado,
      dni: seleccionDni,
    };
    return turnosService.crear(turno);
  };

  const {
    mutate,
    isError: isErrorTurno,
    isLoading: isLoadingTurno,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: fetchTurno,
    onSuccess: () =>
      agregarTurno({
        cita: cita,
        servicio: seleccionServicio,
        profesional: profesionalSeleccionado,
        dni: seleccionDni,
      }),
  });

  useEffect(() => {    
    if (!cita || !seleccionDni) return;
    setSeleccionCita(cita);
    mutate();
  }, [cita]);

  const limpiarTurnoScreen = () => {
    limpiarStepper();
    queryClient.removeQueries()
    reset();
  };

  return {
    isError: isError || isErrorTurno,
    isLoading: isLoading || isLoadingTurno,
    isSuccess,
    limpiarTurnoScreen,
  };
}
