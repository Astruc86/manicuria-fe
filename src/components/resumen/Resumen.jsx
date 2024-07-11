import React from 'react';
import dayjs from "dayjs";
import './resumen.css';
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
  useActiveStep,
} from "../../context/StepperContext";

const Resumen = () => {
  const { activeStep } = useActiveStep();
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionHorario } = useSeleccionHorario();
  const { seleccionDia } = useSeleccionDia();

  const servicio = seleccionServicio?.nombre;
  const precio =`$${seleccionServicio.precio}`;
  const duracion = seleccionServicio?.duracion || 30;
  const profesional = profesionalSeleccionado?.nombre;
  const dia =  dayjs(seleccionDia).format('DD-MM-YYYY');

  return (
    <div className="resumen">
      <h2>Resumen</h2>
      {activeStep >= 0 && (
        <p>Servicio: {servicio}</p>
      )}
      {activeStep >= 1 && (
        <>
          <p>Precio: {precio}</p>
          <p>Duración: {duracion} min</p>
        </>
      )}
      {activeStep >= 2 && (
        <p>Profesional: {profesional}</p>
      )}
      {activeStep >= 3 && (
        <>
          <p>Día: {dia}</p>
        </>
      )}
    </div>
  );
};

export default Resumen;