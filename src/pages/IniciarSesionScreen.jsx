import * as React from "react";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useUsuario } from "../hooks/useUsuario";

const IniciarSesionScreen = () => {
  const { rol, cerrarSesion } = useUsuario();

  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/path/home");
  };
  return (
    <>
      {rol === 0 ? (
        <FormIniciarSesion />
      ) : (
        <Box sx={{ width: 370, border: "1px solid black", borderRadius: 4 }}>
          <Stack spacing={3} sx={{ padding: 5 }}>
            <h2>Ya iniciaste sesión</h2>

            <Button variant="contained" onClick={handleCerrarSesion}>
              CERRAR SESION
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default IniciarSesionScreen;
