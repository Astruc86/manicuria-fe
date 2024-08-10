import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NumericoInput from "../numericoInput/NumericoInput";
import { useStepperContext } from "../../context/StepperContext";

export default function ConfirmarTurnoModal({ handleClose, open }) {
  const { setSeleccionDni } = useStepperContext();
  const [dni, setDni] = useState("");
  const [error, setError] = useState(false);

  const handleDniChange = (event) => {
    setError(false);
    setDni(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dni.length !== 8) {
      setError(true);
      return;
    }
    setSeleccionDni(dni);
    handleClose();
  };

  const handleDialogClose = () => {
    setDni("");
    setError(false);
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
          <Button onClick={handleDialogClose}>Cancelar</Button>
          <Button type="submit">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
