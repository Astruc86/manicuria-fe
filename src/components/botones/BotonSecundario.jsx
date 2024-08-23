import { Button } from "@mui/material";

export function BotonSecundario({ tipo, onClick }) {
  const texto = {
    volver: "VOLVER",
    cancelar: "CANCELAR",
  };
  return (
    <Button color="inherit" onClick={onClick}>
      {tipo[texto]}
    </Button>
  );
}
