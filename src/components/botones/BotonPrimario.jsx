import Button from "@mui/material/Button";

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
  const estilosBtnPrimario = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#1e1e1e',
    backgroundColor: '#f7c1c9',
    '&:hover': {
      backgroundColor: '#e5a6a9',
    },
  };
  return (
    <Button
      variant="contained"
      sx={estilosBtnPrimario}
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto[tipo]}
    </Button>
  );
}
