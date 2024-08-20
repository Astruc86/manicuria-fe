import {
  useActiveStep,
  useEsPrimerProfesional,
  useProfesionalSeleccionado,
  useSeleccionDia,
  useSeleccionHorario,
  useSeleccionServicio,
} from "../context/StepperContext";

export function useStepperTurno() {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const { activeStep, setActiveStep } = useActiveStep();
  const { seleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();
  const { seleccionHorario, setSeleccionHorario } = useSeleccionHorario();
  const { seleccionDia, setSeleccionDia } = useSeleccionDia();

  const { esPrimerProfesional, setEsPrimerProfesional } =
    useEsPrimerProfesional();

  const stepStateMap = {
    1: setProfesionalSeleccionado,
    2: setSeleccionDia,
    3: setSeleccionHorario,
  };

  const clearFutureSteps = (step) => {
    Object.keys(stepStateMap).forEach((key) => {
      if (step < key) {
        stepStateMap[key](null);
      }
    });
  };

  const clearPastStep = (step) => {
    if (step === 3 && esPrimerProfesional) {
      setProfesionalSeleccionado({ id: 0 });
    }
    if (step === 1 && esPrimerProfesional) {
      setEsPrimerProfesional(false);
    }
  };

  const handleNext = () => {
    clearFutureSteps(activeStep);
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    clearPastStep(activeStep);
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const isNextButtonDisabled =
    (activeStep === 0 && !seleccionServicio) ||
    (activeStep === 1 && !profesionalSeleccionado) ||
    (activeStep === 2 && !seleccionDia) ||
    (activeStep === 3 && !seleccionHorario);

  const isLastStep = activeStep === steps.length - 1;

  return {
    steps,
    activeStep,
    handleNext,
    handleBack,
    isNextButtonDisabled,
    isLastStep,
  };
}
