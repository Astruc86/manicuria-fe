import React from "react";
import dayjs from "dayjs";
import "./resumen.css";
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionDia,
  useActiveStep,
} from "../../context/StepperContext";

const Resumen = () => {
  const { activeStep } = useActiveStep();
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionDia } = useSeleccionDia();

  const servicio = seleccionServicio?.nombre;
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio?.duracion;
  const profesional = profesionalSeleccionado?.nombre;
  const dia = dayjs(seleccionDia).format("DD-MM-YYYY");

  return (
    <div className="resumen">
      <h2 className="bold-text">Resumen</h2>
      {activeStep >= 0 && (
        <p>
          <span className="bold-text">Servicio:</span> {servicio}
        </p>
      )}
      {activeStep >= 1 && (
        <>
          <p>
            <span className="bold-text">Precio:</span> {precio}
          </p>
          <p>
            <span className="bold-text">Duración:</span> {duracion} min
          </p>
        </>
      )}
      {activeStep >= 2 && (
        <p>
          <span className="bold-text">Profesional:</span>{" "}
          {profesionalSeleccionado.id === 0 ? "Por definir" : profesional}
        </p>
      )}
      {activeStep >= 3 && (
        <>
          <p>
            <span className="bold-text">Día:</span> {dia}
          </p>
        </>
      )}
    </div>
  );
};

export default Resumen;
