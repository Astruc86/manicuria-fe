import * as React from "react";
import { useUsuarioContext } from "../context/UsuarioContext";
import { FormIniciarSesion } from "../components/formIniciarSesion/FormIniciarSesion";

export const InicioSesionScreen = () => {
  const { usuario, setUsuario } = useUsuarioContext();

  return (
    <>{usuario === 0 ? <FormIniciarSesion /> : <h1>Ya iniciaste sesión</h1>}</>
  );
};
