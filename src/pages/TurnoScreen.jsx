import React from 'react';
import StepperComponent from "../components/stepper/Stepper";
import ServicioItem from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import ProfesionalInfo from "../components/profesionalList/ProfesionalInfo"; 
import { useStepperContext } from '../context/StepperContext';

const TurnoScreen = () => {
    const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
    const {
        activeStep,
        setActiveStep,
        seleccionServicio,
        setSeleccionServicio,
        profesionalSeleccionado,
        setProfesionalSeleccionado,
    } = useStepperContext();

    console.log('Active Step:', activeStep);
    console.log('Total Steps:', steps.length);
    console.log('Seleccion Servicio:', seleccionServicio);
    console.log('Seleccion Profesional:', profesionalSeleccionado);
//borrar al final

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ServicioItem setSeleccion={setSeleccionServicio} />;
            case 1:
                return (
                    <>
                        <ProfesionalInfo />
                        <ProfesionalList setSeleccion={setProfesionalSeleccionado} />
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
                seleccionServicio={seleccionServicio}
                profesionalSeleccionado={profesionalSeleccionado}
            />
        </>
    );
};

export default TurnoScreen;