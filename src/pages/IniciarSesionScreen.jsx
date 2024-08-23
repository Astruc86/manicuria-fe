import * as React from "react";
import { useUsuarioContext } from "../context/UsuarioContext";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/iniciarSesionScreen.css'

const IniciarSesionScreen = () => {
  const { usuario, setUsuario } = useUsuarioContext();
  const [isCliente, setIsCliente] = useState(true);

  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    setUsuario(0);
    navigate("/path/home");
  };
  const [isSwapping, setIsSwapping] = useState(false);

  const iniciarSesionClassName = isSwapping
    ? "cambiar-posicion"
    : !isCliente
    ? "empresa"
    : "";

  return (
    <>
      {usuario === 0 ? (
        // <main className={iniciarSesionClassName}>
        <main className={`iniciar-sesion ${iniciarSesionClassName}`}>
          <section className="iniciar-sesion-img">
            {isCliente ? (
              <img src="img/inicio-sesion-cliente.png" alt="" />
            ) : (
              <img src="img/inicio-sesion-empresa.png" alt="" />
            )}
          </section>
          <section className="iniciar-sesion-form">
            <FormIniciarSesion
              isCliente={isCliente}
              setIsCliente={setIsCliente}
              isSwapping={isSwapping}
              setIsSwapping={setIsSwapping}
            />
          </section>
        </main>
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
      {/* {usuario === 0 ? (
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
      )} */}
    </>
  );
};

export default IniciarSesionScreen;
