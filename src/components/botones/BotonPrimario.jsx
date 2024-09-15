import * as React from "react";
import Button from "@mui/material/Button";
import "./botones.css";
export function BotonPrimario({ tipo, onClick, deshabilitado }) {
  const texto = {
    reservar: "RESERVAR TURNO",
    siguiente: "SIGUIENTE",
    confirmar: "CONFIRMAR",
    ingresar: "INGRESAR",
    misTurnos: "MIS TURNOS",
    volver: "VOLVER",
    cerrarSesion: "CERRAR SESIÓN",
  };
  return (
    <Button
      variant="contained"
      className="btn-primario"
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto[tipo]}
    </Button>
  );
}
