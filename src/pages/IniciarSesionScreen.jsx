import * as React from "react";
import { useUsuarioContext } from "../context/UsuarioContext";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const IniciarSesionScreen = () => {
  const { usuario, setUsuario } = useUsuarioContext();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    setUsuario(0);
    navigate("/path/home");
  };
  return (
    <>
      {usuario === 0 ? (
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
