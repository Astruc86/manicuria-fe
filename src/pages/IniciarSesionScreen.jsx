import { useUsuarioContext } from "../context/UsuarioContext";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import '../styles/iniciarSesionScreen.css'
import { BotonPrimario } from "../components/botones/BotonPrimario";

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
    <div className="container-sesion">
      {usuario === 0 ? (
        <main className={`iniciar-sesion ${iniciarSesionClassName}`}>
          <section className="iniciar-sesion-img">
            {isCliente ? (
              <img src="img/inicio_sesion_cliente.png" alt="Un gato con su cara aplastada en la pantalla" />
            ) : (
              <img src="img/inicio_sesion_empresa.png" alt="Tres gatos usando una computadora" />
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
      ) : 
        <Box className="mensaje-sesion">
          <Stack spacing={3} sx={{ padding: 5 }}>
            <h2>Ya iniciaste sesión</h2>
            <BotonPrimario tipo="cerrarSesion" onClick={handleCerrarSesion} />
          </Stack>
        </Box>
      }
    </div>
  );
};

export default IniciarSesionScreen;
