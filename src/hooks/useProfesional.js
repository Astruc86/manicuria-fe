import { useQuery } from "@tanstack/react-query";
import {
  useEsPrimerProfesional,
  useProfesionalSeleccionado,
} from "../context/StepperContext";
import profesionalesService from "../services/profesionalesService";
import { useEffect } from "react";

export function useProfesional(estaHabilitado) {
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();
  const { esPrimerProfesional } = useEsPrimerProfesional();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["profesional"],
    queryFn: () => profesionalesService.traerId(profesionalSeleccionado.id),
    enabled: estaHabilitado && esPrimerProfesional,
  });

  useEffect(() => {
    if (data && esPrimerProfesional) {
      setProfesionalSeleccionado(data);
    }
  }, [data]);

  return {
    profesionalSeleccionado,
    isError,
    isLoading,
  };
}
