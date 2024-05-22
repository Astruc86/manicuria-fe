// AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [seleccionServicio, setSeleccionServicio] = useState(null);
    const [seleccionProfesional, setSeleccionProfesional] = useState(null);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);

    return (
        <AppContext.Provider value={{
            activeStep,
            setActiveStep,
            seleccionServicio,
            setSeleccionServicio,
            seleccionProfesional,
            setSeleccionProfesional,
            profesionalSeleccionado,
            setProfesionalSeleccionado
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;