import { useQuery } from "@tanstack/react-query";
import { useTurnosContext } from "../context/TurnosContext";
import turnosService from "../services/turnosService";

export function useMisTurnos() {
  const { turnos: turnosContext } = useTurnosContext();
  //TODO cuando se pushee la rama MIA-101 traer del useUsuarioContext el dni
  const dni = "11111111";

  const {
    isLoading,
    isError,
    data: turnos = [],
  } = useQuery({
    queryKey: ["turnosDni"],
    queryFn: () => turnosService.traerPorDni(dni, turnosContext),
  });

  return {
    turnos,
    isLoading,
    isError,
  };
}
