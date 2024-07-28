import React, { useEffect, useState } from "react";
import turnosService from "../../services/turnosService";
import dayjs from "dayjs";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [dni, setDni] = useState("12345678");

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const result = await turnosService.traerPorDni(dni);
        setTurnos(result);
      } catch (error) {
        console.error("Error fetching turnos:", error);
      }
    };
    fetchTurnos();
  }, [dni]);

  return (
    <div>
      <h2>Turnos para el DNI: {dni}</h2>
      <input 
        type="text" 
        value={dni} 
        onChange={(e) => setDni(e.target.value)} 
        placeholder="Ingresa un DNI para probar"
      />
      {turnos.length === 0 ? (
        <p>No hay turnos disponibles.</p>
      ) : (
        <ul>
          {turnos.map((turno) => (
            <li key={turno.id}>
              <p>DNI del Cliente: {turno.dni}</p>
              <p>Servicio Seleccionado: {turno.nombreServicio}</p>
              <p>Precio Seleccionado: ${turno.precioServicio}</p>
              <p>Duración Seleccionada: {turno.duracionServicio} minutos</p>
              <p>Profesional Seleccionado: {turno.nombreProfesional}</p>
              <p>Día Seleccionado: {dayjs(turno.fechaCita).format('DD/MM/YYYY')}</p>
              <p>Hora Seleccionada: {turno.horaCita}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Turnos;