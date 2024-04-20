import "./informacionContacto.css";
import data from "../../json/empresa.json";
import { useState } from "react";

export const InformacionContacto = () => {
  const [horario, SetHorario] = useState(data.horarios);
  return (
    <div className="tarjeta">
      <div>
        <h3 className="tituloInformacion">Teléfono</h3>
        <p>{data.telefono}</p>
        <h3 className="tituloInformacion">Dirección</h3>
        <p>{data.direccion}</p>
        <h3 className="tituloInformacion">Horarios</h3>
        <>
          {horario.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
      </div>
    </div>
  );
};
