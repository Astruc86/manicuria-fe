import dayjs from "dayjs";
import {
  useSeleccionDia,
  useSeleccionHorario,
  useSeleccionServicio,
} from "../context/StepperContext";
import { useProfesional } from "./useProfesional";

export function useDatosResumen({ tipo }) {
  const { seleccionServicio } = useSeleccionServicio();
  const { seleccionHorario } = useSeleccionHorario();
  const { seleccionDia } = useSeleccionDia();
  const { profesionalSeleccionado, isLoading, isError } = useProfesional(tipo == "final");

  const servicio = seleccionServicio.nombre;
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio.duracion;
  const profesional = profesionalSeleccionado?.nombre;
  const dia = dayjs(seleccionDia).format("DD-MM-YYYY");
  const hora = seleccionHorario?.hora;

  return {
    profesional,
    servicio,
    precio,
    duracion,
    dia,
    hora,
    isLoading,
    isError,
  };
}
