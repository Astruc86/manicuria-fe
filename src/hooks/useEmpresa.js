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
    enabled: !storedEmpresa,
    cacheTime: 1000 * 60 * 20
  });

  const listaCarrusel = empresa.listaCarrusel;
  const horarios = empresa.horarios;
  const logo = empresa.logo;

  return {
    empresa,
    listaCarrusel,
    horarios,
    logo,
    isError,
    isLoading,
  };
}
