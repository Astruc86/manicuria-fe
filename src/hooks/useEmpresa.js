import { useQuery, useQueryClient } from "@tanstack/react-query";
import empresasService from "../services/empresasService";

export function useEmpresa() {
  const queryClient = useQueryClient();
  const storedEmpresa = queryClient.getQueryData(["empresa"]);
  const {
    isLoading,
    isError,
    data: empresa = [],
  } = useQuery({
    queryKey: ["empresa"],
    queryFn: () => empresasService.traerId(1),
    enabled: !storedEmpresa
  });

  const listaCarrusel = empresa.listaCarrusel;
  const horarios = empresa.horarios;

  return {
    empresa,
    listaCarrusel,
    horarios,
    isError,
    isLoading,
  };
}
