import * as React from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useUsuarioContext } from "../../context/UsuarioContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormIniciarSesion = () => {
  const { usuario, setUsuario } = useUsuarioContext();
  const [isCliente, setIsCliente] = useState(true);
  const navigate = useNavigate();

  const textosBoton = {
    cliente: "INGRESAR COMO CLIENTE",
    empresa: "INGRESAR COMO EMPRESA",
  };

  const handleClickIniciarComo = () => {
    setIsCliente(!isCliente);
  };

  const handleClickIngresar = () => {
    setUsuario(isCliente ? 2 : 1);
    navigate("/home");
  };
  return (
    <FormControl defaultValue="" required>
      <Box sx={{ width: 370, border: "1px solid black", borderRadius: 4 }}>
        <Stack spacing={3} sx={{ padding: 5 }}>
          <h2>¡Bienvenido/a!</h2>
          <p>
            Estás por iniciar sesión como <strong>{isCliente ? "cliente" : "empresa"}</strong>
          </p>
          <Button variant="contained" onClick={handleClickIngresar}>
            INGRESAR
          </Button>
          <hr></hr>
          <Button variant="text" onClick={handleClickIniciarComo}>
            {isCliente ? textosBoton.empresa : textosBoton.cliente}
          </Button>
        </Stack>
      </Box>
    </FormControl>
  );
};
