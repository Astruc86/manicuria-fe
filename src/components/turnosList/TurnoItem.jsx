import dayjs from "dayjs";
import "./turnosList.css";
export function TurnoItem({ turno }) {
  const isPastDate = (date) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };
  return (
    <div className={`turno ${isPastDate(turno.fechaCita) ? "past" : "future"}`}>
      <div className="header">
        <p>
          {dayjs(turno.fechaCita).format("DD-MM-YYYY")} | {turno.horaCita} hs
        </p>
      </div>
      <div className="content">
        <div className="details">
          <p>
            <strong>Servicio:</strong> {turno.nombreServicio}
          </p>
          <p>
            <strong>Duración:</strong> {turno.duracionServicio} min
          </p>
        </div>
        <div className="details">
          <p>
            <strong>Profesional:</strong> {turno.nombreProfesional}
          </p>
          <p>
            <strong>DNI cliente:</strong> {turno.dni}
          </p>
        </div>
        <div className="total">
          <p>
            <strong>TOTAL</strong>
          </p>
          <p>${turno.precioServicio}</p>
        </div>
      </div>
    </div>
  );
}
