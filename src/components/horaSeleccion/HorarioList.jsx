import React, { useEffect, useState } from "react";
import { useStepperContext } from "../../context/StepperContext";
import HorarioItem from "./HorarioItem";
import "./horario-list.css";
import citasService from "../../services/citasService";

const HorarioList = () => {
  const { seleccionHorario, setSeleccionHorario, profesionalSeleccionado } =
    useStepperContext();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        // to do: eliminar esta fechaSeleccionada cuando la rama de citas este pusheada
        // to do: eliminar esta listaProfesionales cuando la rama de citas este pusheada
        const fechaSeleccionada = "2024-08-27";
        const listaProfesionalesBE = [
          {
            id: 2,
            nombre: "María",
            dni: "87654321",
            sueldo: 2500,
            listaServicios: [1, 4, 6],
          },
          {
            id: 4,
            nombre: "Ana",
            dni: "23456789",
            sueldo: 3000,
            listaServicios: [2, 3, 5],
          },
          {
            id: 5,
            nombre: "Carlos",
            dni: "34567890",
            sueldo: 2200,
            listaServicios: [3, 4, 6],
          },
        ];

        if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
          const result = await citasService.traerHorasPrimerProfesional(
            fechaSeleccionada,
            listaProfesionalesBE
          );
          setHorarios(result);
        } else {
          const result =
            await citasService.traerHorasDisponiblesPorDiaProfesional(
              fechaSeleccionada,
              profesionalSeleccionado.id
            );
          setHorarios(result);
        }
      } catch (error) {
        console.error("Error fetching horarios:", error);
      }
    };

    fetchHorarios();
  }, []);

  const handleClick = (horario) => {
    setSeleccionHorario(horario);
  };

  return (
    <div className="horario-list">
      {horarios.map((horario) => (
        <HorarioItem
          key={horario.id}
          horario={horario}
          handleClick={handleClick}
          isSelected={horario === seleccionHorario}
        />
      ))}
    </div>
  );
};
export default HorarioList;
