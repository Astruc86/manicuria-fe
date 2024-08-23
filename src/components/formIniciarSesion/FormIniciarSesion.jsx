import * as React from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useUsuarioContext } from "../../context/UsuarioContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDni from "../inputs/InputDni";
import { BotonPrimario } from "../botones/BotonPrimario";
import { BotonTerciario } from "../botones/BotonTerciario";

export const FormIniciarSesion = ({
  isCliente,
  setIsCliente,
  isSwapping,
  setIsSwapping,
}) => {
  const { usuario, setUsuario } = useUsuarioContext();
  // const [isCliente, setIsCliente] = useState(true);
  const navigate = useNavigate();
  const [dni, setDni] = useState("");
  const [error, setError] = useState(false);

  const handleDniChange = (event) => {
    setError(false);
    setDni(event.target.value);
  };

  const tipoBoton = !isCliente ? "ingresarCliente" : "ingresarEmpresa";

  const handleClickIniciarComo = () => {
    setError(false);
    setDni("");
    //setIsCliente(!isCliente);
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    console.log(`Ancho del cliente: ${clientWidth}px`);
    console.log(`Alto del cliente: ${clientHeight}px`);

    if (clientWidth > 500) setIsCliente(!isCliente);
    // {
    //   setIsSwapping(true);

    //   setTimeout(() => {
    //     // Cambiar la posición después de la animación
    //     setIsCliente(!isCliente);
    //     setIsSwapping(false);
    //   }, 450); // Coincide con la duración de la transición (0.7s)
    // }
    if (clientWidth <= 500) {
      setIsSwapping(true);

      setTimeout(() => {
        // Cambiar la posición después de la animación
        setIsCliente(!isCliente);
        setIsSwapping(false);
      }, 700); // Coincide con la duración de la transición (0.7s)
    }

    // setIsSwapping(true);

    // setTimeout(() => {
    //   // Cambiar la posición después de la animación
    //   setIsCliente(!isCliente);
    //   setIsSwapping(false);
    // }, 700); // Coincide con la duración de la transición (0.7s)
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
    <FormControl defaultValue="" required>
      <Stack spacing={3}>
        <h1>¡Bienvenido/a!</h1>
        <p>
          Estás por iniciar sesión como{" "}
          <strong>{isCliente ? "cliente" : "empresa"}</strong>
        </p>
        <InputDni value={dni} onChange={handleDniChange} error={error} />

        <BotonPrimario
          tipo="ingresar"
          onClick={handleClickIngresar}
        ></BotonPrimario>

        <hr></hr>
        <BotonTerciario tipo={tipoBoton} onClick={handleClickIniciarComo} />
      </Stack>
    </FormControl>
  );
};
