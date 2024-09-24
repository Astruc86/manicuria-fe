import * as React from "react";
import Button from "@mui/material/Button";
export function BotonTerciario({ tipo, onClick }) {
  const texto = {
    ingresarCliente: "INGRESAR COMO CLIENTE",
    ingresarEmpresa: "INGRESAR COMO EMPRESA",
    cancelar: "CANCELAR",
  };
  const estilosBtnTerciario = {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    fontSize: "0.7em",
    color: "#1e1e1e",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };
  return (
    <Button variant="text" sx={estilosBtnTerciario} onClick={onClick}>
      {texto[tipo]}
    </Button>
  );
}
