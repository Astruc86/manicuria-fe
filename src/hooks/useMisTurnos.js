import { useQuery } from "@tanstack/react-query";
import { useTurnosContext } from "../context/TurnosContext";
import turnosService from "../services/turnosService";

export function useMisTurnos() {
  const { turnos: turnosContext } = useTurnosContext();

  const {
    isLoading,
    isError,
    data: turnos = [],
  } = useQuery({
    queryKey: ["turnos"],
    queryFn: () => turnosService.traerTodos(turnosContext),
  });

  return {
    turnos,
    isLoading,
    isError,
  };
}
