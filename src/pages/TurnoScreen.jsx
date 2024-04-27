import React from 'react';
import ServicioList from '../components/servicioItem/ServicioItem'; // Asegúrate de importar correctamente el componente

export const TurnoScreen = () => {
  return (
    <>
      <h1>TurnoScreen</h1>
      <hr />
      <ServicioList /> {/* Agrega el componente ServicioList aquí para mostrar los servicios */}
    </>
  );
};