import { BotonSecundario } from "./BotonSecundario";

export function BotonVolver({ activeStep, handleBack }) {
  return (
    <BotonSecundario
      onClick={handleBack}
      tipo="volver"
      visibilidad={activeStep === 0 ? "hidden" : "visible"}
    />
  );
}
