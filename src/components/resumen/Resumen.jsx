import React from "react";
import dayjs from "dayjs";
import "./resumen.css";
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionDia,
  useActiveStep,
  useEsPrimerProfesional,
} from "../../context/StepperContext";
import { useDatosResumen } from "../../hooks/useDatosResumen";

const Resumen = () => {
  const { activeStep } = useActiveStep();
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionDia } = useSeleccionDia();
  const { esPrimerProfesional } = useEsPrimerProfesional();

  const { servicio, precio, duracion, dia } = useDatosResumen({
    tipo: "parcial",
  });

  const profesional = esPrimerProfesional
    ? "Por definir"
    : profesionalSeleccionado?.nombre;

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
          <span className="bold-text">Profesional:</span> {profesional}
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
