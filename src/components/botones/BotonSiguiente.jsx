import { Button } from "@mui/material";
import { BotonPrimario } from "./BotonPrimario";

export function BotonSiguiente({
  isLastStep,
  handleOpen,
  isNextButtonDisabled,
  handleNext,
}) {
  return isLastStep ? (
    <BotonPrimario tipo="confirmar" onClick={handleOpen} />
  ) : (
    <BotonPrimario
      tipo="siguiente"
      onClick={handleNext}
      deshabilitado={isNextButtonDisabled}
    />
  );
}
