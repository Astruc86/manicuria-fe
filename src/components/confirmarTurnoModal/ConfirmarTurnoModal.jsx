import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NumericoInput from "../numericoInput/NumericoInput";

export default function ConfirmarTurnoModal({
  handleClose,
  open,
  handleConfirmar,
}) {
  const [dni, setDni] = useState("");

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dni.length === 8) {
      handleConfirmar(dni);
      handleClose();
    } else {
      //To do:mostrar de alguna forma que el tamaño del dni tiene que ser de 8
      console.log("El dni tiene que tener 8 numeros");
      alert("El dni tiene que tener 8 numeros");
    }
    console.log("DNI en la modal:", dni); // Aquí tienes el DNI
  };

  const handleCancel = () => {
    setDni("");
    handleClose();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Confirmar Turno</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Para hacer efectiva la confirmación del turno, por favor ingrese su
            DNI.
          </DialogContentText>

          <NumericoInput value={dni} onChange={handleDniChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button type="submit">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
