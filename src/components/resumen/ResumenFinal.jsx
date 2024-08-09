import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./resumenFinal.css";
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
  useEsPrimerProfesional,
} from "../../context/StepperContext";
import profesionalesService from "../../services/profesionalesService";
import { useQuery } from "@tanstack/react-query";

const ResumenFinal = () => {
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();
  const { seleccionHorario } = useSeleccionHorario();
  const { seleccionDia } = useSeleccionDia();
  const { esPrimerProfesional, setEsPrimerProfesional } =
    useEsPrimerProfesional();

  const servicio = seleccionServicio.nombre;
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio.duracion;
  const dia = dayjs(seleccionDia).format("DD-MM-YYYY");
  const hora = seleccionHorario.hora;

  const { isLoading, isError, data } = useQuery({
    queryKey: ["profesional"],
    queryFn: () => profesionalesService.traerId(profesionalSeleccionado.id),
    enabled: esPrimerProfesional,
  });

  useEffect(() => {
    if (!data || !esPrimerProfesional) return;
    setProfesionalSeleccionado(data);
  }, [data]);

  const profesional =
    esPrimerProfesional && data ? data : profesionalSeleccionado;
  const profesionalNombre = profesional.nombre;

  return (
    <div className="resumen-final-container">
      <div className="resumen-final">
        <h2 className="bold-text">Resumen</h2>
        <p>
          <span className="bold-text">Servicio:</span> {servicio}
        </p>
        <p>
          <span className="bold-text">Precio:</span> {precio}
        </p>
        <p>
          <span className="bold-text">Duración:</span> {duracion} min
        </p>
        <p>
          <span className="bold-text">Profesional:</span> {profesionalNombre}
        </p>
        <p>
          <span className="bold-text">Día: </span>
          {dia}
        </p>
        <p>
          <span className="bold-text">Hora: </span>
          {hora}
        </p>
      </div>
    </div>
  );
};

export default ResumenFinal;
