import "./servicioList.css";
import CircularIndeterminate from "../Progress/CircularIndeterminate";
import { useServicios } from "../../hooks/useServicios";

const ServicioItem = ({ servicio, handleClick, isSelected }) => {
  const className = isSelected
    ? "servicio-item-wrapper selected"
    : "servicio-item-wrapper";

  return (
    <div className={className} onClick={() => handleClick(servicio)}>
      <div className="servicio-info">
        <p className="nombre">{servicio.nombre}</p>
        <p className="duracion">{servicio.duracion} min</p>
        <p className="precio">${servicio.precio}</p>
      </div>
      <p className="descripcion">{servicio.descripcion}</p>
    </div>
  );
};

const ServicioList = () => {
  const {
    servicios,
    seleccionServicio,
    isError,
    isLoading,
    seleccionarServicio,
  } = useServicios();

  return (
    <>
      {servicios.length > 0 && (
        <div className="servicio-list">
          {servicios.map((servicio, index) => (
            <ServicioItem
              key={index}
              servicio={servicio}
              handleClick={seleccionarServicio}
              isSelected={servicio === seleccionServicio}
            />
          ))}
        </div>
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>
          Error cargando los servicios. Por favor, intente de nuevo más tarde.
        </h3>
      )}
      {!isError && !isLoading && servicios.length === 0 && (
        <h3>No hay servicios disponibles.</h3>
      )}
    </>
  );
};

export default ServicioList;
