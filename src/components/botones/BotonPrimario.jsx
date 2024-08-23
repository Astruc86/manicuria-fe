import * as React from "react";
import Button from "@mui/material/Button";
import './botones.css'
export function BotonPrimario({ tipo, onClick }) {
  const texto = {
    reservar: "RESERVAR TURNO",
    siguiente: "SIGUIENTE",
    confirmar: "CONFIRMAR",
    ingresar: "INGRESAR",
  };
  return (
    <Button variant="contained" className="btn-primario" onClick={onClick}>
      {texto[tipo]}
    </Button>
  );
}
