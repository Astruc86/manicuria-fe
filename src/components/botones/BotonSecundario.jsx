import { Button } from "@mui/material";

export function BotonSecundario({ tipo, onClick, visibilidad }) {
  const texto = {
    volver: "VOLVER",
    cancelar: "CANCELAR",
  };

  const estilosBtnSecundario = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#1e1e1e',
    border: '1px solid #f7c1c9',
    paddingLeft: 2,
    paddingRight: 2,
    visibility: visibilidad 
  };

  return (
    <Button
      color="inherit"
      onClick={onClick}
      sx={estilosBtnSecundario}
    >
      {texto[tipo]}
    </Button>
  );
}
