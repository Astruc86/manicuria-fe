import { Button } from "@mui/material";
import "./botones.css";

export function BotonSecundario({ tipo, onClick, visibilidad }) {
  const texto = {
    volver: "VOLVER",
    cancelar: "CANCELAR",
  };

  return (
    <Button
      color="inherit"
      onClick={onClick}
      className="btn-secundario"
      sx={{ visibility: visibilidad }}
    >
      {texto[tipo]}
    </Button>
  );
}
