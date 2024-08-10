import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useStepperContext } from "../context/StepperContext";
import { useTurnosContext } from "../context/TurnosContext";
import citasService from "../services/citasService";
import turnosService from "../services/turnosService";
import { useEffect } from "react";

export function useTurno() {
  const {
    seleccionCita,
    seleccionDia,
    setSeleccionCita,
    seleccionServicio,
    profesionalSeleccionado,
    setSeleccionDni,
    seleccionDni,
    seleccionHorario,
    limpiarStepper,
  } = useStepperContext();
  const { generarId, agregarTurno } = useTurnosContext();
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
      cita: seleccionCita,
      servicio: seleccionServicio,
      profesional: profesionalSeleccionado,
      dni: seleccionDni,
    };
    return turnosService.crear(turno, agregarTurno, generarId);
  };

  const {
    mutate,
    isError: isErrorTurno,
    isLoading: isLoadingTurno,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: fetchTurno
  });

  useEffect(() => {
    if (!cita || !seleccionDni) return;
    setSeleccionCita(cita);
  }, [cita]);

  useEffect(() => {
    if (!seleccionCita && !seleccionDni) return;

    mutate();
  }, [seleccionCita]);

  const limpiarTurnoScreen = () => {
    limpiarStepper();
    queryClient.invalidateQueries();
    reset();
  };

  return {
    isError: isError || isErrorTurno,
    isLoading: isLoading || isLoadingTurno,
    isSuccess,
    limpiarTurnoScreen,
  };
}
