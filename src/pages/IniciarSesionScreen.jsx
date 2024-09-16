import { useUsuarioContext } from "../context/UsuarioContext";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import "../styles/iniciarSesionScreen.css";
import { BotonPrimario } from "../components/botones/BotonPrimario";
import { useCambioTamañoPantalla } from "../hooks/useCambioTamañoPantalla";

const IniciarSesionScreen = () => {
  const { usuario, setUsuario } = useUsuarioContext();
  const [isCliente, setIsCliente] = useState(true);

  const { windowWidth } = useCambioTamañoPantalla(isCliente);
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    setUsuario(0);
    navigate("/path/home");
  };

  const handleClickIniciarComo = () => {
    const iniciarSesionMain = document.querySelector(".iniciar-sesion");

    if (!iniciarSesionMain) return;
    iniciarSesionMain.classList.remove(
      "show-client",
      "show-company",
      "small-screen",
      "cambiar-posicion"
    );

    if (windowWidth <= 500) {
      iniciarSesionMain.classList.add("small-screen");
      iniciarSesionMain.classList.add("cambiar-posicion");
      setTimeout(() => {
        setIsCliente(!isCliente);
        iniciarSesionMain.classList.remove("cambiar-posicion");
      }, 700);

    } else {
      const iniciarSesionClassName = isCliente ? "show-company" : "show-client";
      iniciarSesionMain.classList.add(iniciarSesionClassName);
      setIsCliente(!isCliente);
    }
  };

  const estilosMensajeCerrarSesion = {
    width: "350px",
    textAlign: "center",
  };

  return (
    <div className="container-sesion">
      {usuario === 0 ? (
        <main className="iniciar-sesion">
          <section className="iniciar-sesion-img">
            {isCliente ? (
              <img
                src="img/inicio_sesion_cliente.svg"
                alt="Un gato con su cara aplastada en la pantalla"
              />
            ) : (
              <img
                src="img/inicio_sesion_empresa.svg"
                alt="Tres gatos usando una computadora"
              />
            )}
          </section>
          <section className="iniciar-sesion-form">
            <FormIniciarSesion
              isCliente={isCliente}
              handleClickIniciarComo={handleClickIniciarComo}
            />
          </section>
        </main>
      ) : (
        <Box sx={estilosMensajeCerrarSesion}>
          <Stack spacing={3} sx={{ padding: 5 }}>
            <h2>Ya iniciaste sesión</h2>
            <BotonPrimario tipo="cerrarSesion" onClick={handleCerrarSesion} />
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default IniciarSesionScreen;
