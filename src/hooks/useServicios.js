import { useQuery } from "@tanstack/react-query";
import { useStepperContext } from "../context/StepperContext";
import serviciosService from "../services/serviciosService";

export function useServicios() {
  const { seleccionServicio, setSeleccionServicio } = useStepperContext();
  const {
    isLoading,
    isError,
    data: servicios = [],
  } = useQuery({
    queryKey: ["servicios"],
    queryFn: serviciosService.traerTodos,
  });

  const seleccionarServicio = (servicio) => {
    setSeleccionServicio(servicio);
  };

  return {
    servicios,
    seleccionServicio,
    isError,
    isLoading,
    seleccionarServicio,
  };
}
