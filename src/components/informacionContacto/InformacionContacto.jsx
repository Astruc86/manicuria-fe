import "./informacionContacto.css";
import React, { useEffect, useState } from "react";
import empresasService from "../../services/empresasService";

export const InformacionContacto = () => {
  const [horario, setHorario] = useState([]);
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const result = await empresasService.traerId(1);
        setEmpresa(result);
        setHorario(result.horarios);
      } catch (error) {
        console.error("Error fetching empresas:", error);
      }
    };

    fetchEmpresa();
  }, []);

  return (
    <div className="tarjeta">
      <div>
        <h3 className="titulo-informacion">Teléfono</h3>
        <p>{empresa.telefono}</p>
        <h3 className="titulo-informacion">Dirección</h3>
        <p>{empresa.direccion}</p>
        <h3 className="titulo-informacion">Horarios</h3>
        <>
          {horario.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
      </div>
    </div>
  );
};
