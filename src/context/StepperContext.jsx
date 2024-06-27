import React, { createContext, useState, useContext } from 'react';

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [seleccionServicio, setSeleccionServicio] = useState(null);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);

    const clearFutureSteps = (step) => {
        if (step < 1) setProfesionalSeleccionado(null);
        //Agrear mas condiciones para limpiar pasos futuros
    };

    return (
        <StepperContext.Provider value={{
            activeStep,
            setActiveStep,
            seleccionServicio,
            setSeleccionServicio,
            profesionalSeleccionado,
            setProfesionalSeleccionado,
            clearFutureSteps
        }}>
            {children}
        </StepperContext.Provider>
    );
};

export const useStepperContext = () => useContext(StepperContext);

export default StepperContext;