import React from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import { useEmpresa } from "../../hooks/useEmpresa";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

const Carrusel = () => {
  const { listaCarrusel, isLoading, isError } = useEmpresa();

  return (
    <>
      {listaCarrusel?.length > 0 && (
        <Carousel className="d-flex carrusel ">
          {listaCarrusel?.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.url} alt={item.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && <h3>Error cargando las imágenes</h3>}
    </>
  );
};

export default Carrusel;
