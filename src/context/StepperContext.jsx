import React, { createContext, useState, useContext } from "react";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [seleccionServicio, setSeleccionServicio] = useState(null);
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);
  const [seleccionHorario, setSeleccionHorario] = useState(null);
  const [seleccionDia, setSeleccionDia] = useState(null);
  const [listaProfesionalesBE, setListaProfesionalesBE] = useState([]);
  const [seleccionCita, setSeleccionCita] = useState(null);
  const [esPrimerProfesional, setEsPrimerProfesional] = useState(false);
  const [seleccionDni, setSeleccionDni] = useState(null);

  const limpiarStepper = () => {
    setActiveStep(0);
    setSeleccionServicio(null);
    setProfesionalSeleccionado(null);
    setSeleccionHorario(null);
    setSeleccionDia(null);
    setListaProfesionalesBE([]);
    setProfesionalViejo(null);
    setSeleccionDni(null);
  };

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        setActiveStep,
        seleccionServicio,
        setSeleccionServicio,
        profesionalSeleccionado,
        setProfesionalSeleccionado,
        seleccionHorario,
        setSeleccionHorario,
        seleccionDia,
        setSeleccionDia,
        listaProfesionalesBE,
        setListaProfesionalesBE,
        seleccionDni,
        setSeleccionDni,
        limpiarStepper,
        seleccionCita,
        setSeleccionCita,
        esPrimerProfesional,
        setEsPrimerProfesional,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);

export const useActiveStep = () => {
  const { activeStep, setActiveStep } = useContext(StepperContext);
  return { activeStep, setActiveStep };
};

export const useSeleccionServicio = () => {
  const { seleccionServicio, setSeleccionServicio } =
    useContext(StepperContext);
  return { seleccionServicio, setSeleccionServicio };
};

export const useProfesionalSeleccionado = () => {
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useContext(StepperContext);
  return { profesionalSeleccionado, setProfesionalSeleccionado };
};

export const useSeleccionHorario = () => {
  const { seleccionHorario, setSeleccionHorario } = useContext(StepperContext);
  return { seleccionHorario, setSeleccionHorario };
};

export const useSeleccionDia = () => {
  const { seleccionDia, setSeleccionDia } = useContext(StepperContext);
  return { seleccionDia, setSeleccionDia };
};

export const useListaProfesionalesBE = () => {
  const { listaProfesionalesBE, setListaProfesionalesBE } =
    useContext(StepperContext);
  return { listaProfesionalesBE, setListaProfesionalesBE };
};

export const useSeleccionCita = () => {
  const { seleccionCita, setSeleccionCita } = useContext(StepperContext);
  return { seleccionCita, setSeleccionCita };
};

export const useEsPrimerProfesional = () => {
  const { esPrimerProfesional, setEsPrimerProfesional } =
    useContext(StepperContext);
  return { esPrimerProfesional, setEsPrimerProfesional };
};

export const useSeleccionDni = () => {
  const { seleccionDni, setSeleccionDni } = useContext(StepperContext);
  return { seleccionDni, setSeleccionDni };
};

export const useLimpiarStepper = () => {
  const { limpiarStepper } = useContext(StepperContext);
  return { limpiarStepper };
};
