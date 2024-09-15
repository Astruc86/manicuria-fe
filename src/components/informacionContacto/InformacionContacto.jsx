import "./informacionContacto.css";
import React from "react";
import { useEmpresa } from "../../hooks/useEmpresa";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

export const InformacionContacto = () => {
  const { empresa, horarios, isLoading, isError } = useEmpresa();

  return (
    <>
      {empresa && (
        <div className="tarjeta">
          <div>
            <h3 className="titulo-informacion">Teléfono</h3>
            <p>{empresa.telefono}</p>
            <h3 className="titulo-informacion">Dirección</h3>
            <p>{empresa.direccion}</p>
            <h3 className="titulo-informacion">Horarios</h3>
            <>
              {horarios.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </>
          </div>
        </div>
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>
          Error cargando los datos de la empresa. Por favor, intente de nuevo
          más tarde.
        </h3>
      )}
    </>
  );
};
