import * as React from "react";
import { FormControl } from "@mui/base/FormControl";
import Stack from "@mui/material/Stack";
import { useUsuarioContext } from "../../context/UsuarioContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDni from "../inputs/InputDni";
import { BotonPrimario } from "../botones/BotonPrimario";
import { BotonTerciario } from "../botones/BotonTerciario";

export const FormIniciarSesion = ({ isCliente, handleClickIniciarComo }) => {
  const { usuario, setUsuario } = useUsuarioContext();
  const navigate = useNavigate();
  const [dni, setDni] = useState("");
  const [error, setError] = useState(false);

  const handleDniChange = (event) => {
    setError(false);
    setDni(event.target.value);
  };

  const handleClickIngresar = (event) => {
    event.preventDefault();
    if (dni.length !== 8) {
      setError(true);
      return;
    }
    setUsuario(isCliente ? 2 : 1);
    navigate("/home");
  };

  return (
    <FormControl required>
      <Stack spacing={3}>
        <h1>¡Bienvenido/a!</h1>
        <p>
          Estás por iniciar sesión como <strong>{isCliente ? "cliente" : "empresa"}</strong>
        </p>
        <InputDni value={dni} onChange={handleDniChange} error={error} />

        <BotonPrimario tipo="ingresar" onClick={handleClickIngresar} />

        <hr />
        <BotonTerciario
          tipo={isCliente ? "ingresarEmpresa" : "ingresarCliente"}
          onClick={handleClickIniciarComo}
        />
      </Stack>
    </FormControl>
  );
};
