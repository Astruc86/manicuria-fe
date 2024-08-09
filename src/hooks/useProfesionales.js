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

  const {
    data: profesionales = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["profesionales"],
    queryFn: () => profesionalesService.traerPorServicio(seleccionServicio.id),
  });

  const primerProfesional = {
    id: 0,
    nombre: "Primer Profesional Disponible",
    listaServicios: [],
  };

  const profesionalesPrimerProfesional = profesionales && [
    primerProfesional,
    ...profesionales,
  ];

  const seleccionarProfesional = (profesional) => {
    setProfesionalSeleccionado(profesional);
    if (profesional.id === 0) {
      setEsPrimerProfesional(true);
    } else {
      setEsPrimerProfesional(false);
    }
  };

  return {
    profesionalesPrimerProfesional,
    profesionalSeleccionado,
    isError,
    isLoading,
    seleccionarProfesional
  };
}
