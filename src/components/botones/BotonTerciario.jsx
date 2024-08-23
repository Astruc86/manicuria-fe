import * as React from "react";
import Button from "@mui/material/Button";
export function BotonTerciario({ tipo, onClick }) {
  const texto = {
    ingresarCliente: "INGRESAR COMO CLIENTE",
    ingresarEmpresa: "INGRESAR COMO EMPRESA",
  };
  return (
    <Button variant="text" className="btn-terciario" onClick={onClick}>
      {texto[tipo]}
    </Button>
  );
}
