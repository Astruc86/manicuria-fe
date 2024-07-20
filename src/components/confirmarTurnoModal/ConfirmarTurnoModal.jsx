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
  const [error, setError] = useState(false);

  const handleDniChange = (event) => {
    setError(false);
    setDni(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dni.length === 8) {
      handleConfirmar(dni);
      handleClose();
    } else {
      setError(true);
    }
  };

  const handleCancel = () => {
    setDni("");
    handleClose();
  };

  const handleDialogClose = () => {
    setDni(""); 
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleDialogClose}
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

          <NumericoInput value={dni} onChange={handleDniChange} error={error} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button type="submit">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
