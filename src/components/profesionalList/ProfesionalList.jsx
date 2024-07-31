import React, { useEffect } from "react";
import { useStepperContext } from "../../context/StepperContext";
import data from "../../json/profesionales.json";
import "./profesional-item.css";
import profesionalesService from "../../services/profesionalesService";
import { useQuery } from "@tanstack/react-query";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

const ProfesionalItem = ({ profesional, handleClick, isSelected }) => {
  const className = isSelected
    ? "profesional-item-wrapper selected"
    : "profesional-item-wrapper";

  return (
    <div className={className} onClick={() => handleClick(profesional)}>
      <div className="profesional-info d-flex justify-content-between">
        <p>{profesional.nombre}</p>
      </div>
    </div>
  );
};

const ProfesionalList = () => {
  const {
    profesionalSeleccionado,
    setProfesionalSeleccionado,
    seleccionServicio,
    setListaProfesionalesBE,
  } = useStepperContext();
  const [profesionales, setProfesionales] = React.useState([]);
  
  // const {
  //   data: profesionales = [],
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["profesionales", seleccionServicio.id],
  //   queryFn: () => profesionalesService.traerPorServicio(seleccionServicio.id),
  //   select: (data) => {
  //     // Agrega el primer profesional a los datos obtenidos
  //     const primerProfesional = { id: 0, nombre: "Primer Profesional" };
  //     return [primerProfesional, ...data];
  //   },
  //   onSuccess: (data) => {
  //     // Configura el contexto con los datos originales (sin el primer profesional añadido)
  //     setListaProfesionalesBE(data.slice(1));
  //   },
  // });

  useEffect(() => {
    if (profesionales) {
      setListaProfesionalesBE(profesionales);
    }
  }, [profesionales]);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const result = await profesionalesService.traerPorServicio(
          seleccionServicio.id
        );
        const primerProfesional = {
          id: 0,
          nombre: "Primer profesional disponible",
          listaServicios: [],
        };
        setProfesionales([primerProfesional, ...result]);
        setListaProfesionalesBE(result);
      } catch (error) {
        console.error("Error fetching profesionales:", error);
      }
    };

    fetchProfesionales();
  }, []);

  const handleClick = (profesional) => {
    setProfesionalSeleccionado(profesional);
  };

  return (
    <div className="profesional-list">
      {profesionales.map((profesional, index) => (
        <ProfesionalItem
          key={index}
          profesional={profesional}
          handleClick={handleClick}
          isSelected={
            profesionalSeleccionado &&
            profesional.id === profesionalSeleccionado.id
          }
        />
      ))}
    </div>
  );
};

export default ProfesionalList;
