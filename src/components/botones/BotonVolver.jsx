import { Button } from "@mui/material";

export function BotonVolver({ activeStep, handleBack }) {
  return (
    <Button
      color="inherit"
      onClick={handleBack}
      sx={{ visibility: activeStep === 0 ? "hidden" : "visible" }}
    >
      Volver
    </Button>
  );
}
