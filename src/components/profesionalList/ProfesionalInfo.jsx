import React from 'react';
import { useStepperContext } from '../../context/StepperContext';

const ProfesionalInfo = () => {
    const { profesionalSeleccionado } = useStepperContext();

    return (
        <div>
            <h2>Profesional Seleccionado:</h2>
            {profesionalSeleccionado ? (
                <p>{profesionalSeleccionado.nombre}</p>
            ) : (
                <p>No se ha seleccionado ningún profesional.</p>
            )}
        </div>
    );
};

export default ProfesionalInfo;