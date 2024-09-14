import "./turnosList.css";
import { TurnoItem } from "./TurnoItem";

export function TurnosList({ turnos }) {
  return (
    <div className="turnos-confirmados">
      {turnos.map((turno) => (
        <TurnoItem key={turno.id} turno={turno} />
      ))}
    </div>
  );
}
