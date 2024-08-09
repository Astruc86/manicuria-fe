import { useQuery } from "@tanstack/react-query";
import {
  useEsPrimerProfesional,
  useProfesionalSeleccionado,
} from "../context/StepperContext";
import profesionalesService from "../services/profesionalesService";

export function useProfesional(estaHabilitado) {
  const { profesionalSeleccionado } = useProfesionalSeleccionado();
  const { esPrimerProfesional } = useEsPrimerProfesional();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["profesional"],
    queryFn: () => profesionalesService.traerId(profesionalSeleccionado.id),
    enabled: estaHabilitado && esPrimerProfesional,
  });

  const profesional =
    esPrimerProfesional && data ? data : profesionalSeleccionado;

  return { profesional, isError, isLoading };
}
