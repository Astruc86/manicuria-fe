// TurnoScreen.js
import React, { useContext } from 'react';
import StepperComponent from "../components/stepper/Stepper";
import ServicioItem from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import ProfesionalInfo from "../components/profesionalList/ProfesionalInfo"; 
import TurnoContext from '../context/TurnoContext';

const TurnoScreen = () => {
    const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
    const {
        activeStep,
        setActiveStep,
        seleccionServicio,
        setSeleccionServicio,
        seleccionProfesional,
        setSeleccionProfesional
    } = useContext(TurnoContext);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ServicioItem setSeleccion={setSeleccionServicio} />;
            case 1:
                return (
                    <>
                        <ProfesionalInfo />
                        <ProfesionalList setSeleccion={setSeleccionProfesional} />
                    </>
                );
            case 2:
                return <p>Calendario de selección de Día</p>;
            case 3:
                return <p>Selección de Hora</p>;
            default:
                return <p>Resumen Final</p>;
        }
    };

    return (
        <>
            <h1>TurnoScreen</h1>
            <StepperComponent
                steps={steps}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
                getStepContent={getStepContent}
            />
        </>
    );
};

export default TurnoScreen;