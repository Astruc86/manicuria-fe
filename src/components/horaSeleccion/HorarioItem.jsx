import React from "react";
import "./horario-item.css";

const HorarioItem = ({ horario, handleClick, isSelected }) => {
  const className = isSelected
    ? "horario-item-wrapper selected"
    : "horario-item-wrapper";
  return (
    <div className={className} onClick={() => handleClick(horario)}>
      <>{horario.hora.substring(0, 5)}</>
    </div>
  );
};

export default HorarioItem;
