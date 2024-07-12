import React from 'react';
import dayjs from "dayjs";
import './resumenFinal.css';
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
} from "../../context/StepperContext";

const ResumenFinal = () => {
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionHorario } = useSeleccionHorario();
  const { seleccionDia } = useSeleccionDia();

  const servicio = seleccionServicio.nombre;
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio.duracion;
  const profesional = profesionalSeleccionado.nombre;
  const dia =  dayjs(seleccionDia).format('DD-MM-YYYY');
  const hora = seleccionHorario.hora;

  return (
    <div className="resumen-final-container">
      <div className="resumen-final">
        <h2 className="bold-text">Resumen</h2>
        <p><span className="bold-text">Servicio:</span> {servicio}</p>
        <p><span className="bold-text">Precio:</span> {precio}</p>
        <p><span className="bold-text">Duración:</span> {duracion} min</p>
        <p><span className="bold-text">Profesional:</span> {profesional}</p>
        <p><span className="bold-text">Día: </span>{dia}</p>
        <p><span className="bold-text">Hora: </span>{hora}</p>
      </div>
    </div>
  );
};

export default ResumenFinal;