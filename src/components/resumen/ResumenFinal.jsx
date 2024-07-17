import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./resumenFinal.css";
import {
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
  useProfesionalViejo,
} from "../../context/StepperContext";
import profesionalesService from "../../services/profesionalesService";

const ResumenFinal = () => {
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } = useProfesionalSeleccionado();
  const { seleccionHorario } = useSeleccionHorario();
  const { seleccionDia } = useSeleccionDia();
  const { profesionalViejo, setProfesionalViejo } = useProfesionalViejo();

  const [profesional, setProfesional] = useState();

  const servicio = seleccionServicio.nombre;
  const precio = `$${seleccionServicio.precio}`;
  const duracion = seleccionServicio.duracion;
  const dia = dayjs(seleccionDia).format("DD-MM-YYYY");
  const hora = seleccionHorario.hora;

  useEffect(() => {
    const fetchProfesional = async () => {
      try {
        const result = await profesionalesService.traerId(profesionalSeleccionado.id);
        setProfesional(result.nombre);
        setProfesionalSeleccionado(result);
      } catch (error) {
        console.error("Error fetching empresas:", error);
      }
    };
    if (profesionalViejo) {
      fetchProfesional();
    }
    else {
      setProfesional(profesionalSeleccionado.nombre)
    }
  }, []);

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
          <span className="bold-text">Profesional:</span> {profesional}
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
