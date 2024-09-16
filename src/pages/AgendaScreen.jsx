import { useAgenda } from "../hooks/useAgenda";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import { TurnosList } from "../components/turnosList/TurnosList";

const AgendaScreen = () => {
  const { turnos, isLoading, isError } = useAgenda();

  return (
    <div className="container">
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>
          Error cargando los turnos. Por favor, intente de nuevo más tarde.
        </h3>
      )}
      {!isError && !isLoading && turnos.length === 0 && (
        <h3>No hay turnos reservados</h3>
      )}
      {turnos.length > 0 && <TurnosList turnos={turnos} />}
    </div>
  );
};

export default AgendaScreen;
