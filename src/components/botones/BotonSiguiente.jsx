import { Button } from "@mui/material";

export function BotonSiguiente({
  isLastStep,
  handleOpen,
  isNextButtonDisabled,
  handleNext,
}) {
  return isLastStep ? (
    <Button onClick={handleOpen}>CONFIRMAR</Button>
  ) : (
    <Button disabled={isNextButtonDisabled} onClick={handleNext}>
      SIGUIENTE
    </Button>
  );
}
