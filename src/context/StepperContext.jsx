import React, { createContext, useState, useContext } from 'react';

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [seleccionServicio, setSeleccionServicio] = useState(null);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);

    return (
        <StepperContext.Provider value={{
            activeStep,
            setActiveStep,
            seleccionServicio,
            setSeleccionServicio,
            profesionalSeleccionado,
            setProfesionalSeleccionado
        }}>
            {children}
        </StepperContext.Provider>
    );
};

export const useStepperContext = () => useContext(StepperContext);

export default StepperContext;