// ProfesionalList.js
import React from 'react';
import { useAppContext } from '../../context/TurnoContext'; 
import data from "../../json/profesional.json";
import "./profesional-item.css";

const ProfesionalItem = ({ profesional, handleClick, isSelected }) => {
    const className = isSelected ? 'profesional-item-wrapper selected' : 'profesional-item-wrapper';

    return (
        <div className={className} onClick={() => handleClick(profesional)}>
            <div className="profesional-info d-flex justify-content-between">
                <p>{profesional.nombre}</p>
            </div>
        </div>
    );
};

const ProfesionalList = () => {
    const { profesionalSeleccionado, setProfesionalSeleccionado } = useAppContext();
    const [profesionales, setProfesionales] = React.useState([]);

    React.useEffect(() => {
        const primerProfesional = {
            id: 0,
            nombre: "Primer Profesional Disponible",
            listaServicios: []
        };
        setProfesionales([primerProfesional, ...data]);
    }, []);

    const handleClick = (profesional) => {
        setProfesionalSeleccionado(profesional);
        console.log(profesional)
    };

    return (
        <div className="profesional-list">
            {profesionales.map((profesional, index) => (
                <ProfesionalItem
                    key={index}
                    profesional={profesional}
                    handleClick={handleClick}
                    isSelected={profesional === profesionalSeleccionado}
                />
            ))}
        </div>
    );
};

export default ProfesionalList;