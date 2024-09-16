import { useQuery } from "@tanstack/react-query";
import { useTurnosContext } from "../context/TurnosContext";
import turnosService from "../services/turnosService";
import { useUsuario } from "./useUsuario";

export function useMisTurnos() {
  const { turnos: turnosContext } = useTurnosContext();
  const { dni } = useUsuario();

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
