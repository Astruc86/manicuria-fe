import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputDni from "../inputs/InputDni";
import { useStepperContext } from "../../context/StepperContext";
import "./confirmarTurnoModal.css";
import { BotonSecundario } from "../botones/BotonSecundario";
import { BotonPrimario } from "../botones/BotonPrimario";

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
        role="dialog"
        open={open}
        onClose={handleDialogClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
        className="confirmar-turno"
      >
        <DialogTitle>Confirmar Turno</DialogTitle>
        <DialogContent sx={{ pb:1 }}>
          <DialogContentText sx={{ mb: 3 }}>
            Para hacer efectiva la confirmación del turno, por favor ingrese su
            DNI.
          </DialogContentText>

          <InputDni value={dni} onChange={handleDniChange} error={error} />
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-between", mt:0, mb:1,px:2}}>
          <BotonSecundario tipo="cancelar" onClick={handleDialogClose} />
          <BotonPrimario tipo="confirmar" onClick={handleSubmit}/>
        </DialogActions>
      </Dialog>
    </>
  );
}
