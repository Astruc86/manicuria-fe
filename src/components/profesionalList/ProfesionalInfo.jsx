// ProfesionalInfo.js
import React from 'react';
import { useAppContext } from '../../context/TurnoContext'; // Importa useAppContext

const ProfesionalInfo = () => {
    const { profesionalSeleccionado } = useAppContext();

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