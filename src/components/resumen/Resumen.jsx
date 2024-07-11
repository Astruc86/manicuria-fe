import React from 'react';
import './resumen.css';

const Resumen = () => {
  return (
    <div className="resumen">
      <h2>Resumen</h2>
      <p>Servicio: servicio seleccionado</p>
      <p>Precio: $20000</p>
      <p>Duración: 30 min</p>
      <p>Profesional: profesional seleccionado</p>
      <p>Día: DD/MM/AAAA</p>
    </div>
  );
};

export default Resumen;