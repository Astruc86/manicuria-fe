import HorarioItem from "./HorarioItem";
import "./horario-list.css";
import CircularIndeterminate from "../Progress/CircularIndeterminate";
import { useHorarios } from "../../hooks/useHorarios";

const HorarioList = () => {
  const { horarios, isLoading, isError, seleccionarHorario, seleccionHorario } =
    useHorarios();

  return (
    <>
      {horarios.length > 0 && (
        <div className="horario-list">
          {horarios.map((horario) => (
            <HorarioItem
              key={horario.id}
              horario={horario}
              handleClick={seleccionarHorario}
              isSelected={horario.id === seleccionHorario?.id}
            />
          ))}
        </div>
      )}

      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>
          Error cargando los horarios. Por favor, intente de nuevo más tarde.
        </h3>
      )}
      {!isError && !isLoading && horarios.length === 0 && (
        <h3>No hay horarios disponibles.</h3>
      )}
    </>
  );
};
export default HorarioList;
