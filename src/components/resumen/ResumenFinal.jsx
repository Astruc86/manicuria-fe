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

  const servicio = seleccionServicio.nombre 
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio.duracion;
  const profesional = profesionalSeleccionado.nombre ;
  const dia =  dayjs(seleccionDia).format('DD-MM-YYYY');
  const hora = seleccionHorario.hora;

  return (
    <div className="resumen-final">
      <h2>Resumen</h2>
      <p>Servicio: {servicio}</p>
      <p>Precio: {precio}</p>
      <p>Duración: {duracion} min</p>
      <p>Profesional: {profesional}</p>
      <p>Día: {dia}</p>
      <p>Hora: {hora}</p>
    </div>
  );
};

export default ResumenFinal;