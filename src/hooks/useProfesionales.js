import { useCallback } from "react";
import { useStepperContext } from "../context/StepperContext";
import profesionalesService from "../services/profesionalesService";
import { useQuery } from "@tanstack/react-query";

export function useProfesionales() {
  const {
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    seleccionServicio,
    setEsPrimerProfesional,
  } = useStepperContext();

  const agregarPrimerProfesional = useCallback((profesionales) => {
    if (!profesionales) return;
    const primerProfesional = {
      id: 0,
      nombre: "Primer Profesional Disponible",
      listaServicios: [],
    };
    return [primerProfesional, ...profesionales];
  }, []);

  const {
    data: profesionales = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["profesionales"],
    queryFn: () => profesionalesService.traerPorServicio(seleccionServicio.id),
    select: agregarPrimerProfesional,
  });

  const seleccionarProfesional = (profesional) => {
    setProfesionalSeleccionado(profesional);
    if (profesional.id === 0) {
      setEsPrimerProfesional(true);
    } else {
      setEsPrimerProfesional(false);
    }
  };

  return {
    profesionales,
    profesionalSeleccionado,
    isError,
    isLoading,
    seleccionarProfesional,
  };
}
