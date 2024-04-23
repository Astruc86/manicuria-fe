import "./informacionContacto.css";
import data from "../../json/empresa.json";
import { useState } from "react";

export const InformacionContacto = () => {
  const [horario, SetHorario] = useState(data.horarios);
  return (
    <div className="tarjeta">
      <div>
        <h3 className="titulo-informacion">Teléfono</h3>
        <p>{data.telefono}</p>
        <h3 className="titulo-informacion">Dirección</h3>
        <p>{data.direccion}</p>
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
